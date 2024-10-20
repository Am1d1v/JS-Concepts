

class Character{
    #inventory = [];
    #health = 10;

    pickItem(item){
        this.#inventory.push(item);
    };

    receiveDamage(damage){
        this.#health -= damage;
    }


}

class DB{
    saveCharacter(item){
        localStorage.setItem('item', this);
    }

    loadCharacter(item){
        
    }
}