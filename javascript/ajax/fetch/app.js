// https://swapi.dev/api/people/1
fetch("https://swapi.dev/api/people/1")
.then(res=>{
    console.log('resolved',res);
    return res.json(); //return a promise
})
.then((data)=>{
    console.log(data);
    return fetch("https://swapi.dev/api/people/2");
})
.catch(e=>{
    console.log('error', e);
})