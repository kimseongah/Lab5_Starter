// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeakInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');
  const defaultImgSrc = faceImage.src;
  const openMouthImgSrc = 'assets/images/smiling-open.png';

  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('value', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  function speak() {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (textToSpeakInput.value !== '') {
      const utterance = new SpeechSynthesisUtterance(textToSpeakInput.value);
      utterance.onstart = () => {
        faceImage.src = openMouthImgSrc;
      };
      utterance.onend = () => {
        faceImage.src = defaultImgSrc;
      };
      utterance.onerror = () => {
        faceImage.src = defaultImgSrc;
      };
      utterance.voice = voices.find(voice => voice.name === voiceSelect.value);
      synth.speak(utterance);
    }
  }

  speakButton.addEventListener('click', () => {
    speak();
  });
}