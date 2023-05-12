video = "";
Status = "";
object = [];
objectname = "";
input = document.getElementById("input").value;
function preload() {

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (Status != "") {
        coossd.detect(video, gotresult);
        document.getElementById("status").innerHTML="Status:Detected Objects";
        for (i = 0; i < object.length; i++) {
            if (object[i].label==objectname.toLowerCase()) {
                stroke("red");
                noFill();
                confidences = (object[i].confidence * 100).toFixed(3);
                textSize(15);
                text(object[i].label + " " + confidences + "%", object[i].x + 20,object[i].y + 20);
                rect(object[i].x, object[i].y, object[i].width, object[i].height);
                document.getElementById("find").innerHTML=objectname+" Found";
            }
            else{
                document.getElementById("find").innerHTML=objectname+" Not Found";
            }
        }
    }
}



function gotresult(error, result) {
    if (error) {
        console.log(error);
    }
    // if(input==i++){
    // console.log(result);
    
    
    object = result;
    // }
}



function start() {
    document.getElementById("status").innerHTML = "Status:Detecting Object";
    coossd = ml5.objectDetector("coossd", modelloaded)
    objectname = document.getElementById("input").value;
}

function modelloaded() {
    Status = true;
    console.log("success");
}