var x, y;
setup = function(){
	createCanvas(400,400);
	//Sets dead center
	x=width/2;
	y=height/2;
}

draw = function(){
	//resetting
	background(100);
	strokeWeight(0);
	stroke(0);

	//body
	fill(225,0,0);
	rect(50,100,150,80);

	//just to show where rectangles are drawn from (upperleft corner)
	stroke(0,225,0);
	strokeWeight(5);
	point(50,100);
	strokeWeight(0);
	stroke(0);

	//wheels
	fill(0);
	rect(50,75, 50,25);
	rect(150,75, 50,25);
	rect(50,180, 50,25);
	rect(150,180, 50,25);

	//glass
	fill(0,0,225);
	ellipse(100,140,80,60);

	//lights
	fill(225,225,0);
	rect(190,100, 10,20);
	rect(190,160, 10,20);

	//decals
	strokeWeight(2);
	line(150,140,200,140);
	line(160,130,200,130);
	line(160,150,200,150);
	line(170,160,200,160);
	line(170,120,200,120);

	//flag w/name
	stroke(225);
	fill(225);
	line(200,100,180,50);
	rect(110,30, 75,25);
	textSize(20);
	fill(0);
	text("Speedy", 115, 50);

}
