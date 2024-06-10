const cards = [1, 1, 2, 2, 3, 3, 4, 4];

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

function shuffleCards(cards){
    cards.sort(() => Math.random() - 0.5)
}

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



function flipCard(){
    
}

createCards()