var sketch1 = function (p) {
  var capture;

  p.setup = function () {
    capture = p.createCapture(p.VIDEO);
    capture.size(640, 480);
    capture.hide();
  };

  p.draw = function () {
    p.image(capture, p.width / 2 - 320, p.height / 2 - 240);
    p.filter(p.THRESHOLD);
  };
};

var sketch2 = function (p) {
  // Define your second sketch here
};

new p5(sketch1);
new p5(sketch2);
