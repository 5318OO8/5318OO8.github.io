var capture;

function setup() {
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  image(capture, width / 2 - 320, height / 2 - 240);
  filter(THRESHOLD);
}
