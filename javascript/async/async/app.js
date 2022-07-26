const sing =async()=>{
    throw 'failed';
    return "LA la la la";
}
sing()
    .then((data)=>{
        console.log("promise resolved");
})
    .catch((error)=>{
        console.log('promise failed');
    })