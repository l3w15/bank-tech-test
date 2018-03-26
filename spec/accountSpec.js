describe("Account", function() {
  var acc;

  beforeEach(function() {
    acc = new Account();
    acc.balance = acc.INITIAL_BALANCE;
  });

  it('should be created with a balance', function() {
    expect(acc.balance).toEqual(acc.INITIAL_BALANCE);
  });

  describe('the .deposit function', function() {
    it('should credit the  account balance with the deposit amount', function() {
      acc.deposit(500);
      expect(acc.balance).toEqual(500);
    });
  });

  describe('the .withdraw function', function() {
    it('should credit the  account balance with the withdrawal amount', function() {
      acc.withdraw(500);
      expect(acc.balance).toEqual(-500);
    });
  });
});
