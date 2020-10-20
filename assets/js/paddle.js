function Paddle() {
  this.paddleWidth = 50;
  this.paddleHeight = 15;
  this.x = width/2 - this.paddleWidth/2;
  this.y = height - this.paddleHeight - 10;
  
  this.update = () => {
    console.log(mouseX);
  }

  this.render = () => {
    rect(this.x, this.y, this.paddleWidth, this.paddleHeight)
  }
}