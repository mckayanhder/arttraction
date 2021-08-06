function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
}

let vars = {};

function addSlider(variable, min, max, val, step, text) {
  let slider = createSlider(min, max, val, step, text);
  let label = createSpan(text.replace("#", val.toFixed(2)));
  createElement("br");
  
  let onInput = () => {
    vars[variable] = slider.value();
    label.html(text.replace("#", slider.value().toFixed(2)));
    stroke(vars.r, vars.g, vars.z, vars.o); 
  };
  
  slider.input(onInput);
  slider.parent('slider_container');
  label.parent('slider_container');
  
  vars[variable] = val;
}


// UI set up
function setup() {
  addSlider("r", 0, 255, randomNumber(0, 255), 0.01, "Red = #");
  addSlider("g", 0, 255, randomNumber(0, 255), 0.01, "Green = #");
  addSlider("z", 0, 255, randomNumber(0, 255), 0.01, "Blue = #");
  addSlider("o", 0, 100, 100, 0.01, "Opacity = #");
  // capture = createCapture(VIDEO);
  // capture.hide();
  let responsiveWindow = windowWidth / 2;
  let canvas = createCanvas(responsiveWindow, responsiveWindow);
  canvas.parent('canvas_container')
  stroke(vars.r, vars.g, vars.z, vars.o);
}

function windowResized()  {
  resizeCanvas(windowWidth / 2, windowWidth / 2);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('myCanvas', 'png');
  }
}
  
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }