

//spread - expand someting into individual pieces

//copying and combining arrays - ... is on the sending side

const a = [1,2];
const b = [3,4];

const combined = [...a, ...b]; // = will become [1,2,3,4]
const withExtra = [0, ...b, 99]; // [0,3,4,99]
const copy = [...a]; // new const same content

// copying and overriding arrays

const user = {id :1, name : 'Tom', role : 'admin'};
const guest = {...user, role: 'guest'} // {id:1 , name: 'Tome', role:'guest'}

// shallow copy

const p ={name:'Zuhair', address:{city:'Sydney'}};
const q = {...p};
q.address.city = 'Perth';
console.log(p.address.city);


//rest - collect into one

// rest parameter gather any number of argument into array (like C# params)

function sum(...nums: number[]):number{
    return nums.reduce((total, n)=> total+n,0);
}
// add any argument from nums into number[]
//nums.reduce - same as C# aggregate

/*
const nums = [1, 2, 3, 4];

const sum = nums.reduce((total, n) => total + n, 0);
//                       ^^^^^  ^  ^^^^^^^^^^^   ^
//                       |      |  |             starting value
//                       |      |  what to return for the next round
//                       |      current item
//                       accumulator (running result)
*/
console.log(sum(4,7,8));

//playwright usage

//spread: build config but override one setting only

const defaultOption = {input:'Name', age:'50', timeout : 4000}
const options = {...defaultOption, timeout:6000};


// spread : merge header in api call

/*
await request.post('/orders/', {
    headers: {...baseHeaders, Auth : 'NewAuth'},
});
*/

//rest : helper that accept multiselector
/*
function clickAll (page: Page, ...selectors: string[]){

}
*/

// equal

//always use === and !===, == silently convert types, ('5' == 5) is true