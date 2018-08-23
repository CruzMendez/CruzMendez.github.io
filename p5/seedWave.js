var canvas;
var seedCount = 15;
var seedOrigin = 0;
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
	
	rateBtn = createButton("Increase Speed");
	rateBtn.position(20,(innerHeight/2)-60);
	rateBtn.addClass('rate-btn');
	rateBtn.mousePressed(rateUp);
	
	ampBtn = createButton("Increase Amplitude");
	ampBtn.position(20,(innerHeight/2)-110);
	ampBtn.addClass('amp-btn');
	ampBtn.mousePressed(ampUp);

	// newSeed = createButton("Add Ellipse");
	// newSeed.position(20,(innerHeight/2)-160);
	// newSeed.addClass('amp-btn');
	// newSeed.mousePressed(addSeed);
};

function addSeed() {
	seeds[seedCount-1] = new Seed();
	seedCount++;
}

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
	resizeCanvas(innerWidth, innerHeight);
};

function mousePressed() {
	for (var i=0; i < seeds.length; i++) {
		seeds[i].newPage();
	};
};


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
	}; 	
};


//--------------SEED CONTRUCTOR-------------//

function Seed() {
	this.inDex = 0 + seedID;
	this.amplitude = amp;
	this.period = random(150,155);
    this.x = (innerWidth/2-(160))+seedOrigin;
    this.y = (innerHeight/2) - (50);
	this.diam = 20;
	this.seedStroke = 63;
//	this.cord1 = undefined;
//	this.cord3 = undefined;
    this.display = function() {		
        stroke(this.seedStroke);
        fill(150,95);
        ellipse(this.x, this.y, this.diam, this.diam);
		stroke(255);
//		line(this.x, innerHeight-130, this.cord3, this.y);
//		line(seeds[0].x, seeds[0].y, seeds[0].x, showLine);
//		line(20, innerHeight-130, this.cord3, innerHeight-130);
		fill(0,0);
		stroke(underline, 40)
		// ellipse(seeds[0].x,seeds[0].y,20,20);
//		this.cord1 = line(20, innerHeight-130, seeds[0].x, innerHeight-130);
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
	this.newPage = function() {
		var d = dist(mouseX,mouseY, this.x, this.y);
		if (d < 14) {
			
			divServ = select('#services');
			divServ2 = select('#services-behind');
			divServ.addClass('div-hide');
			divServ2.addClass('div-hide');
	
		
			for (var i = 0; i < seeds.length; i++) {
				this.seedStroke = 255;
				seeds[i].cord3 = undefined;
				this.cord3 = this.x;
				pageNumber = this.inDex;
				titleText.addClass('text-hide');
				titleSubText.addClass('text-hide');
	//				page0();
				showLine = undefined;
				if (this.inDex == 0) {
					page0();
				};
				if (this.inDex == 1) {
					page1();
				};
				if (this.inDex == 2) {
					page2();
				};
				if (this.inDex == 3) {
					page3();
				};
				if (this.inDex == 4) {
					page4();
				};
			};
		};
	};
};

