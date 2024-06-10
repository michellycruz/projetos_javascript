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
}

createCards()