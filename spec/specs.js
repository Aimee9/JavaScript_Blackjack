// describe('deckOfCards',function() {
//   it("returns 52 cards",function() {
//      expect(deckOfCards(deck)).to.equal(52);
//    })
//  });

describe('randomCard',function() {
  it("will pick a random card from the deck",function() {
      expect(randomCard(deck[23])).to.equal(deck[23]);
  })
});

// describe('hand',function() {
//   it("will give two random cards",function() {
//       expect(hand()).to.equal("Ace of hearts", "King of spades");
//   })
// });

describe('play1',function() {
  it("will give a random card",function() {
      expect(play1()).to.equal(["Ace of hearts"]);
  })
});

describe('play2',function() {
  it("will give a random card",function() {
      expect(play2()).to.equal(["Ace of hearts"]);
  })
});

describe('addValue',function() {
  it("will add the value to a card",function() {
      expect(addValue()[0]).to.eql(["Ace of hearts", 1]);
  })
});
