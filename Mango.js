class Mango {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.r = 50;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("mango.png");

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

       push();
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, 50, 50);
        pop();

    }
}