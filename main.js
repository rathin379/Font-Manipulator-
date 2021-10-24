difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    canvas=createCanvas(700, 700);
    canvas.position(1000, 150);
    
    video= createCapture(VIDEO);
    video.size(700, 700);
    video.position(200, 150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#d4400f');

    textSize(difference);
    fill('#039dfc');
    text('Rathin', 50, 500)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+ leftWristX + " rightWristX = " + rightWristX + " difference = " +difference);
    }
}