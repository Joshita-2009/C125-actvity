function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550, 500);
    canvas.position(550,150);

    model=ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}
function draw(){
    background("pink")
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}