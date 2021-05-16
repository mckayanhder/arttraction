var a=1.4, b=-1.1, c=1.8, d= 2.5, r=100, g=100, z=100, o=50;
var aSlider, bSlider, cSlider, dSlider, rSlider, gSlider, zSlider, oSlider;
var x=1, y=1;

function setup() {
  rSlider = createSlider(0,255,r, 0.01);
  gSlider = createSlider(0,255,g, 0.01);  
  zSlider = createSlider(0,255,z, 0.01);  
  oSlider = createSlider(0,100,o, 0.01);  
  aSlider = createSlider(-2,3,a, 0.1);  
  bSlider = createSlider(-2,3,b,0.1);  
  cSlider = createSlider(-2,3,c,0.1);  
  dSlider = createSlider(-2,3,d,0.1);
  var myButton = createButton("Redraw")
  myButton.mousePressed(function() {
    a = aSlider.value();
    b = bSlider.value();
    c = cSlider.value();
    d = dSlider.value();
    r = rSlider.value();
    g = gSlider.value();
    z = zSlider.value();
    o = oSlider.value();
    background(245);
    stroke(r, g, z, o);
  })
  createCanvas(1000, 1000);
  stroke(r, g, z, o);
}

function draw() {
  for(var i=0;i<1000;i++) {
    var oldX = x;
    var oldY = y;
    x = sin(a * oldY) - cos(b * oldX);
    y = sin(c * oldX) - cos(d * oldY);
    var scaledX = map(x, -2, 2, 0, width);
    var scaledY = map(y, -2, 2, 0, height);
    point(scaledX, scaledY);
  }
}
