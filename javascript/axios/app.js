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
};

const joke=document.getElementById('joke');
const button=document.getElementsByTagName("button");


const getDadJoke=async()=>{
    const config={headers:{Accept:'application/json'}};
    const res=await axios.get("https://icanhazdadjoke.com/", config);
    // console.log(res.data.joke);
    const newLI=document.createElement("LI");
    newLI.append(res.data.joke);
    joke.append(newLI);
};
