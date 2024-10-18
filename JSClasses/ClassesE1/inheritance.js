

class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    buy = () => {
        return 'bought';
    };
};

class AudioBook extends Book {
    constructor(title, author, durationMinutes){
        super(title, author);
        this.durationMinutes = durationMinutes;
    }
};

const audio1 = new AudioBook('AudioTitle1', 'AudioAuthor1', 600);
console.log(audio1);
console.log(audio1.buy());