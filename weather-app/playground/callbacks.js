var getUser = (callback) =>{
    let userMain = {
        id: 2,
        name: "Two"
    }
    
    setTimeout(()=> {
        callback();
    }, 3000);
}

let sonam = 4;

let user = {
    id: 1,
    name: 'Rinzin',
}
let email = "rinzin";

getUser((user, email)=>{
    console.log(user);
    console.log(email);
    console.log(sonam);
    
});