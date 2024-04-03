let speech= new SpeechSynthesisUtterance();

let voices = [];


let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voices,i) => (voiceSelect.options[i] = new options(voice.name,i)));
};





document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

});

