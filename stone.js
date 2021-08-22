class stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
        this.x=x;
	    this.y=y;
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        strokeWeight(3);
        stroke('grey')
        fill('black')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}