class Color{
    constructor(r,g,b,name){
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
    }
    rgb(){
        const{r,g,b}=this;
        return `rgb(${r},${g}, ${b})`;
    }
}

const c1=new Color(20,30,40,"tomato");
//hsl() - hue / saturation / lightness