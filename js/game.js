Element.prototype.Game = function(){

  var game = this,
      suits = ["heart","heart","heart","heart","diamond","diamond","diamond","diamond","club","club","club","club","spade","spade","spade","spade"],
      cardsOnTable = [],
      pairs = 0;

  // Create a shuffle function
  this.shuffle = function(array) {

    for (var i = suits.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    return array; // returns shuffled length of cards to the same array

  };

  // Creates a card, front, back and suit div while the suits array is greater than zero
  this.setCards = function(){

    // while the array length (suits) is more than zero
    while (suits.length>0) {
      // create cards and append to table
      var table = document.getElementById('table');
      var card = document.createElement('div');
      card.classList.add('card');
      table.appendChild(card);

      // create the front of the card (to hold suit)
      var front = document.createElement('div');
      front.classList.add('front');

      // create a suit div
      var suit = document.createElement('div');

      // create var that stores last item in the suits array
      var suitAssign = suits[suits.length-1];

      // assign this as suits class
      suit.classList.add(suitAssign);

      // create the back of the card (to hold img)
      var back = document.createElement('div');
      back.classList.add('back');
      back.dataset.tag = suitAssign;

      // append the front and back to the card, append the suit to the front;
      card.appendChild(back);
      card.appendChild(front);
      front.appendChild(suit);

      // then reduce array by last item added to the div above
      suits.pop();

      // display the back of the card ready for gameplay
      back.style.visiblity = 'visible';

    };

    // checks that the array is reduced
    console.log(suits.length);

  };

  // Stores the two clicks, compares the suits and if no match resets display to the back of the card
  this.onClick = function(ev) {

    // store event target
    var target = ev.target;
    var c = target.classList

    // set target (ie card) z-index to -10 to show suit
    if(c.contains('back')==true){
      target.classList.add('flipped');
    }

    // push card to cardsOnTable array
    cardsOnTable.push(target);

    // create var for the last two cards clicked
    var lastClicked = cardsOnTable[cardsOnTable.length-1];
    var firstClicked = cardsOnTable[0];

    console.log(firstClicked);
    // compare the two cards in cardsOnTable array

    // if they match add tally to pairs counter
    if(cardsOnTable.length>1 && lastClicked.dataset.tag==firstClicked.dataset.tag){
      pairs++;
    };

    // if they don't match reset their zIndex to show back of card and empty the cardsOnTable array
    setTimeout(function(){
      if(lastClicked.dataset.tag!=firstClicked.dataset.tag){
        console.log('no match');
        firstClicked.classList.remove('flipped');
        lastClicked.classList.remove('flipped');
        cardsOnTable.length = 0;
      }
      else {
        cardsOnTable.length = 0;
      }
    },1000);

    // if all cards are paired (8 pairs) then you are a rock lobster
    if (pairs===8){
      document.getElementById('game_name').innerHTML = "YOU ROCK LOBSTER!";
    };

    // *** Check cardsOnTable and pairs*** //
    console.log(cardsOnTable.length);
    console.log('pairs tally '+pairs);
  };

  // initializes the game
  this.init = function(){

    // Call shuffle function to suits array
    this.shuffle(suits);

    // *** Check that the array is shuffled ***
    console.log(this.shuffle(suits));

    // Call setCards Function
    this.setCards();

    // add event listener and call onClick function
    game.addEventListener("click",this.onClick);

  };

  // Call init function
  this.init();

};
