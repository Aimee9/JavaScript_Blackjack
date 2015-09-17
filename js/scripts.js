var card = [];

var deckOfCards = function() {
  var suits = ["hearts", "diamonds", "spades", "clubs"];
  var numbers = ["Ace of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "Jack of ", "Queen of ", "King of " ];
  var x;
  var z;

  for(x in numbers) {
    for(z in suits) {
      card.push(numbers[x] + suits[z]);
    }
  } console.log(card);
  return card.length;
};

var randomCard = function() {
  return card[Math.floor(Math.random() * card.length)];
};
