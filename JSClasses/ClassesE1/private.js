

class Car {
    #vin;
    //color: 'Black';
    #status;

    constructor(){
        this.#status = 'Ready';
        this.isReady = true;
    }

    #changeVin(){
        console.log('Changed', this.#status, this.isReady);
    }

    announce(){
        this.#changeVin();
    }

    static #infoNumber = 1234567890;

}
const carExample1 = new Car();
carExample1.announce();

