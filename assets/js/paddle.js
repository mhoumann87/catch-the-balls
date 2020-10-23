function Paddle() {
  this.paddleWidth = 50;
  this.paddleHeight = 15;
  this.speed = 5;
  this.x = width/2 - this.paddleWidth/2;
  this.y = height - this.paddleHeight - 10;

  this.moveLeft = () => {
    // console.log('Move paddle left');
    this.x -= this.speed;
  }

  this.moveRight = () => {
    //  console.log('Move paddel right');
    this.x += this.speed;
    if (this.x + this.paddleWidth > width) {
      this.x = width - this.paddleWidth;
    }
  }
  
  this.update = () => {
  }

  this.render = () => {
    rect(this.x, this.y, this.paddleWidth, this.paddleHeight)
  }
}