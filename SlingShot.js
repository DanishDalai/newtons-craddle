class SlingShot{
    constructor(bodyA, bodyB,offsetX, offsetY){
    
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
  
        }
  
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            
            push();  
            strokeWeight(4);
            stroke("black")
            var posA = this.sling.bodyA.position;
            var posB = this.sling.bodyB.position; 
            line(posA.x,posA.y, posB.x + this.offsetX, posB.y + this.offsetY)                         
            pop();
        }
    }
    
}