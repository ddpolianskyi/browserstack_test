// test

const path = require('path')

exports.config = {
  user: ${{ secrets.BROWSERSTACK_USERNAME }},
  key: ${{ secrets.BROWSERSTACK_ACCESS_KEY }},
  services: ['browserstack'],
  
    updateJob: false,
    specs: [
      './test/specs/*.js'
    ],
    exclude: [],
  
    capabilities: [{
        project: "First Webdriverio Android Project",
        build: 'Webdriverio Android',
        name: 'first_test',
        device: 'Google Pixel 7',
        os_version: "13.0",
        app: process.env.BROWSERSTACK_APP_ID || 'bs://7b34669dfa56a6ae08de097aff79ebbbbbaa72e3', 'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
};
