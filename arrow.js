class Arrow extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory =[];
    }
  
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
  