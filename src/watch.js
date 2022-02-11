import { equals, exists, existance, first, last, xf, avg, max } from './functions.js';
import { kphToMps, mpsToKph, timeDiff } from './utils.js';
import { models } from './models/models.js';

function beep(){
    var audio = new Audio("beep.wav");
    audio.play();
}

class Watch {
    constructor(args) {
        this.elapsed          = 0;
        this.remaining        = 0;
        this.lapTime          = 0;
        this.stepTime         = 0;
        this.skipTime         = 0;

        this.intervalIndex    = 0;
        this.stepIndex        = 0;
        this.intervalDuration = 0;
        this.stepDuration     = 0;

        this.state            = 'stopped';
        this.stateWorkout     = 'stopped';

        this.intervals        = [];
        this.workout          = null;

        this.historyLength = 300;
        this.historyHeart = Array(this.historyLength).fill(0);  
        this.historyCadence = Array(this.historyLength).fill(0); 
        this.historyCadenceTarget = Array(this.historyLength).fill(0); 
        this.historyPower = Array(this.historyLength).fill(0);
        this.historyPowerTarget = Array(this.historyLength).fill(0);

        this.heartRate = 0;
        this.powerTarget = 0;
        this.power = 0;
        this.cadence = 0;
        this.cadenceTarget = 0;

        this.init();
    }
    init() {
        let self = this;
        xf.sub('db:workout',       workout => { self.intervals     = workout.intervals; self.workout = workout; });
        xf.sub('db:elapsed',       elapsed => { self.elapsed       = elapsed; });
        xf.sub('db:lapTime',          time => { self.lapTime       = time; });
        xf.sub('db:stepTime',         time => { self.stepTime      = time; });
        xf.sub('db:intervalDuration', time => { self.lapDuration   = time; });
        xf.sub('db:stepDuration',     time => { self.stepDuration  = time; });
        xf.sub('db:intervalIndex',   index => { self.intervalIndex = index; });
        xf.sub('db:stepIndex',       index => { self.stepIndex     = index; });
        xf.sub('db:watchStatus',     state => { self.state         = state; });
        xf.sub('db:workoutStatus',   state => {
            self.stateWorkout = state;

            if(self.isWorkoutDone()) {
                xf.dispatch('watch:lap');
                console.log(`Workout done!`);
            }
        });

        xf.sub('db:heartRate',      val => { self.heartRate  = val; });
        xf.sub('db:powerTarget',    val => { self.powerTarget  = val; });
        xf.sub('db:power',          val => { self.power  = val; });
        xf.sub('db:cadence',        val => { self.cadence  = val; });
        xf.sub('db:cadenceTarget',  val => { self.cadenceTarget  = val; });
        this.powerplot = document.getElementById('powerplot')
    }
    isStarted()        { return this.state        === 'started'; };
    isPaused()         { return this.state        === 'paused'; };
    isStopped()        { return this.state        === 'stopped'; };
    isWorkoutStarted() { return this.stateWorkout === 'started'; };
    isWorkoutDone()    { return this.stateWorkout === 'done'; };
    start() {
        let self = this;
        if(self.isStarted() && !self.isWorkoutStarted()) {
            self.pause();
        } else {
            self.timer = setInterval(self.onTick.bind(self), 1000);
            xf.dispatch('watch:started');
        }
    }
    startWorkout() {
        let self         = this;
        let intervalTime = self.intervals[0].duration;
        let stepTime     = self.intervals[0].steps[0].duration;
        self.skipTime    = 0;

        xf.dispatch('workout:started');

        xf.dispatch('watch:intervalDuration', intervalTime);
        xf.dispatch('watch:stepDuration',     stepTime);
        xf.dispatch('watch:lapTime',          intervalTime);
        xf.dispatch('watch:stepTime',         stepTime);

        xf.dispatch('watch:intervalIndex',  0);
        xf.dispatch('watch:stepIndex', 0);

        if(!self.isStarted()) {
            self.start();
        }
    }
    restoreWorkout() {
        let self = this;

        if(self.isWorkoutStarted()) {
            xf.dispatch('workout:started');
        }
        if(self.isStarted()) {
            self.start();
        }
    }
    resume() {
        let self = this;
        if(!self.isStarted()) {
            self.timer = setInterval(self.onTick.bind(self), 1000);
            xf.dispatch('watch:started');
        }
    }
    pause() {
        let self = this;
        clearInterval(self.timer);
        xf.dispatch('watch:paused');
    }
    stop() {
        let self = this;
        if(self.isStarted() || self.isPaused()) {
            clearInterval(self.timer);

            xf.dispatch('watch:stopped');

            if(self.isWorkoutStarted()) {
                xf.dispatch('workout:stopped');
            }

            self.lap();

            xf.dispatch('watch:intervalIndex', 0);
            xf.dispatch('watch:stepIndex',     0);
            xf.dispatch('watch:elapsed',       0);
            xf.dispatch('watch:remaining',     0);
            xf.dispatch('watch:lapTime',       0);
        }
    }
    onTick() {
        let self     = this;
        let elapsed  = self.elapsed + 1;
        let lapTime  = self.lapTime;
        let stepTime = self.stepTime;

        if(self.isWorkoutStarted()) {
            lapTime  -= 1;
            stepTime -= 1;
        } else {
            lapTime  += 1;
        }

        xf.dispatch('watch:elapsed',  elapsed);
        xf.dispatch('watch:remaining',  Math.max(0, self.workout.meta.duration - self.skipTime - elapsed));
        xf.dispatch('watch:lapTime',  lapTime);
        xf.dispatch('watch:stepTime', stepTime);

        if((self.isWorkoutStarted()) && (stepTime <= 0)) {
            self.step();
        }

        this.plot();
    }
    lap() {
        let self = this;

        if(self.isWorkoutStarted()) {
            let i             = self.intervalIndex;
            let s             = self.stepIndex;
            let intervals     = self.intervals;
            let moreIntervals = i < (intervals.length - 1);
            self.skipTime     += self.lapTime;

            if(moreIntervals) {
                i += 1;
                s  = 0;

                self.nextInterval(intervals, i, s);
                self.nextStep(intervals, i, s);
            } else {
                xf.dispatch('workout:done');
            }
        } else {
            xf.dispatch('watch:lap');
            xf.dispatch('watch:lapTime', 0);
        }
    }
    step() {
        let self          = this;
        let i             = self.intervalIndex;
        let s             = self.stepIndex;
        let intervals     = self.intervals;
        let steps         = intervals[i].steps;
        let moreIntervals = i < (intervals.length  - 1);
        let moreSteps     = s < (steps.length - 1);

        if(moreSteps) {
            s += 1;

            self.nextStep(intervals, i, s);
        } else if (moreIntervals) {
            i += 1;
            s  = 0;

            self.nextInterval(intervals, i, s);
            self.nextStep(intervals, i, s);
        } else {
            xf.dispatch('workout:done');
        }
    }
    nextInterval(intervals, intervalIndex, stepIndex) {
        let self             = this;
        let intervalDuration = self.intervalsToDuration(intervals, intervalIndex);
        let stepDuration     = self.intervalsToStepDuration(intervals, intervalIndex, stepIndex);

        self.dispatchInterval(intervalDuration, intervalIndex);
        beep();
    }
    nextStep(intervals, intervalIndex, stepIndex) {
        let self         = this;
        let stepDuration = self.intervalsToStepDuration(intervals, intervalIndex, stepIndex);
        self.dispatchStep(stepDuration, stepIndex);
    }
    intervalsToDuration(intervals, intervalIndex) {
        let duration = intervals[intervalIndex].duration;
        return duration;
    }
    intervalsToStepDuration(intervals, intervalIndex, stepIndex) {
        let steps    = intervals[intervalIndex].steps;
        let duration = steps[stepIndex].duration;
        return duration;
    }
    dispatchInterval(intervalDuration, intervalIndex) {
        xf.dispatch('watch:intervalDuration', intervalDuration);
        xf.dispatch('watch:lapTime',          intervalDuration);
        xf.dispatch('watch:intervalIndex',    intervalIndex);
        xf.dispatch('watch:lap');
    }
    dispatchStep(stepDuration, stepIndex) {
        xf.dispatch('watch:stepDuration', stepDuration);
        xf.dispatch('watch:stepTime',     stepDuration);
        xf.dispatch('watch:stepIndex',    stepIndex);
        xf.dispatch('watch:step');
    }

