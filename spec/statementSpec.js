describe('Statement', function() {

  beforeEach(function() {
    statement = new Statement;
  });

  it('is created with a transactions Array', function() {
    expect(statement.transactions).toEqual([]);
  });

  describe('the .update function', function() {
    it('updates credits and debits', function() {
      statement.update(500, 'credit', 2000);
      expect(statement.transactions[0].amount).toEqual('500.00');
      expect(statement.transactions[0].type).toEqual('credit');
    })
  });

  describe('the .print function', function() {
    it('prints the current statement', function() {
      statement.update(2000, 'credit', 2000, new Date('2018-02-01'));
      statement.update(500, 'debit', 1500, new Date('2018-03-20'));
      expect(statement.print()).toEqual(
        "date || credit || debit || balance\n20/03/2018 || || 500.00 || 1500.00\n01/02/2018 || 2000.00 || || 2000.00\n")
    });
  });

  describe('the .sortByDate function', function() {
    it('orders the transactions array by date', function() {
      statement.update(500, 'credit', 2000, new Date('2018-02-01'));
      statement.update(500, 'debit', 1500, new Date('2018-04-20'));
      statement.sortByDate();
      expect(statement.transactions[0].dateString).toEqual('20/04/2018');
    });
  });
});
