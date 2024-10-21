

class DB{
    save(items){
        console.log(`Saved: ${items}`);
    }
}

class Mongo extends DB{
    save(items){
        console.log(`Saved to Mongo: ${items}`);
    }
}

class ToDoList{
    items = [1, 2, 3];
    //db = new DB;
    db;
    constructor(db){
        this.db = db;
    }

    saveToDB(){
        this.db.save(this.items);
    }
}

const list1 = new ToDoList(new DB());
const list2 = new ToDoList(new Mongo());
list1.saveToDB();
list2.saveToDB();