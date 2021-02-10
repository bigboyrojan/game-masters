class Ez {
    constructor (x,y,width,height){
    var choices = {
    isStatic : true
    } 
    this.body = Bodies.rectangle(x,y,width,height,choices);
    this.width = width;
    this.height = height;

    
  World.add(world, this.body);
    }
    display(){
    var part = this.body.position;
    rectMode (CENTER);
    fill(255,0,10);
    rect(part.x, part.y,this.width,this.height);
    
    }
    
    }