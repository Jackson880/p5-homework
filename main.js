function preload() {

}
function setup() {
    canvas=createCanvas(500, 400);
    canvas.position(110, 250);

    video=createCapture(VIDEO);
    video.hide();
    filter="";
}
function draw() {
    image(video, 100, 100, 250, 200);
    tint(filter);
    fill(0,255,0);
    stroke(0,255,0);
    rect(30, 30, 20, 300);
    rect(425, 30, 20, 300);
    rect(30, 30, 450, 20);
    rect(30, 325, 450, 20);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50, 50, 90);
    circle(450, 50, 90);
    circle(50, 350, 90);
    circle(450, 350, 90);

}
function take_snapshot() {
    save("myImage.png");
}