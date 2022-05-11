let cvn;

function preload() {
  myFont = loadFont('font1.otf');
}

function setup() {
  cvn = createCanvas(600, 400);
  cvn.parent('canvas');
}

function draw() {
  background('#D4A373');
  fill('#FEFAE0');
  textAlign(CENTER);
  textFont(myFont);
  textSize(36);
  text('ART 101 LAST PROJECT', 300, 200);
}
