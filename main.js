function preload(){}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,150,120,320,240);
fill('blue');
    circle(80, 60, 110);
    circle(310, 60, 110);
    circle(560, 60, 110);

    circle(80, 420, 110);
    circle(310,420, 110);
    circle(560,420, 110);

    circle(80, 240, 110);
    circle(560, 240, 110);
    fill(255, 204, 0);
    rect(135, 50, 120, 15);
    rect(365, 50, 140, 15);
    
    rect(135, 410, 120, 15);
    rect(365, 410, 140, 15);

    rect(75, 115, 15, 70);
    rect(555, 115, 15, 70);

    rect(75, 295, 15, 70);
    rect(555, 295, 15, 70);
    
}
function take_snapshot(){
    save('student_name.png');
}