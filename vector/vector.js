var canvas;

function setup() {
    canvas = createCanvas(innerWidth,innerHeight);
    canvas.position(0,0);
};

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
};

function draw() {
	frameRate(22);
	strokeWeight(random(.5,12));
	stroke(mouseX/3,mouseY/3,random(0,255));
	line(random(0,innerWidth),random(0,innerHeight),mouseX,mouseY)
};


