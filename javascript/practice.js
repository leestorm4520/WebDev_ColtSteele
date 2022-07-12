function returnDay(num){
    var list={1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"};
    if(1<=num && num<=7) return list[num];
    else return null;
}
console.log(returnDay(55))