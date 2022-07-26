const form=document.querySelector('#searchForm');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm=form.elements.query.value;
    console.log(1);
    const config={params:{q:searchTerm}};
    const res= await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(2);
    displayShow(res.data);
    console.log(3);
    form.elements.query.value='';
   
})
const displayShow=(shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img=document.createElement('IMG');
            img.src=result.show.image.medimum;
            document.body.append(img);
        }
        
    }
}