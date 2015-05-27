describe("getPrimes", function() {
  it("creates a list of numbers", function() {
    expect(getPrimes(10)).to.eql([2,3,5,7]);
  });
});
