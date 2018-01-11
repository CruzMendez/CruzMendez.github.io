var seed;


function setup() {
    createCanvas(innerWidth,innerHeight); 
//    canvas.position(400,500);
//    background(0);
//    createButton();
}

function draw() {
    background(0);    
    fill(150,0,255);
    stroke(255);
    noStroke();
    ellipse(100,100,50,50);
//    if (true) {
//        stroke(random(0,255),random(0,255),random(0,255));
//    line(mouseX, mouseY, pmouseX, pmouseY);
//    };
}

//var xspacing = 35;   // How far apart should each horizontal location be spaced
//var w = 0;              // Width of entire wave
//var maxwaves = 5;   // total # of waves to add together
//
//var theta = 0.0;
//var amplitude = []; //float[maxwaves];   // Height of wave
////float[] dx = new float[maxwaves];          // Value for incrementing X, to be calculated as a function of period and xspacing
//var yvalues = [];                           // Using an array to store height values for the wave (not entirely necessary)
//var ellipseCenter = [];
//
//function setup() {
//  createCanvas(innerWidth,200);
//  frameRate(20);
////  colorMode(RGB, 255, 255, 255, 100);
//  w = width + 10;
//
//  for (var i = 0; i < maxwaves; i++) {
//    amplitude[i] = random(10,20);
//    var period = random(100,300); // How many pixels before the wave repeats
//    dx[i] = (TWO_PI / period) * xspacing;
//  }
//
//  yvalues = w/xspacing;
//}
//
//function draw() {
//  background(0); //color
//  calcWave();
//  renderWave();
//}
//
//function calcWave() {
//  theta += 0.02; // Increment theta (try different values for 'angular velocity' here
//  for (var i = 0; i < yvalues.length; i++) {  // Set all height values to zero
//    yvalues[i] = 0;
//  }
//
//  // Accumulate wave height values
//  for (var j = 0; j < maxwaves; j++) {
//    var x = theta;
//    for (var i = 0; i < yvalues.length; i++) {
//      // Every other wave is cosine instead of sine
//      if (j % 2 == 0)  yvalues[i] += sin(x)*amplitude[j];
//      else yvalues[i] += cos(x)*amplitude[j];
//      x+=dx[j];
//    }
//  }
//}
//
//function renderWave() {
//  // A simple way to draw the wave with an ellipse at each location -- yvalues.length --
//  stroke(250);
//  fill(255,50);
////  ellipseMode(CENTER);
//  for (var x = 0; x < 20; x++) {
//    stroke(255);
//    line(x*xspacing+50,height/2+yvalues[x],x*xspacing+50,-.500010);
//    ellipse(x*xspacing+50,height/2+yvalues[x],30,30);
//  }
//  stroke(255);
//  if (true) {
//    line(mouseX, mouseY, pmouseX, pmouseY);
//    //line();
//  }
//}
