describe('Statement', function() {

  beforeEach(function() {
    statement = new Statement;
  });

  it('is created with a transactions Array', function() {
    expect(statement.transactions).toEqual([]);
  });

  describe('the .update function', function() {
    it('updates credits and debits', function() {
      statement.update(500, '01/02/2018', 'credit', 2000);
      expect(statement.transactions).toContain({
        date: '01/02/2018',
        amount: 500,
        type: 'credit',
        balance: 2000
      })
    })
  });

  describe('the .print function', function() {
    it('prints the current statement', function() {
      statement.update(2000, '01/02/2018', 'credit', 2000);
      statement.update(500, '04/02/2018', 'debit', 1500);
      expect(statement.print()).toEqual("date || credit || debit || balance\n04/02/2018 || || 500 || 1500\n01/02/2018 || 2000 || || 2000\n")
    });
  });

  describe('the .sortByDate function', function() {
    it('orders the transactions array by date', function() {
      statement.update(500, '01/02/2018', 'credit', 2000);
      statement.update(500, '04/02/2018', 'debit', 1500);
      console.log(statement.sortByDate);
      statement.sortByDate();
      expect(statement.transactions[0].date).toEqual('04/02/2018');
    });
  });
});
