// This simple script fills the network tab with empty requests causing the page to crash if the user tries opening the inspect element tools.
// I wouldnt recommend using this during development unless you want to make it impossible to debug.
var enabled = true

// Set delay to ms
function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
}
//Spam network tab script
async function spamnettab() {
  while(enabled == true) {
      await delay(10);
      fetch('https://hexahigh.github.io/cdn/other/main.mp3')
      await delay(10);
      fetch('https://hexahigh.github.io/cdn/other/main.png')
      await delay(10);
      fetch('https://hexahigh.github.io/cdn/other/main.mp4')
  }
}

// Attempt to clear console
async function clearconsole() {
    while(true) {
        clear();
        console.clear();
        await delay(50)
    }
}
// Disable keys
document.onkeydown = function (e) {
  // disable f12
  if (event.keyCode == 123) {
      return false;
  }
  // disable ctrl+shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+C
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+j
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  // disable ctrl+shift+U
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}
