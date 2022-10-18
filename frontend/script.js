console.log('haha')

const Card = ({ title, sub, text }, index) => {
    return `
        <div class="card">
            <div class="index">${index}</div>
            <h2 class="title">${title}</h2>
            <h4 class="sub">${sub}</h4>
            <p class="text">${text}</p>
            <button class="details">details</button>
        </div>
    `
}
 
const cardContainer = document.querySelector('.card-container')

const { cards } = beers
const BeerCardElement = cards.map((card, i) => Card(card, i))

cardContainer.innerHTML = BeerCardElement.join('')