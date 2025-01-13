// INPUT

// seleziono i dati inseriti dall'utente
const Km = document.getElementById("campoNumeroKm");
const eta = document.getElementById("fasciaEta");
const bottone = document.querySelector("button");

// seleziono i dati in output
const offerta = document.getElementById("offerta");
const prezzoBiglietto = document.getElementById("prezzo");

// ELABORAZIONE

// genero il biglietto al click sul pulsante
bottone.addEventListener("click", function (event) {
    event.preventDefault();

    // ottengo i valori inseriti dall'utente
    const numerokm = parseFloat(Km.value);
    const fasciaEta = eta.value;

    // definizione prezzo base del biglietto
    let prezzo = numerokm * 0.21;

    // SE l'utente è minorenne 
    if (fasciaEta === "minorenne") {
        // applica uno sconto del 20%
        prezzo *= 0.80;
        console.log("Hai avuto uno sconto del 20%. Prezzo finale: €" + prezzo.toFixed(2));
        offerta.innerText = "Biglietto Scontato del 20%"
        prezzoBiglietto.innerText = prezzo.toFixed(2)+"€";


        // SE l'utente è over 65     
    } else if (fasciaEta === "over65") {
        // applica uno sconto del 40%
        prezzo *= 0.60;
        console.log("Hai avuto uno sconto del 40%. Prezzo finale: €" + prezzo.toFixed(2));
        offerta.innerText = "Biglietto Scontato del 40%"
        prezzoBiglietto.innerText = prezzo.toFixed(2)+"€";

        // altrimenti
    } else {
        // nessuno sconto
        console.log("Non hai diritto a nessun sconto. Prezzo finale: €" + prezzo.toFixed(2));
        offerta.innerText = "Biglietto Standard"
        prezzoBiglietto.innerText = prezzo.toFixed(2)+"€";
    }

});

