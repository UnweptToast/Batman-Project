class Raindrop {
    constructor(x, y, radius) {
        var options ={friction: 0.1, density: 1.0};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;

        World.add(world, this.body);
        Body.setVelocity(this.body, {x: 1.0, y: 1.0})
    }

    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(pos.x, pos.y, this.radius);

        if(pos.y > height) {
            Body.setPosition(this.body, {x: random(0, width), y: random(0, -300)})
            Body.setVelocity(this.body, {x: 1.0, y: 10.0})
        }
    }
}