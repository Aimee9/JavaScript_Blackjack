var deck = ["Ace of hearts", "Ace of diamonds", "Ace of spades", "Ace of clubs", "2 of hearts", "2 of diamonds", "2 of spades", "2 of clubs", "3 of hearts", "3 of diamonds", "3 of spades", "3 of clubs", "4 of hearts", "4 of diamonds", "4 of spades", "4 of clubs", "5 of hearts", "5 of diamonds", "5 of spades", "5 of clubs", "6 of hearts", "6 of diamonds", "6 of spades", "6 of clubs", "7 of hearts", "7 of diamonds", "7 of spades", "7 of clubs", "8 of hearts", "8 of diamonds", "8 of spades", "8 of clubs", "9 of hearts", "9 of diamonds", "9 of spades", "9 of clubs", "10 of hearts", "10 of diamonds", "10 of spades", "10 of clubs", "Jack of hearts", "Jack of diamonds", "Jack of spades", "Jack of clubs", "Queen of hearts", "Queen of diamonds", "Queen of spades", "Queen of clubs", "King of hearts", "King of diamonds", "King of spades", "King of clubs"];
var value = [1, 1, 1, 1, 2 ,2 ,2 , 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

var randomCard = function() {
  var theIndex = Math.floor(Math.random() * deck.length);
  return deck[theIndex];
};

var play1 = function() {
  var play1 = [];
  play1.push(randomCard());
  return play1;
};

var play2 = function() {
  var play2 = [];
  play2.push(randomCard());
  return play2;
};


var addValue = function(){
  var arrayWithValue = [];
  for (var i = 0; i <= deck.length; i ++){
    var card = [deck[i], value[i]];
    arrayWithValue.push(card);
  }
  console.log(arrayWithValue)
  return arrayWithValue;
};

// var deckOfCards = function() {
//   var deck = ["Ace of hearts", "Ace of diamonds", "Ace of spades", "Ace of clubs", "2 of hearts", "2 of diamonds", "2 of spades", "2 of clubs", "3 of hearts", "3 of diamonds", "3 of spades", "3 of clubs", "4 of hearts", "4 of diamonds", "4 of spades", "4 of clubs", "5 of hearts", "5 of diamonds", "5 of spades", "5 of clubs", "6 of hearts", "6 of diamonds", "6 of spades", "6 of clubs", "7 of hearts", "7 of diamonds", "7 of spades", "7 of clubs", "8 of hearts", "8 of diamonds", "8 of spades", "8 of clubs", "9 of hearts", "9 of diamonds", "9 of spades", "9 of clubs", "10 of hearts", "10 of diamonds", "10 of spades", "10 of clubs", "Jack of hearts", "Jack of diamonds", "Jack of spades", "Jack of clubs", "Queen of hearts", "Queen of diamonds", "Queen of spades", "Queen of clubs", "King of hearts", "King of diamonds", "King of spades", "King of clubs"];
//   var value = [1, 1, 1, 1, 2 ,2 ,2 , 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
//   var x;
//
//   for(x in name) {
//     deck.push(name[x] + value[x]);
//   }
//   return deck.length;
// };
