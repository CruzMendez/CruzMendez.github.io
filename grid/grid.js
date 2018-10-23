var canvas;
var nodeCount = 10;
var nodeOrigin = 0;
var nodeID = 0;
var node = [];
var nodes = [];
var showLine;
var strokeVis = 0;

var fRate = 12;

var bground;
var title;
var h1;
var underline = 255;
var rectFill = 40;
var homeRect;
var cord2;
var zIndex = 100;

var node1;
var node1x = (innerWidth/2) - 110;
var node1y = 170;

var node2;
var node2x = (innerWidth/2) + 10;
var node2y = 120;

var node3;
var node3x = (innerWidth/2) + 110;
var node3y = 160;

var node4;
var node4x = (innerWidth/2) + 160;
var node4y = (innerHeight/2) - 55;

var node5;
var node5x = (innerWidth/2) + 60;
var node5y = (innerHeight/2) - 30;



function setup() {
    canvas = createCanvas(innerWidth,innerHeight); 
    canvas.position(0,0);
	frameRate(fRate);
	for (var i=0; i<nodeCount; i++) {
		nodeOrigin = nodeOrigin + random(0,5);
		nodes[i] = new Nodes();
		nodeID++;
	};
	for (var i=0; i<1; i++) {
		node[i] = new OuterNodes();
	}
	title = createElement('h1','2018 AIA Austin Homes Tour <br /> [Demo]');
	title.addClass('enter-name');
	title.position(35,innerHeight-120);
	
};

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
};

function draw() {
	background(35,35,35);
	noStroke();
	frameRate(fRate);
	for (var i=0; i<nodes.length; i++) {
		nodes[i].drawNode();
		nodes[i].wave();
	}; 	
	for (var i=0; i<node.length; i++) {
		node[i].drawOuterNode();
		node[i].outerWave();
	}; 	
};


//--------------RANDOM NODE CONTRUCTOR-------------//

function Nodes() {
	this.inDex = 0 + nodeID;
	this.amplitude = random(.1,1.9);
	this.period = 60;
    this.x = (innerWidth/2) + 30 + nodeOrigin;
    this.y = (innerHeight/2) - 30 - random(1,150);
	this.diam = 0;
	this.nodeStroke = 63;

    this.drawNode = function() {		
		ellipse(this.x, this.y, this.diam, this.diam);
		strokeWeight(1.75);
		stroke(mouseY/2,mouseY/2);
		line(this.x,this.y,mouseX,mouseY);
		line(this.x,this.y,node1x,node1y);
		line(this.x,this.y,node2x,node2y);
		line(this.x,this.y,node3x,node3y);
		line(this.x,this.y,node4x,node4y);
		line(this.x,this.y,node5x,node5y);
		noStroke();
	};
	this.wave = function () {
		this.y = this.y + this.amplitude * sin((frameCount/this.period)*TWO_PI);
	};
};

//--------------OUTER NODE CONTRUCTOR-------------//

function OuterNodes() {
	this.inDex = 0 + nodeID;
	this.amplitude = random(.4,1.4);
	this.period = 100;
	this.diam = 0;
	this.nodeStroke = 63;

    this.drawOuterNode = function() {	
	// BORDER	
		stroke(255);
		strokeWeight(1.75);
		line(node1x,node1y,node2x,node2y);
		line(node2x,node2y,node3x,node3y);
		line(node3x,node3y,node4x,node4y);
		line(node4x,node4y,node5x,node5y);
		line(node5x,node5y,node1x,node1y);

	// VECTORS BORDER POINTS TO BORDER POINTS + MOUSE POINT
		stroke(mouseY/2,mouseY/2);
		strokeWeight(1.75);
		line(node1x,node1y,node3x,node3y);
		line(node1x,node1y,node4x,node4y);
		line(node1x,node1y,node5x,node5y);
		stroke(mouseY/2,mouseY/2);
		line(node1x,node1y,mouseX,mouseY);

		line(node2x,node2y,node4x,node4y);
		line(node2x,node2y,node5x,node5y);
		line(node2x,node2y,mouseX,mouseY);

		line(node3x,node3y,node1x,node1y);
		line(node3x,node3y,node5x,node5y);
		line(node3x,node3y,mouseX,mouseY);

		line(node4x,node4y,node1x,node1y);
		line(node4x,node4y,mouseX,mouseY);

		line(node5x,node5y,mouseX,mouseY);
	};

	this.outerWave = function () {
	// BORDER MOVEMENT
		node1x = node1x + this.amplitude * sin((frameCount/this.period)*TWO_PI);
		// node1y = node1y + this.amplitude * sin((frameCount/this.period)*TWO_PI);

		// node2x = node2x + this.amplitude * sin((frameCount/this.period)*TWO_PI);
		node2y = node2y + this.amplitude * sin((frameCount/this.period)*TWO_PI);

		node3x = node3x + this.amplitude * sin((frameCount/this.period)*TWO_PI);
		node3y = node3y + this.amplitude * sin((frameCount/this.period)*TWO_PI);

		node4x = node4x + this.amplitude * sin((frameCount/this.period)*TWO_PI);
		// node4y = node4y + this.amplitude * sin((frameCount/this.period)*TWO_PI);

		// node5x = node5x + this.amplitude * sin((frameCount/this.period)*TWO_PI);
		node5y = node5y + this.amplitude * sin((frameCount/this.period)*TWO_PI);
	};
};

