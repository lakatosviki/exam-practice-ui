console.log('haha')

const Card = () => {
    return `
        <div>
            <div>${index}</div>
            <h2>${title}</h2>
            <div>line</div>
            <h4>${sub}</h4>
            <p>${text}</p>
            <button>details</button>
        </div>
    `
}
 
const cardContainer = document.querySelector('.card-container')

const { cards } = beers
const BeerCardElement = cards.map((card, i) => Card(card, i))

cardContainer.innerHTML = BeerCardElement.join('')