import TestModule from './testModule';

class App {
    constructor() {
        this.test = new TestModule('123 message');
        this.test.foo();
    }
}

window.app = new App();
