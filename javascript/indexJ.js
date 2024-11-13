let div = document.querySelector('#adding-card-id');

let originalcard = document.querySelector('#needed-card');

let newCard = document.createElement('div');
newCard.setAttribute("class","col p-4");

newCard.innerHTML = originalcard;

div.appendChild(newCard);

