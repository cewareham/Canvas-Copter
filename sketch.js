let game;
let dFont;
let bgOpening;
let heli, heliA, heliB, heliC, heliD, heliE;
let ltBlue = '#31c6f7', ltGreen = '#25b7b7';

let options = {
    copter : {
        height : 15,
        width : 30
    },
    canvas : {
        height : 300,
        width : 500,
        refreshRate : 20
    }
};

function preload() {
  heliA = loadImage("assets/heliAC.png");
  heliB = loadImage("assets/heliBC.png");
  heliC = loadImage("assets/heliCC.png");
  heliD = loadImage("assets/heliDC.png");
  heliE = loadImage("assets/heliEC.png");
  heliF = loadImage("assets/heliFC.png");
  bgOpening = loadImage("assets/opening_screen.png");
  dFont = loadFont("fonts/DS-DIGI.TTF");
  dFontB = loadFont("fonts/DS-DIGIB.TTF");
}

function setup() {
  let myCanvas = createCanvas(500, 300);
  // put canvas in container div -> see index.html
  myCanvas.parent("jscopter-container");
  game = new JSCopter("jscopter-container", options);
  heli = heliA;
}

function drawMsg(msg, fnt, clr, size, x, y) {
  fill(clr);
  //fill('#25b7b7');  // light green
  textFont(fnt, size);
  text(msg, x, y);
}

function pickImage() {
  heli = heliA;
  if (frameCount % 3 == 0) heli = heliB;
  else if (frameCount % 5 == 0) heli = heliC;
  else if (frameCount % 7 == 0) heli = heliD;
  else if (frameCount % 9 == 0) heli = heliE;
  else if (frameCount % 11== 0) heli = heliF;
}

function draw() {
  let sc = 0.50;
  background(0);
  fill("#66ff66");  // lighter green
  rect(0, 0, width, 26);
  rect(0, height-26, width, 26);
  textAlign(CENTER);
  let msg = "COPTER+ - how far can you go?"
  drawMsg(msg, dFontB, 'black', 15, width/2, 18);
  textAlign(RIGHT);
  msg = "CLICK TO START";
  drawMsg(msg, dFont, ltBlue, 25, width-100, 144);       // light blue
  msg = "CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP";
  drawMsg(msg, dFont, ltGreen, 16, width-100, 215);
  drawMsg("RELEASE TO GO DOWN", dFont, ltGreen, 16, width-100, 232);  // light green
  pickImage();
  push();
  scale(sc);
  image(heli, 150/sc, 121/sc);
  pop();
  game.updateScore();
}