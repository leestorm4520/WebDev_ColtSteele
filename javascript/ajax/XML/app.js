// https://swapi.dev/api/people/1
const req=new XMLHttpRequest();

req.onload=function(){
    console.log("Loaded!");
    const data=JSON.parse(this.responseText);
    console.log(data);
}
req.onerror=function(){
    console.log("Error!");
    console.log(this);
};

req.open("GET","https://swapi.dev/api/people/1");
req.send();