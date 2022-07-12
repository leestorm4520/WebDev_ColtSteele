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

try{
    hello.toUpperCase();
}
catch{
    console.log("ERROR");
}