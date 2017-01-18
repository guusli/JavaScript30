document.addEventListener('keydown', function(e) {
  var keyCode = e.keyCode;
  var audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  var keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

  if(!audio) return null;

  audio.currentTime = 0;
  audio.play();
  keyElement.classList.add('playing');
});

var keys = document.querySelectorAll('.key');

function removeTransition(e) {
  if(e.propertyName !== 'transform') return null;
  e.target.classList.remove('playing');
}

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition)
});
