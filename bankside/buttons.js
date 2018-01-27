var startR = 70;
var startB = 70;
var startG = 70;
var loopR = 70;
var loopB = 70;
var loopG = 70;
var stopR = 70;
var stopB = 70;
var stopG = 70;
var loopCounter = 0;
var loopPressed = false;
var startPressed = false;

function startReset(){
 startR = 70
 startB = 70
 startG = 70
}

function loopReset(){
 loopR = 70
 loopB = 70
 loopG = 70
 loopPressed = false;
}

function stopReset(){
 stopR = 70
 stopB = 70
 stopG = 70
 loopCounter = 0;
 loopReset();
}

function stopButton() {
  fill(stopR,stopG,stopB);
  noStroke();
  rect(812,78,20,20);
}

function loopButton() {
  push();
  translate(760, 81);
  fill(loopR,loopG,loopB);
  noStroke();
  beginShape();
  vertex(16.9, 9.7);
  bezierVertex(16.5, 10.2, 16, 10.6, 15.6, 11);
  bezierVertex(14.7, 11.9, 13.7, 12.8, 12.6, 13.5);
  bezierVertex(11.5, 14.2, 10.4, 14.8, 9.1, 15);
  bezierVertex(7, 15.4, 5, 15.2, 3.2, 14);
  bezierVertex(1.7, 13, 0.7, 11.6, 0.3, 9.9);
  bezierVertex(-0.1, 9, -0.1, 7.9, 0.1, 6.9);
  bezierVertex(0.5, 4, 2, 1.9, 4.6, 0.7);
  bezierVertex(5.7, 0.2, 7, 0, 8.2, 0);
  bezierVertex(9.5, 0.1, 10.6, 0.5, 11.7, 1.1);
  bezierVertex(12.9, 1.8, 14, 2.7, 15, 3.7);
  bezierVertex(15.6, 4.3, 16.2, 4.9, 16.8, 5.5);
  bezierVertex(16.9, 5.4, 17, 5.3, 17.1, 5.2);
  bezierVertex(18.1, 4.3, 19, 3.4, 20, 2.7);
  bezierVertex(21.1, 1.8, 22.3, 1, 23.7, 0.5);
  bezierVertex(25.6, -0.1, 27.5, -0.2, 29.4, 0.5);
  bezierVertex(31.7, 1.4, 33, 3, 33.7, 5.4);
  bezierVertex(34, 6.4, 34.1, 7.4, 33.9, 8.4);
  bezierVertex(33.7, 10.2, 32.9, 11.8, 31.6, 13.1);
  bezierVertex(30.4, 14.3, 28.9, 14.9, 27.3, 15.2);
  bezierVertex(25.4, 15.5, 23.7, 15.1, 22.1, 14.1);
  bezierVertex(21, 13.5, 20.1, 12.7, 19.2, 11.9);
  bezierVertex(18.5, 11.3, 17.9, 10.6, 17.2, 10);
  bezierVertex(17, 9.9, 17, 9.8, 16.9, 9.7);
  endShape();
  fill(116,116,116)
  beginShape();
  vertex(19, 7.6);
  bezierVertex(19.2, 7.8, 19.4, 8.1, 19.6, 8.3);
  bezierVertex(20.4, 9.1, 21.2, 9.9, 22.1, 10.6);
  bezierVertex(22.8, 11.2, 23.6, 11.7, 24.4, 11.9);
  bezierVertex(25.7, 12.3, 27, 12.3, 28.2, 11.7);
  bezierVertex(29.8, 10.8, 30.9, 9, 30.5, 6.9);
  bezierVertex(30.1, 4.4, 27.9, 2.9, 25.4, 3.3);
  bezierVertex(24.5, 3.5, 23.6, 3.8, 22.8, 4.3);
  bezierVertex(21.9, 4.9, 21.2, 5.5, 20.4, 6.2);
  bezierVertex(20, 6.6, 19.5, 7.1, 19, 7.6);
  endShape();
  beginShape();
  vertex(14.9, 7.6);
  bezierVertex(14.2, 7, 13.6, 6.3, 12.9, 5.7);
  bezierVertex(12.2, 5, 11.5, 4.4, 10.7, 3.9);
  bezierVertex(9.6, 3.4, 8.6, 3, 7.4, 3.1);
  bezierVertex(5.9, 3.3, 4.8, 4, 4, 5.2);
  bezierVertex(3.3, 6.2, 3.1, 7.4, 3.3, 8.6);
  bezierVertex(3.5, 9.6, 3.9, 10.5, 4.8, 11.2);
  bezierVertex(5.9, 12.1, 7.2, 12.4, 8.6, 12.1);
  bezierVertex(9.5, 11.9, 10.4, 11.5, 11.2, 11);
  bezierVertex(12.6, 10, 13.7, 8.8, 14.9, 7.6);
  endShape();
  pop();
}


function startButton() {
  push();
  fill(startR,startG,startB);
  noStroke();
  translate(720,78);
  beginShape();
  vertex(4.9, 10.3);
  vertex(22.8, 20.7);
  vertex(22.8, 0);
  vertex(0);
  endShape(CLOSE);
  rect(0, 0, 2.8, 20.7);
  pop();
}

function mouseClicked() {
  // Check if mouse is inside the circle
  var d1 = dist(mouseX, mouseY, 731, 88);
  var d2 = dist(mouseX, mouseY, 777, 88);
  var d3 = dist(mouseX, mouseY, 822.6, 88);
  if (d1 < 15) {
    startR = 18
    startG = 242
    startB = 24
    slider.value(0)
    l = 0;
    setTimeout(startReset, 250)
  }
  if (d2 < 15) {
    loopR = 18
    loopG = 242
    loopB = 24
    loopPressed = true
    loopCounter += 1
  }
  if (d3 < 15) {
    stopR = 18;
    stopG = 242;
    stopB = 24;
    setTimeout(stopReset, 250);
    loopReset();
  }
}

function loopStop() {
  if (loopCounter > 1){
    loopCounter = 0
    loopReset();
  }
}

function loopDraw() {
  loopStop();
  loopMode();
}

function buttonDraw() {
  stopButton();
  loopButton();
  startButton();
}