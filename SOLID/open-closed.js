

class Treasure{
    value = 0;
};

class Coin extends Treasure {
    value = 1;
}

class Crystall extends Treasure {
    value = 10;
}

class Brilliant extends Treasure {
    value = 30;
}

class Invertory {
    #score;

    pick(treasure){
        this.#score += treasure.value;
    }
}