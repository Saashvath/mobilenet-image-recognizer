
function preload(){


}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  storage = ml5.imageClassifier('Mobilenet' ,modelLoaded)
}



function draw(){

image(video ,0,0,300,300)
storage.classify(video,gotResult)
}

function modelLoaded(){

  console.log("Model Has Been Sucessfuly Loaded!")
}

function gotResult(error,result){

  if(error){

 console.error(error)
    
  }

  else {
    
    document.getElementById("object_result").innerHTML = result[0].label;
    document.getElementById("accuracy_result").innerHTML = result[0].confidence.toFixed(3); 
  
}
}
