class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      if (this.body.speed < 3) {
        translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      strokeWeight(5);
      stroke("darkblue");
      rect(0, 0, this.width, this.height);
      }
      else {
        this.visibility = this.visbility-5;
        World.remove(world,this.body);
      }
      pop();
    }
    score() {
      if(this.visibility < 0 && this.visibility > -1005) {
       Score = Score + 5;
      }
    }
  };