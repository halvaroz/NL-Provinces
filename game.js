'use strict'



let regionsLeft = regionsH.length

let copy = []

let selectedValue =""

let score = 0

let everPlayed = false

let regionsOrdered = []

let allRegions= document.querySelectorAll('.regions');


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }
}

function pickRandomValue(array) {
    let index = Math.random() * array.length |0 ;
    selectedValue = array[index]
    array.splice(index,1)
    document.querySelector('.goal').textContent = selectedValue  
    regionsOrdered.push(selectedValue)
}

function displayScore(){
    let showing = document.getElementsByClassName('score')[0]
    showing.textContent  = `Score : ${score} / ${regionsH.length-copy.length}`
}

function checkAnswer(event){
    let choiceId = this.getAttribute('id')
    let answer = false
    if (indexesH[selectedValue] == choiceId){


        answer = true
    } 

    let rightAnswer = document.getElementById(indexesH[selectedValue])
    rightAnswer.children[0].style.fill = colors[regionsH.length-copy.length-1]

    rightAnswer.classList.add('disabled');

    let regionPosition = regionsH.length-copy.length;
    let div = `.r-n-${regionPosition}`
    div = document.querySelector(div)
    div.textContent = selectedValue;



    if (answer === true){
        score += 1
        div.style.backgroundColor = 'lightgreen'
    } else {
        div.style.backgroundColor = 'pink'
    }
    displayScore();
    if(copy.length >0){
        pickRandomValue(copy)
    } else {
        console.log("here")
        document.querySelector('.goal').textContent = "Jeu terminé !"
        document.querySelector('.data').innerHTML = "<h2>Population des provinces néerlandaises en milliers d'habitants<h2>"
        createD3()
    }

}

for(let i = 0; i<allRegions.length; i++){
    allRegions[i].addEventListener('click',checkAnswer);
};




function newGame(){


    if (everPlayed === true){
        regionsOrdered = []
    let allPaths = document.querySelectorAll('path')
    for(let i = 0; i<allPaths.length; i++){
        allPaths[i].style.fill = '#415f77'
    }
    
    document.querySelector('.data').innerHTML = ''

    document.querySelector('.score').textContent  = ''

    document.querySelector('.goal').textContent =''

    let displayedRegions = document.querySelectorAll('.region-name')
    console.log(displayedRegions)

    for (let i=0; i<displayedRegions.length; i++){
        displayedRegions[i].textContent = ''
    }

    }



    
    for(let i = 0; i<allRegions.length; i++){
        allRegions[i].classList.remove('disabled')
    };

    console.log(everPlayed)
    if (everPlayed === false) {
        everPlayed = true;
    }
    copy = [...regionsH]
    pickRandomValue(copy)

}

document.querySelector('.newgame').addEventListener('click', newGame)