
//matriz com pares representando as cartas
const cards = [1, 1, 2, 2, 3, 3, 4, 4];

//objeto para armazenar as imagens correspondentes para cada carta
async function generateImagePairs() {
    const imagePairs = {}
    for(let i = 0; i < cards.length; i++){
        if(!imagePairs[cards[i]]){
            const id = Math.floor(Math.random() * 1000) + 1;
            const url = `https://picsum.photos/id/${id}/300/400`;
            imagePairs[cards[i]] = [url, url];
        }
    }
    return imagePairs;
}


// embaralha a matriz de cartas
function shuffleCards(cards){
    cards.sort(() => Math.random() - 0.5)
}

let flippedCards = 0
let firstCard, secondCard;
let attempts = 0


//seleciona as cartas e atribui um número da matriz a cada carta
async function createCards(){
    const imagePairs = await generateImagePairs()
    shuffleCards(cards);
    const cardList = document.querySelector(".container")
    for(let i = 0; i < cards.length; i++){

        const card = document.createElement("div")
        const cardBack = document.createElement("div")
        const cardFront = document.createElement("div")

        card.classList.add("card")
        cardBack.classList.add("back")
        cardFront.classList.add("front")

        cardBack.style.backgroundImage = `url('img/card-back.png')`;

        const cardNumber = cards[i]
        const cardImage = imagePairs[cardNumber].pop();

        cardFront.style.backgroundImage = `url(${cardImage})`

        card.setAttribute("data-card", cardNumber)
        card.appendChild(cardBack)
        card.appendChild(cardFront)
        card.addEventListener("click", flipCard)
        cardList.appendChild(card)
    }
}

//vira a carta clicada
function flipCard(){
    if(flippedCards < 2 && !this.classList.contains("flip")) {
        flippedCards++
        this.classList.add("flip")
        if(flippedCards === 1){
            firstCard = this
        } else {
            secondCard = this
            attempts++
            updateAttempts()
        }
    }
}


//atualiza o número de tentativas
function updateAttempts(){
    const attemptsElement = document.querySelector(".attempts")
    attemptsElement.textContent = `Tentativas: ${attempts}`
}


createCards()