

const User = function(email, password){
    this.email = email;
    this.password = password;

    this.changedPas = function(){
        return password + '!@#';
    }
};

const user1 = new User('a@a.com', 123);
console.log(user1.changedPas());