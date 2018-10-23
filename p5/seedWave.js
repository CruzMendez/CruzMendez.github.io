var canvas;
var seedCount = 15;
var seedOrigin = 40;
var seedID = 0;
var seeds = [];
var showLine;
var strokeVis = 0;
var divServ;
var divServ2;
var divIllust;
var divMod;
var divInfo;
var divPhoto;
var divWork;
var currentPage;
var numGen;
var fRate = 10;
amp = 1.6


var pageTitle = ["services",
				 "illustrations",
				 "modeling",
				 "interactive",
				 "projects",
				 "photography",
				 "resources",
				 "about"];

var pageSubTitle = ["WHAT I CAN DO",
					"2D GRAPHICS",
					"3D GRAPHICS",
					"INFO GRAPHICS",
					"WORK SAMPLES",
					"PHOTO GRAPHICS",
					"LIBRARY",
					"ME"];
var pageNumber = 0;
var titleText;
var titleSubText;
var subTitle;
var rateBtn;
var ampBtn
var bground;
var title;
var h1;
var underline = 255;
var rectFill = 40;
var homeRect;
var cord2;
var zIndex = 100;
var newSeed;
var connect;
var randSeed;




function setup() {
    canvas = createCanvas(innerWidth,innerHeight);
    canvas.position(0,0);
	frameRate(fRate);
	for (var i=0; i<seedCount; i++) {
		seedOrigin = seedOrigin + 25;
		seeds[i] = new Seed();
		seedID++;
	};


	title = createElement('h1','P5.js Canvas');
	title.addClass('enter-name');
	title.position(35,innerHeight-100);

	rateBtn = createButton("Increase Rate");
	rateBtn.position(20,(innerHeight/2)-50);
	rateBtn.addClass('rate-btn');
	rateBtn.mousePressed(rateUp);

	ampBtn = createButton("Increase Amplitude");
	ampBtn.position(20,(innerHeight/2)-130);
	ampBtn.addClass('amp-btn');
	ampBtn.mousePressed(ampUp);

	newSeed = createButton("Add Ellipse");
	newSeed.position(20,(innerHeight/2)+27);
	newSeed.addClass('add-btn');
	newSeed.mousePressed(addSeed);

	// connect = createElement('p','Click an ellipse to create a connection');
	// connect.position(20,(innerHeight/2)+40);
	// connect.addClass('connect-btn');
};


function addSeed() {
	seeds[seedCount] = new NewSeed();
	seedCount++;
};

function rateUp() {
	fRate = fRate * 2;
};

function ampUp() {
	amp = amp * 1.5;
	for (var i=0; i < seeds.length; i++) {
		seeds[i].amplitude = amp;
	};
};

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
};

// function mousePressed() {
// 	for (var i=0; i < seeds.length; i++) {
// 		seeds[i].connection();
// 	};
// };


function draw() {
	background(1,7,35);
//	clear();
	noStroke();
	textSize(35);
	fill(179,114,201,195);
	noStroke();
	frameRate(fRate);

	for (var i=0; i<seeds.length; i++) {
		seeds[i].display();
		seeds[i].wave();
		seeds[i].highlight();
		// seeds[i].connection();
	};
	// stroke(random(0,255),random(0,255),random(0,255));
	// line(random(0,innerWidth),random(0,innerHeight),mouseX,mouseY);
};


//--------------SEED CONTRUCTOR-------------//

function Seed() {
	this.inDex = 0 + seedID;
	this.amplitude = amp;
	this.period = random(150,155);
  this.x = 275 + seedOrigin;
  this.y = (innerHeight/2) - (50);
	this.diam = 20;
	this.seedStroke = 63;
  this.display = function() {
        stroke(this.seedStroke);
        fill(10,129,147);
        ellipse(this.x, this.y, this.diam, this.diam);
		stroke(255);
		fill(0,0);
		stroke(underline, 40)
	};
	this.wave = function () {
		this.y = this.y + this.amplitude * sin((frameCount/this.period)*TWO_PI);
	};
	this.highlight = function() {
		var d = dist(mouseX,mouseY, this.x, this.y);
		if (d < 14) {
			noStroke();
			fill(150,250);
			ellipse(this.x, this.y, 20, 20);
		};
	};
	// this.connection = function () {
	// 	var s = random(0,seedCount);
	// 	var d = dist(mouseX,mouseY, this.x, this.y);
	// 	if (d < 14) {
	// 		stroke(200);
	// 		line(seeds[s].x,seeds[s].y,seeds[s].x,seeds[s].y);
	// 	};
	// };
};

// NEW SEED ADDITION

function NewSeed() {
	seedOrigin = seedOrigin + 25;
	this.inDex = 0 + seedID;
	this.amplitude = amp;
	this.period = random(150,155);
    this.x = 275+seedOrigin;
    this.y = (innerHeight/2) - (50);
	this.diam = 20;
	this.seedStroke = 63;
    this.display = function() {
        stroke(this.seedStroke);
        fill(10,129,147);
        ellipse(this.x, this.y, this.diam, this.diam);
		stroke(255);
		fill(0,0);
		stroke(underline, 40)
	};
	this.wave = function () {
		this.y = this.y + this.amplitude * sin((frameCount/this.period)*TWO_PI);
	};
	this.highlight = function() {
		var d = dist(mouseX,mouseY, this.x, this.y);
		if (d < 14) {
			noStroke();
			fill(150,250);
			ellipse(this.x, this.y, 20, 20);
		};
	};
};
