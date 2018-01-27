// © George Edmonds 2018

var beginHour = 13;
var beginMin = 3;
var endHour = 13;
var endMin = 56;
var beginTense = 'PM';
var endTense = 'PM';
var months = 'JAN';
var days = 18;
var date = months + ' ' + days;
var midday;

var beginTime = "13:03";
var endTime = "13:56";

var mindiff;
var hourCount = 0;

var beginTotal = beginHour * 60 + beginMin;
var endTotal = endHour * 60 + endMin;

function liveTime() {
  var tdiff = endTotal - beginTotal; 
  mindiff = ceil(map(sval,0,total,0,tdiff)) + beginMin;
  
  var hours = hourCount * 60;
  var liveMin = mindiff - hours;
  var liveHour = beginHour + hourCount;
  
  if (mindiff > 0 && mindiff < 59) {
    hourCount = 0;
  }
  
  if (mindiff > 59 && mindiff < 119) {
    hourCount = 1;
  }
  
  if (mindiff > 119 && mindiff < 239) {
    hourCount = 2;
  }
  
  if (liveMin === -1) {
    liveMin = 59;
    liveHour -=1;
  }
  
  var currentMin;
  var currentHour;
  var minZero = false;
  var hourZero = false;
  
  if (liveMin < 10) {
    minZero = true
  } else if (liveMin > 10) {
    minZero = false
  }
  
  if (minZero === true) {
    currentMin = '0' + liveMin;
  } else {
    currentMin = liveMin;
  }
  
  if (liveHour < 10) {
    hourZero = true
  } else if (liveMin > 10) {
    hourZero = false
  }
  
  if (hourZero === true) {
    currentHour = '0' + liveHour;
  } else {
    currentHour = liveHour;
  }
  
  var current = currentHour + ':' + currentMin;
  
  if (liveHour >= 12) {
    midday = 'PM'
  } else {
    midday = 'AM'
  }
  
  
  textFont(DINBold);
  textSize(32);
  fill(70,70,70);
  text(date, 73, 822);
  textFont(DINBold);
  textSize(15);
  text('th', 178, 810);
  textFont(DIN);
  textSize(32);
  text(current, 210, 822);
  textFont(DINBold);
  textSize(32);
  text(midday, 295, 822);
}


function rightBubble() {
  push();
  translate(759,721);
  fill(70,70,70);
  noStroke();
  beginShape();
  vertex(73.7, 0);
  vertex(73.7, 28.9);
  vertex(65.1, 23.9);
  vertex(57.1, 19.3);
  vertex(0, 19.3);
  vertex(0, 0);
  vertex(0);
  endShape(CLOSE);
  pop();
  
  textFont(DIN);
  textSize(17.15);
  fill(255);
  text(endTime, 761, 736.55);
  textFont(DINBold);
  text(endTense, 805, 736.55);
}

function leftBubble() {

 push();
 translate(75,721);
 fill(70,70,70);
 noStroke();
 beginShape();
 vertex(0, 0);
 vertex(0, 28.9);
 vertex(8.6, 23.9);
 vertex(16.6, 19.3);
 vertex(73.7, 19.3);
 vertex(73.7, 0);
 vertex(0);
 endShape(CLOSE);
 pop();
 
 textFont(DIN);
 textSize(17.15);
 fill(255);
 text(beginTime, 77, 736.55);
 textFont(DINBold);
 text(beginTense, 121, 736.55);
}

function timeDraw() {
  rightBubble();
  leftBubble();
  liveTime();
}