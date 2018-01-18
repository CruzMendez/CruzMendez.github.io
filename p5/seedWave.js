var canvas;
var seedCount = 30;
var seedOrigin = 0;
var seeds = [];
var currentPage;
var pageTitle = ["services", "skills", "samples", "about"];
var subTitle;
//var amplitude = .4;
//var period = 100;


function setup() {
    canvas = createCanvas(innerWidth,200); 
//    canvas.position(0,300);
	frameRate(40);
    for (var i=0; i<seedCount; i++) {
        seedOrigin = seedOrigin + 25;
        seeds[i] = new Seed();
    };
    
}

function draw() {
	background(0);
	textSize(35);
	textFont('Helvetica');
	fill(179,114,201);
	noStroke();
	text(pageTitle[0],50,45);
	for (var i=0; i<seeds.length; i++) {
		var positionY = this.seeds[i].y;
		seeds[i].display();
		seeds[i].waveDown();
//		if (positionY === 120) {
//			seeds[i].waveUp();
//		};
	};   
	stroke(125);
	line(seeds[5].x,seeds[5].y,200,33);
	noStroke();
	fill(179,114,201,80);
	ellipse(seeds[5].x,seeds[5].y,40,40)
};

function Seed() {
	this.amplitude = 1;
	this.period = random(90,100);
    this.x = 225+seedOrigin;
    this.y = 80;
    this.display = function() {
        noStroke();
        fill(150,85);
        ellipse(this.x, this.y, 20,20);
	};
	this.waveDown = function () {
		this.y = this.y + this.amplitude * sin((frameCount/this.period)*TWO_PI);
	};
//	this.waveUp = function () {
//		this.y = this.y - 1;
//	};
}
 

