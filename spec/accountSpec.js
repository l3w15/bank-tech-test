describe('Account', function() {
  var acc;

  beforeEach(function() {
    acc = new Account(Statement);
    acc.balance = acc.INITIAL_BALANCE;
  });

  it('should be created with a balance', function() {
    expect(acc.balance).toEqual(acc.INITIAL_BALANCE);
  });

  it('should be created with a statement object', function() {
    expect(typeof(acc.statement)).toBe('object');
  });

  describe('the .deposit function', function() {
    it('should credit the  account balance with the deposit amount', function() {
      acc.deposit(500, 21022018);
      expect(acc.balance).toEqual(500);
    });

    it('should update the statement with a credit', function() {
      acc.deposit(500, 21022018);
      expect(acc.statement.creditsAndDebits).toEqual([{
        date: 21022018,
        amount: 500,
        type: 'credit',
        balance: 500
      }])
    });
  });

  describe('the .withdraw function', function() {
    it('should credit the  account balance with the withdrawal amount', function() {
      acc.withdraw(500, 22022018);
      expect(acc.balance).toEqual(-500);
    });

    it('should update the statement with a debit', function() {
      acc.withdraw(500, 21022018);
      expect(acc.statement.creditsAndDebits).toEqual([{
        date: 21022018,
        amount: 500,
        type: 'debit',
        balance: -500
      }]);
    });
  });


});
