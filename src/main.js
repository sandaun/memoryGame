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
      console.log('click', this);
    })
  })
}();


