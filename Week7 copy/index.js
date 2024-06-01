var capture;

function setup() {
  capture = createCapture(VIDEO);
  capture.size(320, 240); // Change the size here
  capture.hide();
  var canvas = createCanvas(100, 75);
  canvas.id("myCanvas");
}

function draw() {
  image(
    capture,
    width / 2.5 - capture.width / 2.5,
    height / 4 - capture.height / 4,
    capture.width,
    capture.height
  );
  filter(THRESHOLD);
}
