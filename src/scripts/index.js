import TestModule from './testModule';

class App {
    constructor() {
        // const config = require('./config');
        // if (!config.webglEnabled) { do smth }
        this.test = new TestModule('123 message');
        this.test.foo();
    }
}

window.app = new App();
