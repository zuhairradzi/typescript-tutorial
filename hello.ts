const name: string = 'Legion';
console.log(`Hello ${name}`);


//variables
//const -> cannot be reassigned (close to readonly)
const browser = 'Chromium';
console.log(`Browser: ${browser}`);

//let -> can be reassigned
let owner : string  = 'Joe';
console.log(`Owner: ${owner}`);

owner = 'James';
console.log(`Owner: ${owner}`);

//string
let title : string = 'Header';
//number
let count : number = 609;
//boolean
let isVisible : boolean = true;
//array
let age : number[] = [12,89,90];
//pair
let id : [string,number]=['Joe',94421];
// any type
let anything : any = 5;

console.log(`All ${title}, ${count}, ${isVisible}, ${age}, ${id}`);