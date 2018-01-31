var canvas;
var seedCount = 30;
var seedOrigin = 0;
var seeds = [];
var currentPage;
var pageTitle = ["services", "skills", "samples", "about"];
var titleText;
var subTitle;


function setup() {
    canvas = createCanvas(innerWidth,400); 
    canvas.position(0,innerHeight-400);
	frameRate(20);
    for (var i=0; i<seedCount; i++) {
        seedOrigin = seedOrigin + 25;
        seeds[i] = new Seed();
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

//function visSet() {
//	var skillDiv = select('#skills');
//	var divServ = select('#services');
//	divServ.addClass('div-hide');
//	skillDiv.removeClass('div-hide');
//	skillDiv.addClass('div-vis');
//};


function draw() {
//	background(0);
	clear();
	textSize(35);
//	textFont('Calibri');
	fill(179,114,201,195);
	noStroke();
//	translate(30,260);
	titleText = createP(pageTitle[0]);
	titleText.position(30,530);
	titleText.addClass('title-text');

	for (var i=0; i<seeds.length; i++) {
		seeds[i].display();
		seeds[i].wave();
		seeds[i].highlight();
//		seeds[i].newPage();
	}; 
	
	stroke(255);
	line(30,260,250,260)
//	line(seeds[9].x,seeds[9].y,250,260);

	noStroke();
	fill(179,114,201,80);
	ellipse(seeds[0].x,seeds[0].y,40,40);
	ellipse(seeds[4].x,seeds[4].y,40,40);
	ellipse(seeds[9].x,seeds[9].y,40,40);
	ellipse(seeds[seeds.length-1].x,seeds[seeds.length-1].y,40,40);
	for (var v = 0; v < seeds.length; v++) {
		var spot = 250;
		fill(0,seeds[v].y - 300);
		ellipse(spot+(v*25),365,20,8);
	};
	
	stroke(255,200);
	ellipse(seeds[0].x,seeds[0].y,20,20);
};


//--------------SEED CONTRUCTOR-------------//

function Seed() {
	this.amplitude = 1;
	this.period = random(90,100);
    this.x = 225+seedOrigin;
    this.y = 310;
	this.diam = 20;
	this.seedStroke = 63;
	this.cord1 = 250;
    this.display = function() {
        stroke(this.seedStroke);
        fill(150,95);
        ellipse(this.x, this.y, this.diam, this.diam);	
		stroke(255);
		line(this.cord1, this.y, 250, 260);
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
			for(var i = 0; i < seeds.length; i++) {
				this.seedStroke = 255;
				seeds[i].cord1 = undefined;
				this.cord1 = this.x;
			};
		};
	};
};

