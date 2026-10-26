//functions

function add (a: number, b: number):number{

    return a+b;
}

//console.log(add(40,5));

//arrow function
const multiply = (a:number,b:number) : number => a*b;

//console.log(multiply(5,3));

//default values
function greetingWord (name:string, greeting='Welcome') : string{
    return `${name}` + ` ${greeting}`
    
}
console.log(greetingWord('Zuhair'));
console.log(greetingWord('Zuhair','Goodbye'));

//optional parameter
function log(name:string, level?:string):void{
    console.log(level?? 'INFO', name);
}

log('Zuhair');