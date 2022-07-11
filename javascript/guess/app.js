let maximum= parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maximum= parseInt(prompt("Enter the maximum number"));
}

const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess=parseInt(prompt("Enter your first guess"));
while(guess !==targetNum){
    if(guess>targetNum) guess=prompt("Too high!");
    else prompt("Too low");
    let guess=parseInt(prompt("Enter your first guess"));

}

