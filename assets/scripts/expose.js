// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener('change', () => {
    const hornType = hornSelect.value;
    updateHorn(hornType);
  });

  playButton.addEventListener('click', () => {
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    audio.play();
  });

  volumeSlider.addEventListener('input', () => {
    updateVolume(volumeSlider.value);
  });

  function updateVolume(volume) {
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }

  function updateHorn(hornType){
    switch(hornType) {
      case 'air-horn':
        image.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        image.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        image.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        image.src = 'assets/images/no-image.png';
    }
  }
}