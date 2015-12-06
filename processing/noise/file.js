var xOff, yOff, zOff;
var step = 100;
var pg;

function setup() {
  createCanvas(300, 300);
  pg = createGraphics(width, height);
}

function draw() {
  background('#F5FFAE');
  xOff = 0;
  for (var x=0; x<width+step; x+=step) {
    yOff = 0;    
    xOff += 0.005;
    for (var y=0; y<width+step; y+=step) {
      var ns = noise(xOff, yOff, zOff);
      var sz = map(ns, 0, 1, step*.1, step*3);
      stroke('#79F8BB');
      fill('#155674');
      if (ns<0.5) {
        stroke('#79F8BB');
        fill('#60BEB3');
      }
      ellipse(x, y, sz, sz);
      yOff += 0.01;
    }
  }
  zOff += 0.005;
  //createMask();
  //blend(pg, 0, 0, width, height, 0, 0, width, height, MULTIPLY);
}

/*function createMask() {
  var sz = width * 0.3;
  pg.beginDraw();
  pg.noFill();
  pg.strokeWeight(1);
  pg.fill('#F5FFAE',5);
  pg.noStroke();
  pg.pushMatrix();
  pg.translate(width/2, height/2);
  pg.rotate(zOff*radians(90));
  pg.triangle(-sz, sz, 0, -sz, sz, sz); 
  pg.popMatrix();
  pg.endDraw();
}*/