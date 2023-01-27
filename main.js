song1 = " "
song2 = " "
function preload() {
    song1 = loadSound("Star Wars - The Imperial March (DJ AG Remix).mp3")
    song1 = loadSound("Pirates of the Caribbean  - He's a Pirate (DJ AG Remix).mp3")
}

function setup (){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()
}



function draw(){
    image(video,0,0,600,500)
}

