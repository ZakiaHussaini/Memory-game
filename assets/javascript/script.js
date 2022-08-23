const cardArray = [
    {
        name: 'dall',
        img: 'assets/images/dall.PNG'
    },
    {
        name: 'flower',
        img: 'assets/images/flower.PNG'
    },
    {
        name: 'forg',
        img: 'assets/images/forg.PNG'
    },
    {
        name: 'fox',
        img: 'assets/images/fox.PNG'
    } ,
    {
         name: 'hen',
         img: 'assets/images/hen.PNG',
    },
    {
        name: 'horse',
        img: 'assets/images/horse.PNG'
    },
    {
        name: 'dall',
        img: 'assets/images/dall.PNG'
    },
    {
        name: 'flower',
        img: 'assets/images/flower.PNG'
    },
    {
        name: 'forg',
        img: 'assets/images/forg.PNG'
    },
    {
        name: 'fox',
        img: 'assets/images/fox.PNG'
    } ,
    {
         name: 'hen',
         img: 'assets/images/hen.PNG',
    },
    {
        name: 'horse',
        img: 'assets/images/horse.PNG'
    }
]



cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardChosen= [];
let cardChosenIds = [];
let cardWon = [];

function createBoard () {
for(let i = 0; i<cardArray.length; i++){
    const card = document.createElement('img');
    card.setAttribute('src','assets/images/q.PNG');
 
  
    card.setAttribute('data-id',i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
}

}
createBoard();

function checkMatch () {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
    -
    console.log('check for match');
    if(optionOneId == optionTwoId ){
        cards[optionOneId].setAttribute('src','assets/images/q.PNG');
        cards[optionTwoId].setAttribute('src','assets/images/q.PNG');
        alert('you have clicked the same image!')
    }

     if(cardChosen[0] == cardChosen[1]){
        alert('you found a match');
  
        // cards[optionOneId].setAttribute('src','images/white.PNG');
        // cards[optionTwoId].setAttribute('src','images/white.PNG');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);

        cardWon.push(cardChosen);
    } 
    else {
        cards[optionOneId].setAttribute('src', 'assets/images/q.PNG');
        cards[optionTwoId].setAttribute('src','assets/images/q.PNG');
        alert('sorry, try again!');
    }

    resultDisplay.textContent =cardWon.length;
    cardChosen=[];
    cardChosenIds=[];

    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'congratulations you found them all';

    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    console.log(cardChosen);
    console.log(cardChosenIds);
    this.setAttribute('src',cardArray[cardId].img);
if(cardChosen.length === 2){
    setTimeout(checkMatch, 500) ;

}  
}