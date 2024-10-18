
class Task {
    constructor(title, dueData){
        this.title = title;
        this.dueData = dueData;
    }

    get isOverdue(){
        return this.dueData < new Date();
    }

    set isOverdue(task){
        if(task){
            this.title = this.title + ' overdued'
        }
    }
}

const taskoverdued = new Task('Title1', new Date('10/10/2024'));
console.log(taskoverdued, taskoverdued.isOverdue)
taskoverdued.isOverdue = true;
console.log(taskoverdued, taskoverdued.isOverdue)
