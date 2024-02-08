// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità.


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
    
    gridElement.className = selectElement.value;
    
    gridElement.innerHTML = "";

    // gridElement.style.display = "flex";


    for (let i = 0; i < cellNumber; i++) {

        const newElement = document.createElement("div");

        newElement.classList.add("cell");

        newElement.classList.add ("ratio", "ratio-1x1");

        newElement.innerHTML = i + 1;

        gridElement.append (newElement);

        newElement.addEventListener("click", clickManager);
    }
}



function clickManager() {

    console.log(this.innerText);

    this.classList.add("clicked");

}



// playButton.addEventListener("click",
//     function() {

//         for (let i = 1; i <= 100; i++) {
        
//             // Griglia
//             const newElement = document.createElement("div");
//             newElement.innerText = i;
//             newElement.classList.add ("square");
//             newElement.classList.add ("ratio", "ratio-1x1");
            
//             gridElement.append(newElement);
            

//             // Colore
//             newElement.addEventListener ("click", 
//                 function () {
                
//                     this.classList.add ("active");
                
//                     console.log (i);
//                 }
//             )
//         } 
//     }
// )
    