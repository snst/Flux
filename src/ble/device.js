import { xf, existance , equals, exists } from '../functions.js';
import { ble } from './web-ble.js';

// Device
//
// id     -> the device id for the event system,
// name   -> the ble name of the device like 'Wahoo Kickr'
// filter -> ble scan filter
// device   -> returned from navigator.bluetooth.requestDevice
// server   -> returned from device.gatt.connect()
// services -> a list of the primary services of the device
//             device, server and services are populated by connect
// init()     -> augments the costructor before its properties are initiated
// postInit() -> augments the costructor after its properties are initiated
// start()    -> is called after succesful connection
// connect()  -> scan for and connect to a device with this.filter and dispatch events
//               for this.id

class Device {
    constructor(args = {}) {
        this.init(args);
        this.id       = existance(args.id, this.defaultId());
        this.name     = existance(args.name, this.defaultName());
        this.filter   = existance(args.filter, this.defaultFilter());
        this.device   = {};
        this.server   = {};
        this.services = {};
        this.postInit(args);
        this.sub();
    }
    defaultFilter() { return  ble.requestFilters.all; }
    defaultId()     { return 'ble-device'; }
    defaultName()   { return 'Unknown'; }
    init()          { return; }
    postInit(args)  { return; }
    start(device)   { return; }
    sub() {
        const self = this;

        xf.sub(`ui:${self.id}:switch`, async () => {
            if(self.isConnected()) {
                self.disconnect();
            } else {
                self.connect();
            }
        });
    }
    isConnected() {
        const self = this;
        return ble.isConnected(self.device);
    }
    async connect() {
        const self = this;
        xf.dispatch(`${self.id}:connecting`);
        try {
            const res = await ble.connect(self.filter);

            self.device   = res.device;
            self.server   = res.server;
            self.services = res.services;
            self.name     = res.device.name;

            await self.start();

            xf.dispatch(`${self.id}:connected`);
            xf.dispatch(`${self.id}:name`, self.name);
        } catch(err) {
            xf.dispatch(`${self.id}:disconnected`);
            console.error(`:ble 'Could not request ${self.id}'`, err);
        } finally {
            if(self.isConnected()) {
                self.device.addEventListener('gattserverdisconnected', self.onDisconnect.bind(self));
            }
        }
    }
    disconnect() {
        const self = this;
        ble.disconnect(self.device);
    }
    onDisconnect() {
        const self = this;
        xf.dispatch(`${self.id}:disconnected`);
        xf.dispatch(`${self.id}:name`, '--');
        self.stop();
        self.device.removeEventListener('gattserverdisconnected', self.onDisconnect.bind(self));
        console.log(`Disconnected ${self.id}, ${self.name}.`);
    }
    stop() {}
    hasService(services, uuid) {
        let res = false;
        for(let service of services) {
            if(equals(service.uuid, uuid)) res = true;
        }
        return res;
    }
    findService(services, uuid) {
        for(let service of services) {
            if(equals(service.uuid, uuid)) {
                return service;
            };
        }
        console.warn(`service with uuid ${uuid} not found in: `, services);
        return undefined;
    }
    async getService(uuid) {
        const self = this;
        let service = self.findService(self.services, uuid);
        if(exists(service)) {
            return service;
        }
        return await self.ble.getService(self.server, uuid);
    }
}

export { Device };

