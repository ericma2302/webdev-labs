/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
var isPressed = window.localStorage.getItem('dyslexic') === 'true'

const toggle = () => {
  console.log(isPressed)
  if(!isPressed) {
    document.querySelector("body").className = 'dyslexia-mode';
    isPressed = true
  }
  else {
    document.querySelector("body").className = '';
    isPressed = false;
  }

  if(isPressed) window.localStorage.setItem('dyslexic', 'true')
  else window.localStorage.setItem('dyslexic', 'false')
};

console.log(isPressed)
if(isPressed) document.querySelector("body").className = 'dyslexia-mode';


document.getElementById('dyslexia-toggle').addEventListener('click', toggle);