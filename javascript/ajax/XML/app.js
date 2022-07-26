// https://swapi.dev/api/people/1
const req=new XMLHttpRequest();

req.onload=function(){
    console.log("Loaded!");
    console.log(this.responseText);
}
req.onerror=function(){
    console.log("Error!");
    console.log(this);
};

req.open("GET","https://swapi.dev/api/people/1");
req.send();