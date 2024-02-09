// Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta (se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe.

// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const playButton = document.querySelector("#play-button");

playButton.addEventListener("click", play);



function play() {
    
    const gridElement = document.querySelector("#grid");

    let cellNumber;

    const selectElement = document.querySelector("#difficulty");


    if (selectElement.value == "easy") {
        cellNumber = 100;
    } else if (selectElement.value == "medium") {
        cellNumber = 81;
    } else {
        cellNumber = 49;
    }
    
    // griglia in base alla difficolta
    gridElement.className = selectElement.value;
    
    // reset griglia
    gridElement.innerHTML = "";


    const bombs = getRandomNumbersArray(16, cellNumber);
    console.log (bombs);


    for (let i = 0; i < cellNumber; i++) {

        const newElement = document.createElement("div");

        newElement.classList.add("cell");

        newElement.classList.add ("ratio", "ratio-1x1");

        newElement.innerHTML = i + 1;

        gridElement.append (newElement);

        newElement.addEventListener("click", function() {

            console.log(this.innerText);

            if (bombs.includes(Number(this.innerText))) {

                console.log("bomba");
                this.classList.add("bomb");

            }

            this.classList.add("clicked");

        });
    }
}



// Funzione che genera un numero random
function generateRandomNumber(max) {
    
    const randomNumber = Math.floor(Math.random() * max + 1);
    
    // restituisco il numero generato
    return randomNumber;
}


function getRandomNumbersArray (quantity, highestNumber) {

    const numbersArray = [];

    let iterazioni = 0;

    do {
        const newNumber = generateRandomNumber(highestNumber);

        if ( ! numbersArray.includes(newNumber)) {

            numbersArray.push(newNumber);

        }

        iterazioni++;

    } while (numbersArray.length < quantity && iterazioni < 100);

    return numbersArray;
}