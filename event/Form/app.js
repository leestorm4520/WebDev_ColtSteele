const form=document.querySelector("login");
const userId=document.getElementById("userId");
const password=document.getElementById("password");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("SUBMITTED THE FORM!");
    const newLI=document.createElement("LI");
    newLI.innerText=userId.textContent;
})