
function Ball() {
  this.x = random(20, width - 20);
  this.y = random(this.size, this.size * 3);
  this.size = 10;
  this.speed = random(4, 8);

  this.init = () => {
    this.y = random(this.size, -this.size * 10);;
    this.x = random(this.size * 2, width - (this.size * 2) )
  }

  this.render = () => {
    fill(255);
    noStroke()
    ellipse(this.x, this.y, this.size, this.size);
  };

  this.update = () => {
    this.y += this.speed;
    if (this.y > height + this.size) {
      this.init();
    }
  };

  this.init();
}
