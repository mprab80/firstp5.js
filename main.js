function preload(){

}

function setup(){
    canvas=createCanvas(450,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function modelLoaded(){
    console.log('model loaded hihihi');
}

function draw(){
    image(video,0,0,450,350);
    circle(259, 230, 72);
    ellipse(134, 110, 55, 55);
    rect(150, 20, 55, 55);
}
