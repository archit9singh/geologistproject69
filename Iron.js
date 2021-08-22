class irony {
    constructor(x, y) {
      var options = {
        'density':120,
        'friction': 3,
        'restitution':0.8
      };
        this.x=x;
	    this.y=y;
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        strokeWeight(3);
        stroke('red')
        fill('gray')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}