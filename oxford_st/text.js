// © George Edmonds 2018

var st = 'OXFORD ST';
var co = '51.5149698, -0.1447574';
var compassR = 102;

function drawText() {
  fill(70,70,70);
  textSize(32.1);
  textFont(DIN);
  text(st, 75, 100.7);
  
  textFont(DINBold);
  text('LONDON, UK', 75, 128.7);
  
  textFont(DIN);
  text(co, 75, 172);
  
  textSize(12);
  textFont(DINBold);
  text('SPEED', 795, 805);
}

function drawCompass() {
  push();
  angleMode(DEGREES);
  translate(386.5,105);
  imageMode(CENTER);
  rotate(compassR);
  image(img, 0, 0);
  pop();
  drawCounter();
}

function drawCounter() {
  image(imgcounter, 75, 195, 40, 40);
  fill(19,242,24);
  textSize(20);
  textFont(DINBold);
  text(sval + 1, 123, 210);
}

function drawMarker() {     //draws ID number marker above face.
  push();
  translate(366.6,230.5);
  fill(70,70,70);
  noStroke();
  beginShape();
  vertex(168.1, 0);
  vertex(168.1, 36.7);
  vertex(96.6, 36.7);
  vertex(94.4, 40.5);
  vertex(83.5, 59.4);
  vertex(72.6, 40.5);
  vertex(70.4, 36.7);
  vertex(0, 36.7);
  vertex(0, 0);
  vertex(NaN);
  endShape(CLOSE);
  pop();

  push();                   //draws id text on marker.
  fill(255);
  textSize(26)
  textFont(Mono)
  text(idtext, 377, 258);
  pop();
  
  push();                   //draws targer over face.
  translate(268, 315);
  fill(18, 242, 24);
  noStroke();
  beginShape();
  vertex(105.5, 0);
  vertex(105.5, 13.6);
  vertex(13.6, 13.6);
  vertex(13.6, 105.5);
  vertex(0, 105.5);
  vertex(0, 0);
  vertex(NaN);
  endShape(CLOSE);
  beginShape();
  vertex(363.8, 105.5);
  vertex(350.2, 105.5);
  vertex(350.2, 13.6);
  vertex(258.3, 13.6);
  vertex(258.3, 0);
  vertex(363.8, 0);
  vertex(NaN);
  endShape(CLOSE);
  beginShape();
  vertex(258.3, 363.8);
  vertex(258.3, 350.2);
  vertex(350.2, 350.2);
  vertex(350.2, 258.3);
  vertex(363.8, 258.3);
  vertex(363.8, 363.8);
  vertex(NaN);
  endShape(CLOSE);
  beginShape();
  vertex(0, 258.3);
  vertex(13.6, 258.3);
  vertex(13.6, 350.2);
  vertex(105.5, 350.2);
  vertex(105.5, 363.8);
  vertex(0, 363.8);
  vertex(NaN);
  endShape(CLOSE);
  beginShape();
  vertex(186.1, 182.4);
  vertex(203.8, 200);
  vertex(199.5, 204.2);
  vertex(181.9, 186.6);
  vertex(164.3, 204.2);
  vertex(160, 200);
  vertex(177.6, 182.4);
  vertex(160, 164.7);
  vertex(164.3, 160.5);
  vertex(181.9, 178.1);
  vertex(199.5, 160.5);
  vertex(203.8, 164.7);
  vertex(NaN);
  endShape(CLOSE);
  pop();
  }
  
function drawInfo() {
  drawText();
  drawCompass();
  drawCounter();
  drawMarker();
}