    plot() {
        this.historyHeart = this.historyHeart.concat(this.heartRate)
        this.historyCadence = this.historyCadence.concat(this.cadence)
        this.historyPower = this.historyPower.concat(this.power)
        this.historyCadenceTarget = this.historyCadenceTarget.concat(this.cadenceTarget)
        this.historyPowerTarget = this.historyPowerTarget.concat(this.powerTarget)
        while (this.historyHeart.length > this.historyLength) {
            this.historyHeart.splice(0, 1)
            this.historyCadence.splice(0, 1)
            this.historyPower.splice(0, 1)
            this.historyCadenceTarget.splice(0, 1)
            this.historyPowerTarget.splice(0, 1)
        }

        Plotly.purge(this.powerplot);
        var layout = {
            plot_bgcolor:"#28272D",
            paper_bgcolor:"#28272D",
            showlegend: false,
            margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 40
        },
        };
        let config = {'displayModeBar': false, 'staticPlot': true}

        let data = [
            {
                y: this.historyPowerTarget,
                mode: 'lines',
                line: {color: '#c8eac8'}
            },
            {
                y: this.historyCadenceTarget,
                mode: 'lines',
                line: {color: '#b3d4ff'}
            },
            {
                y: this.historyPower,
                mode: 'lines',
                line: {color: '#57C057'}
            },
            {
                y: this.historyHeart,
                mode: 'lines',
                line: {color: '#FE340B'}
            },
            {
                y: this.historyCadence,
                mode: 'lines',
                line: {color: '#328AFF'}
            },
        ]

