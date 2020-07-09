class Ball{
  constructor(x, y, radius) {
      var options = {
        'restitution':1.3,
        'density':0.4
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("pink")
      strokeWeight(4);
      stroke("black")
      push();
      ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius);
      pop();
    }
  }