class Bin{
    constructor(x,y,w,h){
    
    var options={
        isStatic:true
    }
    
    this.body = Bodies.rectangle(x,y,w,h,options);
    
    this.w = w;
    this.h = h;
    
    //this.bini = loadImage("dustbingreen.png");

    World.add(world, this.body);
    }
    display(){
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
    
    }