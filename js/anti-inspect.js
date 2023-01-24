// This simple script fills the network tab with empty requests causing the page to crash if the user tries opening the inspect element tools.
// I wouldnt recommend using this during development unless you want to make it impossible to debug.
var enabled = true

// Set delay to ms
function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
}
//Main script
while(enabled == true) {
    await delay(10);
    fetch('https://hexahigh.github.io/cdn/other/main.mp3')
    await delay(10);
    fetch('https://hexahigh.github.io/cdn/other/main.png')
    await delay(10);
    fetch('https://hexahigh.github.io/cdn/other/main.mp4')
}