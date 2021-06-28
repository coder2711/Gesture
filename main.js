prediction = "" ;

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'jpeg',
    jpeg_quality : 100
});

web = document.getElementById("camera");

Webcam.attach(web);

function Take_snap(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML='<img id="Captured" src="'+img+'"/>';
    });
}

console.log("ml5 version" , ml5.version);

classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oQxw9ZZ90/model.json" , Model_loaded);
function Model_loaded(){
    console.log("Model is loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    
    Object1 = "My guess is "+ prediction_1;

    var Utter = new SpeechSynthesisUtterance(Object1);

    synth.speak(Utter);
}

function check(){
    img = document.getElementById("Captured");
    classify.classify(img , Got_result);
}

function Got_result(error , result){
 if(error){
     console.error(error);
 }
 else{
     console.log(result);

     document.getElementById("Gesture").innerHTML = result[0].label;
     prediction = result[0].label;
     speak();

     if(prediction == "Nice"){
         document.getElementById("emoji").innerHTML="👌";
     }

     if(prediction == "Good Luck"){
        document.getElementById("emoji").innerHTML="👍";
    }

    if(prediction == "Victory"){
        document.getElementById("emoji").innerHTML="✌";
    }

    if(prediction == "Hi"){
        document.getElementById("emoji").innerHTML="🖐";
    }

    if(prediction == "Yo"){
       document.getElementById("emoji").innerHTML="🤟";
   }

   if(prediction == "Namaste"){
    document.getElementById("emoji").innerHTML="🙏";
}
 }
}