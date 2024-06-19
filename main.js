/**
 * @type HTMLButtonElement
 */
const btn = document.querySelector('.btn');

function downloadFile() {
  const a = document.createElement('a');
  a.setAttribute('href', 'Wasted Edit Audio.MP3');
  a.setAttribute('download', 'Wasted Edit Audio.MP3');
  a.click();
  document.body.appendChild(a);
  document.body.removeChild(a);
  btn.style.backgroundColor = 'black';
  btn.style.color = 'red';

  /**
   * @type HTMLAudioElement
   */
  const wastedAudio = document.getElementById('wasted-audio');
  if (wastedAudio.paused) {
    wastedAudio.play();
  } else {
    wastedAudio.pause();
  };
};

btn.addEventListener('click', downloadFile);