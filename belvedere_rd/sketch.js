// © George Edmonds 2018

var slider;
var speedslider;
var sval;
var total = 929;

var img;
var imgcounter;

var faceSequence; //Animation

var facenum = total - 1;

var minSpeed = 0.01;
var maxSpeed = 1.2;

var DIN;
var DINBold;
var Mono;

var ids;
var idtext;

function preload() {
  DIN = loadFont('assets/fonts/DIN.ttf');
  Mono = loadFont('assets/fonts/Mono.ttf');
  DINBold = loadFont('assets/fonts/DINBold.otf');
  img = loadImage("assets/images/compass.png");
  imgcounter = loadImage("assets/images/counter.png"); 
  ids = loadJSON("assets/faces.json");
  faceSequence = loadAnimation("assets/images/faces/face_000.png", "assets/images/faces/face_" + facenum + ".png");
  faceSequence.playing = false;
}

function setup() {
  createCanvas(900, 900);
  slider = createSlider(0, facenum, 0).addClass('tslider');
  slider.position(75, 757); 
  speedslider = createSlider(minSpeed, maxSpeed, 0, 0.01).addClass('sslider');
  speedslider.position(653, 810.193); 
}


var val = 0;
var scroll = 0;

function mouseWheel(event) {
  //print(event.delta);
  //move the square according to the vertical scroll amount
  scroll += event.delta;
  var e = event.delta;
  if (e > -0.84 && e < 0.84) {
    slider.value()
  }
  else {
    slider.value(val+scroll)
  }
  return false;
}

var l;

function loopMode() {
  if (loopPressed === true) {
   slider.value(l)
  }
  if (sval === facenum) {
  l = 0
  }
}

function draw() {
 
  loopspeed = speedslider.value()
  l = l + loopspeed
  sval = slider.value()

  if (loopPressed === false) {
    l = sval
  }
  
  background(116,116,116);
  animation(faceSequence, 450.667, 499.167);
  faceSequence.changeFrame(sval);
  idtext = ids[sval];

  timeDraw();
  buttonDraw();
  loopDraw();
  drawInfo();
}