        Plotly.plot(this.powerplot, data, layout, config=config);  
    }
}

// Register DB Events
xf.reg('watch:lapDuration',    (time, db) => db.intervalDuration = time);
xf.reg('watch:stepDuration',   (time, db) => db.stepDuration     = time);
xf.reg('watch:lapTime',        (time, db) => db.lapTime          = time);
xf.reg('watch:stepTime',       (time, db) => db.stepTime         = time);
xf.reg('watch:intervalIndex', (index, db) => db.intervalIndex    = index);
xf.reg('watch:stepIndex',     (index, db) => {
    db.stepIndex        = index;
    const intervalIndex = db.intervalIndex;
    const powerTarget   = db.workout.intervals[intervalIndex].steps[index].power;
    const slopeTarget   = db.workout.intervals[intervalIndex].steps[index].slope;
    const cadenceTarget = db.workout.intervals[intervalIndex].steps[index].cadence;

    if(exists(slopeTarget)) {
        xf.dispatch('ui:slope-target-set', slopeTarget);
        if(!equals(db.mode, 'slope')) {
            xf.dispatch('ui:mode-set', 'slope');
        }
    }
    if(exists(cadenceTarget)) {
        xf.dispatch('ui:cadence-target-set', cadenceTarget);
    } else {
        xf.dispatch('ui:cadence-target-set', 0);
    }
    if(exists(powerTarget)) {
        xf.dispatch('ui:power-target-set', models.ftp.toAbsolute(powerTarget, db.ftp));
        if(!exists(slopeTarget) && !equals(db.mode, 'erg')) {
            xf.dispatch('ui:mode-set', 'erg');
        }
    } else {
        xf.dispatch('ui:power-target-set', 0);
    }
});
xf.reg('workout:started', (x, db) => {
    db.records = [];
    db.resistanceTarget = 0;
    db.slopeTarget = 0;
    db.powerTarget = 0;
    db.workoutStatus = 'started';
});
xf.reg('workout:stopped', (x, db) => db.workoutStatus = 'stopped');
xf.reg('workout:done',    (x, db) => db.workoutStatus = 'done');
xf.reg('watch:started',   (x, db) => {
    db.watchStatus = 'started';
    if(db.lapStartTime === false) {
        db.lapStartTime = Date.now(); // if first lap
    }
});
xf.reg('watch:paused',  (x, db) => db.watchStatus = 'paused');
xf.reg('watch:stopped', (x, db) => db.watchStatus = 'stopped');
xf.reg('watch:elapsed', (x, db) => {
    db.elapsed = x;
    db.distance  += 1 * kphToMps(db.speed);

    let record = {timestamp:  Date.now(),
                  power:      db.power,
                  cadence:    db.cadence,
                  speed:      db.speed,
                  heart_rate: db.heartRate,
                  distance:   db.distance};
    db.records.push(record);
    db.lap.push(record);

    if(equals(db.elapsed % 60, 0)) {
        models.session.backup(db);
        console.log(`backing up of ${db.records.length} records ...`);
    }
});
xf.reg('watch:lap', (x, db) => {
    let timeEnd   = Date.now();
    let timeStart = db.lapStartTime;
    let elapsed   = timeDiff(timeStart, timeEnd);

    if(elapsed > 0) {
        db.laps.push({timestamp:        timeEnd,
                      startTime:        timeStart,
                      totalElapsedTime: elapsed,
                      avgPower:         Math.round(avg(db.lap, 'power')),
                      maxPower:         max(db.lap, 'power')});
    }
    db.lap = [];
    db.lapStartTime = timeEnd + 0;
});

const watch = new Watch();

xf.sub('ui:workoutStart', e => { watch.startWorkout();   });
xf.sub('ui:watchStart',   e => { watch.start();          });
xf.sub('workout:restore', e => { watch.restoreWorkout(); });
xf.sub('ui:watchPause',   e => { watch.pause();          });
xf.sub('ui:watchResume',  e => { watch.resume();         });
xf.sub('ui:watchLap',     e => { watch.lap();            });
xf.sub('ui:watchStop',    e => {
    const stop = confirm('Confirm Stop?');
    if(stop) {
        watch.stop();
    }
});

export { watch };
