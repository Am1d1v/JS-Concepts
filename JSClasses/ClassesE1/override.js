

class Book {
    constructor(author, title){
        this.author = author;
        this.title = title;
    }

    info(){
        console.log(`${this.title}-${this.author}`);
    }
}
const book1 = new Book('Author1', 'Title1');
//book1.info();

class EBook extends Book {
    constructor(author, title, pages){
        super(author, title);
        this.pages = pages;
    }

    info(){
        console.log(`${this.title}-${this.author} Total Pages: ${this.pages}`)
    }

}
const ebook1 = new EBook('EAuthor1', 'ETitle1', 1000);
ebook1.info();
