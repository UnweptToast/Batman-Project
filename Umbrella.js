class Umbrella {
    constructor(x, y, radius) {
        var options ={isStatic: true};
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;
        // this.animation = loadImage("images/Walking Frame/walking_3.png")


        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        // imageMode(CENTER);
        // image(this.animation, pos.x, pos.y, this.radius*3 - 40, this.radius*3 - 40)
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius)
    }
    
}