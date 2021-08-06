let input;
let img;
let fawkes;
let paused = false;
let ourFrameCount = 0;

function handleFile(file) {
  if (file.type === 'obj') {
    img = createImg(file.data, '');
    // img.hide();
  } else {
    img = null;
  }
}


function preload() {

    fawkes = loadModel('assets/low-poly-fox-by-pixelmannen.obj', true);
  }


function setup() {
    let responsiveWindow = windowWidth / 2;
    let canvas = createCanvas(responsiveWindow, responsiveWindow, WEBGL);
    canvas.parent('canvas_container');
  }

  function windowResized()  {
    resizeCanvas(windowWidth / 2, windowWidth / 2);
  }



  function draw() {
    background(250);
    rotateY(frameCount * 0.001);
  
    for (let j = 0; j < 10; j++) {
      push();
      for (let i = 0; i < 10; i++) {
        translate(
          sin(frameCount * 0.01 + j) * 20,
          sin(frameCount * 0.01 + i) * 500,
          i * 0.1
        );
        rotateZ(frameCount * 0.001);
        push();
        model(fawkes);
        if (!paused) {
            ourFrameCount++;
        }
      }
      pop();
    }
  }

  function keyTyped() {
    if (key === 's') {
      saveCanvas('myCanvas', 'png');
    }
  }

  function mousePressed() {
    paused = !paused;
    frameCount = ourFrameCount;
  }


