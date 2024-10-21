

class Weapon{
    // strike(){

    // }

    // shoot(){

    // }

    cost;
    upgrade;

    dealDamage(){

    }
}

class Rifle extends Weapon{
    // strike(){

    // }

    shoot(){
        this.dealDamage();
    }
}

class Sword extends Weapon{
    strike(){
        this.dealDamage();
    }

    // shoot(){

    // }
}