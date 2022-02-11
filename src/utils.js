import { exists, existance, first, last, equals, isObject, isFunction, isArray } from './functions.js';

// format
function formatTime(args = {}) {
    const defaults = {
        unit:   'seconds',
        format: 'hh:mm:ss',
    };

    const value  = args.value;
    const format = existance(args.format, defaults.format);
    const unit   = existance(args.unit, defaults.unit);

    if(equals(unit, 'seconds')) {
        let hour = Math.floor(value / 3600);
        let min  = Math.floor(value % 3600 / 60);
        let sec  = value % 60;
        let sD   = (sec < 10)  ? `0${sec}`  : `${sec}`;
        let mD   = (min < 10)  ? `0${min}`  : `${min}`;
        let hD   = (hour < 10) ? `0${hour}` : `${hour}`;
        let hDs  = (hour < 10) ? `${hour}`  : `${hour}`;
        let res  = ``;

        if(equals(format, 'hh:mm:ss')) {
            res = `${hD}:${mD}:${sD}`;
        }
        if(equals(format, 'mm:ss')) {
            if(value < 3600) {
                res = `${mD}:${sD}`;
            } else {
                res = `${hD}:${mD}:${sD}`;
            }
        }

        return res;
    }

    return value;
}

function dateToDashString(date) {
    const day    = (date.getDate()).toString().padStart(2, '0');
    const month  = (date.getMonth()+1).toString().padStart(2, '0');
    const year   = date.getFullYear().toString();
    const hour   = (date.getHours()).toString().padStart(2, '0');
    const minute = (date.getMinutes()).toString().padStart(2, '0');
    return `${day}-${month}-${year}-at-${hour}-${minute}h`;
}

function format(x, precision = 1000) {
    return Math.round(x * precision) / precision;
}

function kphToMps(kph) {
    return format(kph / 3.6);
};

function mpsToKph(mps) {
    return 3.6 * mps;
};

// Math
const bod = Math.pow(2, 31) / 180;
const dob = 180 / Math.pow(2, 31);

function degToSemicircles(degrees) {
    return degrees * bod;
}

function semicirclesToDeg(semicircles) {
    return semicircles * dob;
}

function digits(n) {
    return Math.log(n) * Math.LOG10E + 1 | 0;
}

function rand(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gte(a, b) { return a >= b; }
function lte(a, b) { return a <= b; }
function gt(a, b) { return a > b; }
function lt(a, b) { return a < b; }

function inRange(min, max, value, lb=gte, ub=lte) {
    return (lb(value, min) && ub(value, max));
}

function divisors(number) {
    let divisors = [1];
    for(let i=2; i < number/2; i++) {
        if(number % i === 0) { divisors.push(i); }
    }
    return divisors;
}

//
// WebBLE
//
function hex(n) {
    let h = parseInt(n).toString(16).toUpperCase();
    if(h.length === 1) {
        h = '0'+ h;
    }
    return '0x' + h;
}

//
// ANT+ and .FIT
//
const garmin_epoch = Date.parse('31 Dec 1989 00:00:00 GMT');

function toFitTimestamp(timestamp) {
    return Math.round((timestamp - garmin_epoch) / 1000);
}

function toJsTimestamp(fitTimestamp) {
    return (fitTimestamp * 1000) + garmin_epoch;
}

function now() {
    return toFitTimestamp(Date.now());
}

function timeDiff(timestamp1, timestamp2) {
    let difference = (timestamp1 / 1000) - (timestamp2 / 1000);
    return Math.round(Math.abs(difference));
};

function toFitSpeed(speed, unit = 'kph') {
    const scale = 1000;

    if(unit === 'kph') {
        return parseInt((speed / 3.6) * scale, 10);
    }
    return speed;
}

function toFitDistance(distance, unit = 'km') {
    const scale = 100;

    if(unit === 'km') {
        return parseInt((distance * 1000) * scale, 10);
    }
    return distance;
}

function splitAt(xs, at) {
    if(!isArray(xs)) throw new Error(`splitAt takes an array: ${xs}`);
    let i = -1;
    return xs.reduce((acc, x) => {
        if((equals(x, at)) || (equals(acc.length, 0) && !equals(x, at))) {
            acc.push([x]); i++;
        } else {
            acc[i].push(x);
        }
        return acc;
    },[]);
}

function calculateCRC(uint8array, start, end) {
    const crcTable = [
        0x0000, 0xCC01, 0xD801, 0x1400, 0xF001, 0x3C00, 0x2800, 0xE401,
        0xA001, 0x6C00, 0x7800, 0xB401, 0x5000, 0x9C01, 0x8801, 0x4400,
    ];

    let crc = 0;
    for (let i = start; i < end; i++) {
        const byte = uint8array[i];
        let tmp = crcTable[crc & 0xF];
        crc = (crc >> 4) & 0x0FFF;
        crc = crc ^ tmp ^ crcTable[byte & 0xF];
        tmp = crcTable[crc & 0xF];
        crc = (crc >> 4) & 0x0FFF;
        crc = crc ^ tmp ^ crcTable[(byte >> 4) & 0xF];
    }

    return crc;
}

function typeToAccessor(basetype, method = 'set') {
    const uint8   = [0, 2, 7, 10, 13, 'enum', 'uint8', 'string', 'byte'];
    const uint16  = [132, 139, 'uint16', 'uint16z'];
    const uint32  = [134, 140, 'uint32', 'uint32z'];
    const uint64  = [143, 144, 'uint64', 'uint64z'];

    const int8    = [1, 'sint8'];
    const int16   = [131, 'sint16'];
    const int32   = [133, 'sint32'];
    const int64   = [142, 'sint64'];

    const float32 = [136, 'float32'];
    const float64 = [137, 'float64'];

    if(uint8.includes(basetype))   return `${method}Uint8`;
    if(uint16.includes(basetype))  return `${method}Uint16`;
    if(uint32.includes(basetype))  return `${method}Uint32`;
    if(uint64.includes(basetype))  return `${method}Uint64`;
    if(int8.includes(basetype))    return `${method}Int8`;
    if(int16.includes(basetype))   return `${method}Int16`;
    if(int32.includes(basetype))   return `${method}Int32`;
    if(int64.includes(basetype))   return `${method}Int64`;
    if(float32.includes(basetype)) return `${method}Float32`;
    if(float64.includes(basetype)) return `${method}Float64`;

    return `${method}Uint8`;
}

export {
    // format
    formatTime,
    dateToDashString,
    format,
    kphToMps,
    mpsToKph,

    // math
    digits,
    rand,
    gte,
    lte,
    gt,
    lt,
    inRange,
    divisors,

    // WebBLE
    hex,

    // ANT+ and .FIT
    toFitTimestamp,
    toJsTimestamp,
    now,
    timeDiff,
    toFitSpeed,
    toFitDistance,
    splitAt,
    calculateCRC,
    typeToAccessor,
};
