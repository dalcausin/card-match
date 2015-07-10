Element.prototype.Game = function(){

  var game = this,
      suits = ["heart","heart","heart","heart","diamond","diamond","diamond","diamond","club","club","club","club","spade","spade","spade","spade"],
      cardsOnTable = [];

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

  /* Checks the shuffle function is working.
      var test = game.shuffle(suits);
      console.log(test); */

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
      card.appendChild(front);
      card.appendChild(back);
      front.appendChild(suit);

      // then reduce array by last item added to the div above
      suits.pop();

      // display the back of the card ready for gameplay
      back.style.zIndex = '2';

    };

    // checks that the array is reduced
    console.log(suits.length);

  };

  // A forEach loop, using the shuffled suits array to deal cards
  // this.dealCards = function() {
  //
  //   suits.forEach(this.setCards);
  //
  // };

  this.onClick = function(ev) {

    // store event target
    var target = ev.target;

    // set target (ie card) z-index to -10 to show suit
    target.style.zIndex = '-10';

    // push card to cardsOnTable array
    cardsOnTable.push(target);

    // create var for the last two cards clicked
    var lastClicked = cardsOnTable[cardsOnTable.length-1];
    var firstClicked = cardsOnTable[0];

    // compare the two cards in cardsOnTable array
    // if they don't match reset their zIndex to show back of card and empty the cardsOnTable array
    // if they do match, empty the cardsOnTable array
    setTimeout(function(){
      if(lastClicked.dataset.tag!=firstClicked.dataset.tag){
        firstClicked.style.zIndex = '10';
        lastClicked.style.zIndex = '10';
        cardsOnTable.length = 0;
        console.log(cardsOnTable);
      }
      else{
        cardsOnTable.length = 0;
      }
    },2000);

  };

  this.init = function(){

    // apply shuffle function to suits array
    this.shuffle(suits);

    // check that the array is shuffled
    console.log(this.shuffle(suits));

    this.setCards();
    // dealCards function
    // this.dealCards();

    game.addEventListener("click",this.onClick);



    // event listener
    // game.addEventListener("click",
    //
    // function(ev){
    //
    //   var target = ev.target
    //
    //   if(target.className =='back'){
    //     // counter of clickNum
    //     clickNum++;
    //
    //     target.style.zIndex = '-1';
    //
    //     var selected = ev.target.dataset.tag;
    //     cardsShown.push(selected);
    //
    //     console.log(cardsShown);
    //
    //     if(clickNum%2==0){
    //       console.log('clicktwo')
    //       var firstCard = cardsShown[cardsShown.length-2];
    //       var secondCard = cardsShown[cardsShown.length-1];
    //       if (firstCard === secondCard){
    //         console.log(true)
    //       }
    //
    //     }
    //
    //     // if clicks are less than one or modulo is true
    //     // if (clickNum<=1||clickNum%2){
    //     //   // create var that stores the suit value
    //     //   var clickOne = ev.target.dataset.tag;
    //     //   firstClick.push(clickOne);
    //     //   var clickOneValue = firstClick[firstClick.length-1];
    //     //
    //     //   console.log(firstClick);
    //     //   console.log(clickNum);
    //     //   console.log(firstClick[firstClick.length-1]);
    //     //
    //     //   if (clickNum%2==0){
    //     //     console.log(true);
    //     //     var clickTwo = ev.target.dataset.tag;
    //     //     secondClick.push(clickTwo);
    //     //     var clickTwoValue = secondClick[secondClick.length-1];
    //     //
    //     //     console.log(secondClick);
    //     //     console.log(clickNum);
    //     //     console.log(secondClick[secondClick.length-1]);
    //     //   };
    //     // };
    //   };

    // });

    // this.dealCards();

    // check the value of the card matches the second card
    // if match=true then display front of card
    // else display back of card

    // if cards shown array == 0
  };

  this.init();

};
