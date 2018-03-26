describe('Account', () => {
  let acc;

  beforeEach(() => {
    acc = new Account(Statement);
    acc.balance = acc.INITIAL_BALANCE;
  });

  it('should be created with a balance', () => {
    expect(acc.balance).toEqual(acc.INITIAL_BALANCE);
  });

  it('should be created with a statement object', () => {
    expect(typeof (acc.statement)).toBe('object');
  });

  describe('the .deposit function', () => {
    it('should credit the  account balance with the deposit amount', () => {
      acc.deposit(500);
      expect(acc.balance).toEqual(500);
    });

    it('won\'t credit a negative amount', () => {
      acc.deposit(500);
      acc.deposit(-200);
      expect(acc.balance).toEqual(500);
    });

    it('should update the statement with a credit', () => {
      spyOn(acc, 'transact');
      acc.deposit(500);
      expect(acc.transact).toHaveBeenCalledWith(500, 'credit');
    });
  });

  describe('the .withdraw function', () => {
    beforeEach(() => {
      acc.deposit(1500);
    });

    it('should debit the account balance by the withdrawal amount', () => {
      acc.withdraw(500);
      expect(acc.balance).toEqual(1000);
    });

    it('won\'t debit a negative amount', () => {
      acc.withdraw(-200);
      expect(acc.balance).toEqual(1500);
    });

    it('won\'t allow a withdrawal to make the account overdrawn', () => {
      acc.withdraw(2000);
      expect(acc.balance).toEqual(1500);
    });

    it('should update the statement with a debit', () => {
      spyOn(acc, 'transact');
      acc.withdraw(500);
      expect(acc.transact).toHaveBeenCalledWith(500, 'debit');
    });
  });

  describe('the .transact function', () => {
    it('credits a credit', () => {
      acc.transact(500, 'credit');
      expect(acc.balance).toEqual(500);
    });

    it('debits a debit', () => {
      acc.deposit(500);
      acc.transact(500, 'debit');
      expect(acc.balance).toEqual(0);
    });

    it('should call the statement update with the correct details', () => {
      spyOn(acc.statement, 'update');
      acc.deposit(500);
      expect(acc.statement.update).toHaveBeenCalledWith(500, 'credit', acc.balance);
    });
  });

  describe('the .isPositive function', () => {
    it('returns false for a negative amount', () => {
      expect(acc.isPositive(-500)).toEqual(false);
    });

    it('returns true for a positive amount', () => {
      expect(acc.isPositive(500)).toEqual(true);
    });
  });

  describe('the .balanceCheck function', () => {
    it('returns false if withdrawal would make the account overdrawn', () => {
      expect(acc.balanceCheck(500)).toEqual(false);
    });
  });
});
