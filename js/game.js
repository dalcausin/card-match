Element.prototype.Game = function(){

  var game = this,
      numCards = document.getElementsByClassName("card"),
      suits = ["heart","heart","heart","heart","diamond","diamond","diamond","diamond","club","club","club","club","spade","spade","spade","spade"];

  // console.log(numCards);

  // Creates a shuffle function

  this.shuffle = function(array) {

    for (var i = numCards.length - 1; i > 0; i--) {
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

  // Creates a new #wrapper div in #front div with suits (after they are shuffled)

  this.setCards = function(ev){

    var target = ev.target;
    console.log(target);

    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    target.appendChild(wrapper);

    // create a new suit div
    var suit = document.createElement('div');

    // add class name from shuffled suit array above
    suit.classList.add(suits[suits.length-1]);

    // append this to the #wrapper div
    wrapper.appendChild(suit);

    // reduces array by last item added to the div above
    suits.pop();

    // checks that the array is reduced
    console.log(suits);

  };

  // 6. 	If suit matches:
  // 		a. display front of card
  // 	Else
  // 		a. display back of card


  this.init = function(){

    this.shuffle(suits); // apply shuffle function to suits array
    console.log(this.shuffle(suits)); // check that the array is shuffled

    // event listener
    game.addEventListener("click",function(){
      var clickNum; 
    };

    this.setCards

    );

    // check the value of the card matches the second card
    // if match=true then display front of card
    // else display back of card


  };

  this.init();

};
