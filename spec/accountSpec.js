describe("Account", function() {
  var acc;

  beforeEach(function() {
    acc = new Account();
  });

  it('should be created with a balance', function(){
    expect(acc.balance).toEqual(0);
  });
});
