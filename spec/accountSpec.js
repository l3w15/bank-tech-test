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
      acc.deposit(500);
      expect(acc.balance).toEqual(500);
    });

    it('should update the statement with a credit', function() {
      spyOn(acc, 'transact');
      acc.deposit(500);
      expect(acc.transact).toHaveBeenCalledWith(500, 'credit');
    });
  });

  describe('the .withdraw function', function() {
    it('should credit the  account balance with the withdrawal amount', function() {
      acc.withdraw(500);
      expect(acc.balance).toEqual(-500);
    });

    it('should update the statement with a debit', function() {
      spyOn(acc, 'transact');
      acc.withdraw(500);
      expect(acc.transact).toHaveBeenCalledWith(500, 'debit');
    });
  });

  describe('the .transact function', function() {
    it('should call the statement update with the correct details', function() {
      spyOn(acc.statement, 'update');
      acc.deposit(500);
      expect(acc.statement.update).toHaveBeenCalledWith(500, 'credit', acc.balance);
    });
  });
});
