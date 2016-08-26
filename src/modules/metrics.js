'use strict';

const pmx = require('pmx').init({
  network: true,
  ports: true
});

let probe = pmx.probe();

let metric = probe.metric({
  name: 'Realtime user',
  value() {
    return Object.keys(users).length;
  },
});

console.log(metric.value);

/*let metric = Probe.metric({
  name: 'CPU usage',
  value() {
    return cpuUsage;
  },

  alert: {
    mode: 'threshold',
    value: 95,
    msg: 'Detected over 95% CPU usage', // optional
    func: function() { // optional
      console.error('Detected over 95% CPU usage');
    },

    cmp: '<' // optional
  },
});*/
