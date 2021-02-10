class Mazeparts {
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
    var parts = this.body.position;
    rectMode (CENTER);
    fill(50,205,50);
    rect(parts.x, parts.y,this.width,this.height);
    }
    
    }