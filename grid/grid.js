var canvas;
var seedCount = 30;
var totalCount = 493;
var seedOrigin = 0;
var rows = (innerHeight/(seedCount*.7));
var seedID = 0;
var seeds = [];
var showLine;
var strokeVis = 0;

var currentPage;
var numGen;
var amp = 1.6

var titleText;
var titleSubText;
var bground;
var title;
var h1;
var underline = 255;
var rectFill = 40;
var newSeed;
var connect;
var randSeed;




function setup() {
    canvas = createCanvas(innerWidth,innerHeight);
    canvas.position(0,0);
	for (var i=0; i<totalCount; i++) {
		seedOrigin = seedOrigin + (innerWidth/seedCount);
		seeds[i] = new Seed();
		seedID++;
		if ((seedID+1) == (seedCount)) {
			rows=rows*2;
			seedOrigin = 0;
		}
		if ((seedID+2) == (seedCount*2)) {
			seedOrigin = 0;
			rows=rows*1.5;
		}
		if ((seedID+3) == (seedCount*3)) {
			seedOrigin = 0;
			rows=rows*1.35;
		}
		if ((seedID+4) == (seedCount*4)) {
			seedOrigin = 0;
			rows=rows*1.25;
		}
		if ((seedID+5) == (seedCount*5)) {
			seedOrigin = 0;
			rows=rows*1.21;
		}
		if ((seedID+6) == (seedCount*6)) {
			seedOrigin = 0;
			rows=rows*1.18;
		}
		if ((seedID+7) == (seedCount*7)) {
			seedOrigin = 0;
			rows=rows*1.15;
		}
		if ((seedID+8) == (seedCount*8)) {
			seedOrigin = 0;
			rows=rows*1.13;
		}
		if ((seedID+9) == (seedCount*9)) {
			seedOrigin = 0;
			rows=rows*1.12;
		}
		if ((seedID+10) == (seedCount*10)) {
			seedOrigin = 0;
			rows=rows*1.11;
		}
		if ((seedID+11) == (seedCount*11)) {
			seedOrigin = 0;
			rows=rows*1.1;
		}
		if ((seedID+12) == (seedCount*12)) {
			seedOrigin = 0;
			rows=rows*1.1;
		}
		if ((seedID+13) == (seedCount*13)) {
			seedOrigin = 0;
			rows=rows*1.09;
		}
		if ((seedID+14) == (seedCount*14)) {
			seedOrigin = 0;
			rows=rows*1.09;
		}
		if ((seedID+15) == (seedCount*15)) {
			seedOrigin = 0;
			rows=rows*1.08;
		}
		if ((seedID+16) == (seedCount*16)) {
			seedOrigin = 0;
			rows=rows*1.08;
		}
	};


	// connect = createElement('p','Click an ellipse to create a connection');
	// connect.position(20,(innerHeight/2)+40);
	// connect.addClass('connect-btn');
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
	// background(240);
//	clear();
	noStroke();
	frameRate(15);
	textSize(35);
	fill(179,114,201,195);
	noStroke();
	for (var i=0; i<seeds.length; i++) {
		seeds[i].display();
		seeds[i].highlight();
		// seeds[i].connection();
	};
	// stroke(random(0,255),random(0,255),random(0,255));
	// line(random(0,innerWidth),random(0,innerHeight),mouseX,mouseY);
};


//--------------SEED CONTRUCTOR-------------//

function Seed() {
	this.inDex = 0 + seedID;
	this.x = seedOrigin;
	this.y = rows;
	this.diam = 15;
	this.seedStroke = 63;
	this.display = function() {
		// fill(10,129,147,150);
		fill(255);
        ellipse(this.x, this.y, this.diam, this.diam);
	};
	this.highlight = function() {
		var d = dist(mouseX,mouseY, this.x, this.y);
		if (d < 75) {
			noStroke();
			fill(mouseX/3,mouseY/3,random(0,255));
			ellipse(this.x, this.y, 40, 40);
		};
		if (d < 125) {
			noStroke();
			fill(mouseX/3,mouseY/3,random(0,255));
			ellipse(this.x, this.y, 10, 10);
		};
		if (d < 30) {
			noStroke();
			fill(mouseX/3,mouseY/3,random(0,255));
			ellipse(this.x, this.y, (innerWidth/20),(innerWidth/20));
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
