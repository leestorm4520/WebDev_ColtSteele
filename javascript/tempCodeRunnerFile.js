const cat={
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log("MEOW MEOW MEOW");
        console.log(`${this.name} +${this.color}`);
    }
}
cat.meow()