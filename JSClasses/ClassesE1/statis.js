

class Test {
    a = 10;
    static consoleLogger(){
        console.log('Test Log');
    }
    
    // consoleLogger(){
    //     console.log('Test Log');
    // }
    static {
        this.a = 9;
    }
}

// const test = new Test();
// test.consoleLogger();
//Test.consoleLogger();
console.log(Test)

const Test2 = function(){};
Test2.logger = function(){
    console.log('Test Log 2')
}
Test2.status = 'PASSED';
Test2.logger();
//console.log(Test2);