var prediciton1 = "";
var prediciton2 = "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    image_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sXe_Y6iV9/model.json', modelLoaded);
function modelLoaded()
{
    console.log('modelLoaded');
}
function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 ="First gesture is"+prediciton1;
    speak_data_2 ="Second gesture is"+prediciton2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterthis.rate = 0.5;
    synth.speak(utterthis);
}
