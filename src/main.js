var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

document.onload = function() {
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards(); // Mix the cards.
  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += `<div class="card" data-card-name="${pic.name}">
      <div class="back" name="${pic.img}"></div>
      <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
    </div>`;
  });

  // Add all the div's to the HTML
  let board = document.querySelector('#memory_board');
  board.innerHTML = html;


  // Bind the click event of each element to a function
  let back = document.querySelectorAll('.back');
  back.forEach(function(ele) {
    ele.addEventListener('click', function(e) {
      ele.setAttribute('class', 'front'); // Could be using "this" instead of "ele"
      ele.nextElementSibling.setAttribute('class', 'back'); // Could be using "this" instead of "ele"
      memoryGame.pickedCards.push(ele); // Saving the card in the array
      
      if (memoryGame.pickedCards.length === 2) {
        setTimeout(function(){

          let firstCard = memoryGame.pickedCards[0].parentNode.getAttribute('data-card-name');
          let secondCard = memoryGame.pickedCards[1].parentNode.getAttribute('data-card-name');

          if (memoryGame.checkIfPair(firstCard, secondCard)) {
            // Updating score
            document.querySelector('#pairs_clicked').innerText = memoryGame.pairsClicked;
            document.querySelector('#pairs_guessed').innerText = memoryGame.pairsGuessed;
            console.log(memoryGame.pairsGuessed);
          } else {
            // Updating score
            document.querySelector('#pairs_clicked').innerText = memoryGame.pairsClicked;
            // Turning the cards clicked
            for (let i = 0; i < memoryGame.pickedCards.length; i++) {
            memoryGame.pickedCards[i].setAttribute('class', 'back');
            memoryGame.pickedCards[i].nextElementSibling.setAttribute('class', 'front');
            }
          }
          memoryGame.pickedCards = []; // Empty the Array and begin again
          if (memoryGame.isFinished()) { // Calling functon to end game
            alert('You Win!!!');
          }
        }, 500);
      }
    })
  })
}();


