    class Umbrella {
    constructor(x,y){
    var options = {
    isStatic: true,
    }

    this.manImg = loadImage("Walking Frame/walking_1.png");
    this.batmanImg = loadImage("bat/Bestman.png");
    this.umbrella = Bodies.circle(x,y,0,options);
    this.radius = 400;
    World.add(world, this.umbrella)

    }

    display(){
    var pos = this.umbrella.position;
    imageMode(CENTER);

    if(frameCount>=200){
    image(this.batmanImg,230,520,250,250);
    }
    else{
    image(this.manImg,pos.x,pos.y,this.radius,this.radius);
    }

    }
    }
