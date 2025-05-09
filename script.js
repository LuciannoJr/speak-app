let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById("voiceSelect");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

function speak() {
  speech.text = document.getElementById("input").value;
  speech.voice = voices[voiceSelect.value];
  window.speechSynthesis.speak(speech);
}
