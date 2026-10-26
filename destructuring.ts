
//object
const  user={id:1, name:'tom', role:'admin'};
console.log(user.name);
const {name, role} = user;
console.log(name +` and `+ role);

//array
const [arrayone, arraytwo] =['1','2','3'];
console.log(arrayone);

//nested
const person = {employee:'Zuhair', address:{city:'Kuala Lumpur'}};
const {address:{city},employee}= person;
console.log(city + ` and ` + employee);

//function parameter

function process({name,role}:{name:string, role:string}):string{
    return `name : ${name} and role: ${role}`;
}
console.log(process(user));
