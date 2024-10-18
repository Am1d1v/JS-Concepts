

// class Book {
//     constructor(author, title){
//         this.author = author;
//         this.title = title;
//     }

//     info(){
//         console.log(`${this.title}-${this.author}`);
//     }
// }
// const book1 = new Book('Author1', 'Title1');
// //book1.info();

// class EBook extends Book {
//     constructor(author, title, pages){
//         super(author, title);
//         this.pages = pages;
//     }

//     info(){
//         console.log(`${this.title}-${this.author} Total Pages: ${this.pages}`)
//     }

// }
// const ebook1 = new EBook('EAuthor1', 'ETitle1', 1000);
// ebook1.info();


class Enemy{
    constructor(health){
        this.health = health;
    }

    getDamage(damage){
        this.health = this.health - damage;
        //console.log(this.health);
    }
}
const enemy = new Enemy(100);


class DodgingEnemy extends Enemy{
    constructor(health){
        super(health);
    }

    getDamage(damage){
        this.health = Math.random() < 0.5 ? (this.health - damage) : this.health;
        console.log(this.health)
    }
}
const dodgingEnemy = new DodgingEnemy(150);


class Weapon {
    constructor(damage){
        this.damage = damage;
    }

    hit(enemy){
        enemy.getDamage(this.damage);
    }
}
const weapon = new Weapon(15);
//weapon.hit(enemy);
weapon.hit(dodgingEnemy);