var canvas;
var seedCount = 30;
var seedOrigin = 0;
var seeds = [];
var currentPage;
var pageTitle = ["s e r v i c e s", "skills", "samples", "about"];
var subTitle;
var shadows = [];

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}
function setup() {
    canvas = createCanvas(innerWidth,400); 
    canvas.position(0,innerHeight-400);
	frameRate(40);
    for (var i=0; i<seedCount; i++) {
        seedOrigin = seedOrigin + 25;
        seeds[i] = new Seed();
//		shadows[i] = new Shadows();
    };
    
}

function draw() {
//	background(0);
	clear();
	textSize(35);
	textFont('Calibri');
	fill(179,114,201,195);
	noStroke();
	text(pageTitle[0],30,250);
	for (var i=0; i<seeds.length; i++) {
		seeds[i].display();
		seeds[i].waveDown();		
	}; 
	stroke(255);
	line(30,260,250,260)
	line(seeds[9].x,seeds[9].y,250,260);
	noStroke();
	fill(179,114,201,80);
	ellipse(seeds[0].x,seeds[0].y,40,40);
	ellipse(seeds[4].x,seeds[4].y,40,40);
	ellipse(seeds[9].x,seeds[9].y,40,40);
	ellipse(seeds[seeds.length-1].x,seeds[seeds.length-1].y,40,40);
	noStroke();
	for (var v = 0; v < seeds.length; v++) {
		var spot = 250;
		fill(0,seeds[v].y - 300);
		ellipse(spot+(v*25),365,20,8);
	};
};

function Seed() {
	this.amplitude = 1;
	this.period = random(90,100);
    this.x = 225+seedOrigin;
    this.y = 310;
    this.display = function() {
        noStroke();
        fill(150,95);
        ellipse(this.x, this.y, 20,20);
	};
	this.waveDown = function () {
		this.y = this.y + this.amplitude * sin((frameCount/this.period)*TWO_PI);
	};
//	this.shade = this.y-200;
//	this.displayFloor = function() {
//		noStroke();
//        fill(80,this.shade);
//        ellipse(this.x, 365, 30,10);
//	};
//	this.makeShade = function () {
//		this.shade = this.shade +  sin((frameCount/100)*TWO_PI);
//	};
}

//function shadows() {
//	for (var i = 0; seeds.length; i++) {
//		noStroke();
//		fill(100,seeds[i].y - 200);
//		ellipse(225+seedOrigin,365,30,10);
//	}
//}

 
//function Shadows() {
//	this.x = 225+seedOrigin;
//	this.y = 365;
//	this.shade = 50;
//	this.display = function() {
//		noStroke();
//        fill(80,this.shade);
//        ellipse(this.x, this.y, 30,10);
//	};
//	this.makeShade = function () {
//		this.shade = this.shade +  sin((frameCount/100)*TWO_PI);
//	};
//}

