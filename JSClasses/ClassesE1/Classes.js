

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    isRead = false;

    read(){
        this.isRead = true;
    }
}

const someBook1 = new Book('Title1', 'Author1');
console.log(someBook1);
someBook1.read();
console.log(someBook1);

console.log(someBook1 instanceof Book);
console.log(someBook1.__proto__);
