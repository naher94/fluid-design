TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 5 });

var svg   = document.querySelector("svg");
var wave  = document.querySelector("#wave");
var width = innerWidth;

var amplitude = 200;
var frequency = 2;
var segments  = 200;
var interval  = width / segments;

for (var i = 0; i < segments; i++) {
  
  var norm  = i / (segments - 1);  
  var point = wave.points.appendItem(svg.createSVGPoint());
  
  point.x = i * interval;
  point.y = amplitude / 4;
  
  TweenMax.to(point, 5, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);
}