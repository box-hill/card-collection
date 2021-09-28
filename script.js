class Card{
    constructor(title, content){
        this.title = title;
        this.content = content;
    }
    createCard() {
        // create card and its content
        let container = document.querySelector('.container');
        let card = document.createElement('div');
        card.classList.add('card');
        
        let cardTitle = document.createElement('div');
        cardTitle.innerHTML = this.title;
        cardTitle.classList.add('title');
        let cardContent = document.createElement('div');
        cardContent.classList.add('content');
        cardContent.innerHTML = this.content;
        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        container.appendChild(card);

        // create remove button
        let button = document.createElement('button');

        button.addEventListener('click', removeCard);
        button.innerHTML = 'delete';
        button.classList.add('remove-btn');
        card.appendChild(button);

        function removeCard(e){
            e.target.getAttribute('data-index');
            container.removeChild(card);
        }
    };
    


}

let card = new Card('This is a sample card', 'and this is some short content');
card.createCard();

let card2 = new Card('This is another sample card', 'and this is some really really really really really really long content');
card2.createCard();

let addButton = document.querySelector('#add-btn');
addButton.addEventListener('click',()=>{
    let title = prompt('Title: ') || 'Title';
    let content = prompt('Content: ') || 'Content';
    let newCard = new Card(title,content);
    newCard.createCard();
});