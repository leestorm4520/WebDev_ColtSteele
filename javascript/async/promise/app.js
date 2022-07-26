const fakeRequest=(url)=>{
    new Promise((resolve,reject)=>{
        const rand=Math.random();
        setTimeout(()=>{
            if(rand<0.7) resolve("Your fake data here");
            else reject('Request error!');
        }, 1000)
    })
}

fakeRequest('/dog/1')
    .then((data)=>{
        console.log("Done with request")
    })
    .catch((data)=>{
        console.log("Oh no! Error")
    })