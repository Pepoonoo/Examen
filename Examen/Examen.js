let circleColor;
let pxe = 200;
let pye = 200;
let xspeed = 6;
let yspeed = -6;

let circleColortwo;
let pxetwo = 100;
let pyetwo = 100;
let xspeedtwo = 3;
let yspeedtwo = -3;

function setup() {
createCanvas(600, 600)
circleColor = color(255, 0, 0);
circleColortwo = color(0, 0, 255);

}


function draw() {
  background (150);
  fill(circleColor);
  ellipse(pxe, pye, 40, 40);
  fill(circleColortwo);
  ellipse(pxetwo, pyetwo, 40, 40);
  
  if (pxe > 580 || pxe < 20) {
    xspeed = xspeed * -1;
  }

  if (pye >= height - 20 || pye <= 20) {
    yspeed *= -1;
    if (pye <= 20) { 
      circleColor = color(255, random(100, 200), random(100, 200));
    }
  }
  
  pxe = pxe + xspeed;
  pye = pye + yspeed;
  
  
  if (pxetwo > 580 || pxetwo < 20) {
    xspeedtwo = xspeedtwo * -1;
  }

  if (pyetwo > height - 20) {
  yspeedtwo = yspeedtwo * -1;
  circleColortwo = color(random(100, 200), random(100, 200), 255);
} else if (pyetwo < 20) {
  yspeedtwo = yspeedtwo * -1;
}
  
  pxetwo = pxetwo + xspeedtwo;
  pyetwo = pyetwo + yspeedtwo;
}
