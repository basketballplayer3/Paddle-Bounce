var ball,img,paddle;
var ballimg, paddleimg;
var edges;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg = loadImage("ball.png")
  paddleimg = loadImage("paddle.png")
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  paddle = createSprite(380, 200, 10, 80)
  paddle.addImage(paddleimg)
  
  ball = createSprite(50, 200, 10, 10)
  ball.addImage(ballimg)
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9

}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
  edges = createEdgeSprites()
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])  
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle,randomVelocity)
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y = paddle.y+20
    
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = random(-8,8)
}

