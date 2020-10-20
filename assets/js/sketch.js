const balls = [];
const total = 20;
let paddle;

function setup() {
  const div = document.getElementById('sketchDiv');
  let myCanvas = createCanvas(1000, 600);
  myCanvas.parent(div);
  paddle = new Paddle();

  for (let i = 0; i < total; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(0);
  paddle.render();
  paddle.update();

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].render();
  }
 
}
