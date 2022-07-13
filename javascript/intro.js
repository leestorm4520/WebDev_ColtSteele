//array
let students=[];
let color=['red','orange','yellow'];
let stuff=[true,68,'cat',null];
var store=new Array(6);
console.log(store.length)

//array methods
/*
push: add to end
pop: remove from end
shift: remove from start
unshift: add to start
concat: merge arrays
includes: look for a value
join: creates a string from an array
reverse: reverse an array
slice: copies a portion on an array
splice: removes/replaces elements
sort: sorts an array
*/
color.splice(1,0,'blue','forestgreen')
console.log(color)
const person={firstName:'John', lastName:'Jagger'}
for(let i=0;i<10;i++) console.log(i);

/*
object
students=Object.entries(TestScores) 
scores=Object.values(TestScores);
for(let score of scores) total+=score;
console.log(totalscore.length);


for(let student in TestScore) console.log(`${student} scored ${testScores[student]}`);

*/

/*
Method vs Function

-Every method is a function
-not every function is a method

method is function as properties on objects
*/


//this
const cat={
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log("MEOW MEOW MEOW");
        console.log(`${this.name} ${this.color}`);
    }
}
cat.meow()

//try and catch
try{
    hello.toUpperCase();
}
catch{
    console.log("ERROR");
}

//forEach
const nums=[1,2,4,5,3,5,3,5,3,5];
nums.forEach(function (el){console.log(el)});

//map
// const nums=[1,2,3,4,5,6,7,8];
const double= nums.map(function(num){
    return nums*2;
});

//arrow
const square=(x)=>{return x*x};
const sum=(x,y)=>{return x*y};

//keyword this refer to the window object - arrow is not used to define an object
const person1={first:'John', last:'Le', fullName: function(){ return `${this.first} ${this.last}`}}
const person1={first:'John', last:'Le', fullName: ()=>{ return `${this.first} ${this.last}`}} //undefined


//implicit arrow
const squareIm=(x)=>(x*x);

console.log(square(2));
console.log(sum(1,2));

//setTimeout
console.log("Hello")
setTimeout(()=>{
    console.log("...are you still there?")
}, 3000)

//setInterval
const id= setInterval(() => {
    console.log('Hello')
}, 2000);
clearInterval(id);

//filter
nums.filter(n=>{return n>4});

//some (or) and every (and) : return boolean value
const exam=[45,67,89,59];
console.log(exam.every(score=> score>=75))
console.log(exam.some(score=>score<50))

//reduce: take in an array and result in a single value
[3,5,6,8,5].reduce((accumulator, currentValue)=>{ return accumulator+currentValue});

//default params

//spread - function calls - array literals - objects
...

//rest params - same as spread for function parameters/arguments
...

//DOM
document.getElementById(id);
document.getElementsByTagName(tag);
document.getElementsByClassName(class);
document.querySelector("can be anything - the first thing of id/tag/class");
document.querySelectorAll("can be anything - all elements");