describe('deckOfCards',function() {
  it("returns 52 cards",function() {
     expect(deckOfCards(card)).to.equal(52);
   })
 });

describe('randomCard',function() {
  it("will pick a random card from the deck",function() {
        expect(randomCard(card[1])).to.equal(card[23]);
  })
});
