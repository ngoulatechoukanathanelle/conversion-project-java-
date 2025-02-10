


function inizio(){
    console.log("caollegamento riuscito");
}

function cambia(){
    //verifica se il contenuto dell'elemnto è 0
    if (parseInt(this.textContent) === 0)
        this.textContent = 1; // Se sì, imposta il contenuto a 1
    else
        this.textContent = 0; // Altrimenti, imposta il contenuto a 0
}



document.addEventListener("DOMContentLoaded",inizio);
document.getElementById("d1").addEventListener("click", cambia);
document.getElementById("d2").addEventListener("click", cambia);
document.getElementById("d3").addEventListener("click", cambia);
document.getElementById("d4").addEventListener("click", cambia);