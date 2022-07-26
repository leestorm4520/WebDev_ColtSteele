// axios.get("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("response: ", res);
// })
// .catch((e)=>{
//     console.log("error: ",e)
// })

const getStarWarsPerson=async(id)=>{
    const res=await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
}

getStarWarsPerson(5);