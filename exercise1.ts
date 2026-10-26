// write isEven(n:number):boolean and test with 4 values

function isEven(n:number):boolean{
    return n%2===0;
}

console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(43));
console.log(isEven(41232));

// write buildUrl (baes:string, path: string, query?: Record<string,string>):string example

function buildURL(
    base:string, 
    path:string, 
    query?: Record<string,string>):string{
    
        const parts = Object.entries(query ?? {})
            .map (([key, value]) => `${key}=${value}`);
    const queryString = parts.length>0 ? `?${parts.join('&')}` : '';
    return `${base}${path}${queryString}`;
}

const home = 'https.x.com';
const path = '/search';
const query  = {q:'pw'};
console.log(buildURL(home,path,query));

/* explanation

#the signature
- base and path are required string
- query? is optional
- record<string,string> means an object whose keys and values are both string {q : 'pw'}
- : string -> expect to return string

#Handle missing query first
- query ?? {}
- ?? mean use left side, unless null or undefined, then use right side
 -- so if query is {q:'pw', page:'1'}, this gives the object
 -- if query is missing, this give empty object

 #turn object into pairs

 - Object.entries(query ?? {})
  -- convert object into array [key,value] pairs
  -- from {q:'pw', page:'1'} to [['q','pw'], ['page','1']]
  -- for mssing query it will become empty array

# turn each pair into text
- .map runs a function on every item and build new array from result
 -- each item is a pari ['q','pw']
 -- ([key],[value]) is destructuring, unpacks the pair into two variables, 
 so key is 'q' and value is 'pw'

 result = ['q=pw', 'page=1']

 #build the query string

 const queryString = parts.length > 0 ? `?${parts.join('&')}` : '';
 -- if more then 0 joins, if empty (0 length -> null)

 # put it all together

 return `${base}${path}${query}`;

 */

 //exercise 3 - average(...nums:number[]), return 0 for no input

 function average(...nums:number[]):number{

    if (nums.length === 0)
     {return 0;}
    const sum = nums.reduce((total,n)=> total + n,0);
    return sum / nums.length;
 }

 console.log(average(14,8));
 console.log(average(13,7,5));
 console.log(average());