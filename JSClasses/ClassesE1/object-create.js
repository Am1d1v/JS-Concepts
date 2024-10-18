

const User = {

    init(email, password){
        this.email = email;
        this.password = password;
    },
    log: () => {
        console.log('Log');
    }
};
//User.log();

const newuser = Object.create(User);
newuser.log();
newuser.init('newuseremail@mail.com', 'userpassword');

console.log(newuser)
console.log(newuser.__proto__ == User);

const admin = Object.create(newuser);
console.log(admin.__proto__ == newuser);