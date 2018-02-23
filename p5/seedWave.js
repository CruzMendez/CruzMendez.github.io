var canvas;
var seedCount = 8;
var seedOrigin = 0;
var seedPosition = 0;
var seeds = [];
var showLine;
var divServ;
var divServ2;
var divIllust;
var currentPage;

var pageTitle = ["services", 
				 "illustrations", 
				 "modeling", 
				 "interactive", 
				 "photography", 
				 "projects", 
				 "resources",
				 "about"];

var pageSubTitle = ["WHAT I CAN DO", 
					"2D GRAPHICS", 
					"3D GRAPHICS", 
					"INFO GRAPHICS", 
					"PHOTO GRAPHICS", 
					"PAST PROJECTS", 
					"LIBRARY",
					"ME"];
var pageNumber = 0;
var titleText;
var titleSubText;
var subTitle;
var enter;
var bground;
var h3;
var h1;
var underline = 40;
var rectFill = 40;
var homeRect;
var cord2;
var zIndex = 100;
//var gif1;



function setup() {
    canvas = createCanvas(innerWidth,innerHeight); 
//    canvas.position(0,innerHeight-200);
	frameRate(20);
	for (var i=0; i<seedCount; i++) {
		seedOrigin = seedOrigin + 35;
		seeds[i] = new Seed();
		seedPosition++;
    };
	
	h3 = createElement('h3','cruz mendez');
	h3.addClass('enter-name');
	h3.position(20,(innerHeight/2)-60);
	h1 = createElement('h1','portfolio');
	h1.addClass('enter-port');
	h1.position(20,(innerHeight/2)-24);
	enter = createButton("ENTER");
	enter.position(12,innerHeight/2);
	enter.addClass('enter');
	enter.addClass('font-grow-fast');
	enter.mousePressed(page0);
//	titleText = createP(pageTitle[pageNumber]);
//	titleText.position(30,innerHeight-170);
//	titleText.addClass('title-text');
	
};

function addStyle() {
	titleText = createP(pageTitle[pageNumber]);
	titleSubText = createP(pageSubTitle[pageNumber]);
	titleText.position(20,innerHeight-165);
	titleText.addClass('title-text');
	titleText.addClass('font-grow-slow');
	titleSubText.addClass('title-subtext');
	titleSubText.position(20,innerHeight-120);
};


	function page0() {
		divServ = select('#services');
		divServ2 = select('#services-behind');
		divServ.removeClass('div-hide');
	//	divServ.addClass('div-vis');
		divServ2.removeClass('div-hide');
		showLine = innerHeight-130;
		underline = 255;
		h1.remove();
		h3.remove();
		enter.remove();
		rectFill = 0;
		addStyle();
	};

	function page1() {
		divIllust = select('#illustrations');
		divIllust.removeClass('div-hide');
		addStyle();
//		var fixFont = select('twoD-text');
//		fixFont.addClass('title-text')
//		var nextButton = createButton('&#10095;');
//		nextButton.position(innerWidth/2,500);
//		nextButton.mousePressed(zIndexUp);
//		var gif1 = select('gif3');
//		gif1.addClass('gif-z1');
	};

//function zIndexUp() {
////	zIndex = zIndex + 10;
//	var gif1 = select('gif3');
////	gif1.style('z-index', 'zIndex');
//	gif1.addClass('gif-z1');
//}

	function page2() {

	}

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
	background(0);
//	clear();
	noStroke();
	fill(rectFill);
	rect(0,0,innerWidth,innerHeight);
	textSize(35);
//	textFont('Calibri');
	fill(179,114,201,195);
	noStroke();
//	translate(30,260);
//	titleText = createP(pageTitle[0]);
//	titleText.position(30,530);
//	titleText.addClass('title-text');
	for (var i=0; i<seeds.length; i++) {
		seeds[i].display();
		if (underline === 255) {
			seeds[i].wave();
			seeds[i].highlight();
	//		seeds[i].changeTitle();
		};
	}; 

//	stroke(underline);
//	line(20,innerHeight-90,((innerWidth/2)-160),innerHeight-90)
//	line(seeds[9].x,seeds[9].y,250,260);
//	cord2 = line(seeds[0].x, innerHeight-130, seeds[0].x, seeds[0].y);
//	noStroke();
//	fill(179,114,201,80);
//	ellipse(seeds[0].x,seeds[0].y,40,40);
//	ellipse(seeds[4].x,seeds[4].y,40,40);
//	ellipse(seeds[9].x,seeds[9].y,40,40);
//	ellipse(seeds[seeds.length-1].x,seeds[seeds.length-1].y,40,40);
	
//	for (var v = 0; v < seeds.length; v++) {
//		var spot = 260;
//		noStroke();
//		fill(0,innerHeight-seeds[v].y-500);
//		ellipse(seeds[v].x,innerHeight-26,20,8);
//	};
	
//	stroke(underline, 200);
//	ellipse(seeds[0].x,seeds[0].y,20,20)
	
};


//--------------SEED CONTRUCTOR-------------//

function Seed() {
	this.inDex = 0 + seedPosition;
	this.amplitude = .6;
	this.period = random(150,155);
    this.x = (innerWidth/2-(160))+seedOrigin;
    this.y = innerHeight-65;
	this.diam = 20;
	this.seedStroke = 63;
	this.cord1 = undefined;
	this.cord3 = undefined;
    this.display = function() {		
        stroke(this.seedStroke);
        fill(150,95);
        ellipse(this.x, this.y, this.diam, this.diam);
		stroke(255);
		line(this.x, innerHeight-130, this.cord3, this.y);
		line(seeds[0].x, seeds[0].y, seeds[0].x, showLine);
		line(20, innerHeight-130, this.cord3, innerHeight-130);
		fill(0,0);
		stroke(underline,40)
		ellipse(seeds[0].x,seeds[0].y,20,20);
		this.cord1 = line(20, innerHeight-130, seeds[0].x, innerHeight-130);
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
			divIllust = select('#illustrations');
			divIllust.addClass('div-hide');
			
		
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
			};
		};
	};
//	this.changeTitle = function() {
//		var d = dist(mouseX,mouseY, this.x, this.y);
//		if (d < 14) {
//			for(var i = 0; i < seeds.length; i++) {
//			pageNumber = 1;				
//			};
//		};
//	};
};

