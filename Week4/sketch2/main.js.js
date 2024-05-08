/*
Interface Objects

My collection of buttons, sliders and other input methods for P5js

Author:
  Richard Bourne

Site:
  ricardobytes.com
*/

// Private variables
var smoothed = true;
var debug = false;

var bgColor = 0;
var labelColor = 255;

var hueSlider;
var satSlider;
var intSlider;
var alphaSlider;
var smoothButton;
var whiteButton;
var blackButton;
var saveButton;
var resetButton;

function setup() {
  createCanvas(1024, 768);

  colorMode(HSB, 255);

  hueSlider = new SliderLayout("Hue", 0, 255, 160, 0.1, 100, 100);

  satSlider = new SliderLayout(
    "Sat",
    0,
    255,
    160,
    0.1,
    100,
    hueSlider.slider.position().y + 70
  );

  intSlider = new SliderLayout(
    "Int",
    0,
    255,
    160,
    0.1,
    100,
    satSlider.slider.position().y + 70
  );

  alphaSlider = new SliderLayout(
    "Alpha",
    0,
    255,
    160,
    0.1,
    100,
    intSlider.slider.position().y + 70
  );

  smoothButton = createButton("Toggle smooth");
  smoothButton.position(100, alphaSlider.slider.position().y + 40);
  smoothButton.mousePressed(toggleSmooth);

  whiteButton = createButton("White labels");
  whiteButton.position(100, smoothButton.position().y + 40);
  whiteButton.mousePressed(whiteLabels);

  blackButton = createButton("Black labels");
  blackButton.position(100, whiteButton.position().y + 40);
  blackButton.mousePressed(blackLabels);

  saveButton = createButton("Save image");
  saveButton.position(100, blackButton.position().y + 40);
  saveButton.mousePressed(saveScreenimage);

  resetButton = createButton("Reset");
  resetButton.position(100, saveButton.position().y + 40);
  //resetButton.mousePressed(reset);
}

function draw() {
  background(bgColor);
  var hueValue = hueSlider.slider.value();
  var satValue = satSlider.slider.value();
  var intValue = intSlider.slider.value();
  var alphaValue = alphaSlider.slider.value();
  background(hueValue, satValue, intValue, 255);
  textSize(20);
  text(
    "A set of interface objects you can adapt for your own programs",
    300,
    200
  );
  fill(60, 255, 255, alphaValue);

  // Display sliders.
  hueSlider.display();
  satSlider.display();
  intSlider.display();
  alphaSlider.display();
}

// Toggles label color white.
function whiteLabels() {
  labelColor = 255;
}

// Toggles label color black.
function blackLabels() {
  labelColor = 0;
}

function toggleDebugDisplay() {
  debug = !debug;
}

function toggleSmooth() {
  smoothed = !smoothed;
}

function saveScreenimage() {
  save("myCanvas.jpg");
}
