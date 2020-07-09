class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("black")
        strokeWeight(3);
        push();
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        //rect(this.image, 0, 0, this.width, this.height);
        rotate(angle); 
        pop();
      }
}