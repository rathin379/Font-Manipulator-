function setup(){
    canvas=createCanvas(550, 550);
    canvas.center();
    
    video= createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 230)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#d4400f');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}