class TestModule {
    constructor(param) {
        this.aa = param;
    }
    foo() {
        console.log(this.aa);
    }
}

export default TestModule;
