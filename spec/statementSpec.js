describe('Statement', function() {

  beforeEach(function() {
    statement = new Statement;
  });

  it('is created with a creditsAndDebits Array', function() {
    expect(statement.creditsAndDebits).toEqual([]);
  });

  describe('the .update function', function() {
    it('updates credits and debits', function() {
      statement.update(500, 01022018, 'credit', 2000);
      expect(statement.creditsAndDebits).toEqual([{
        date: 01022018,
        amount: 500,
        type: 'credit',
        balance: 2000
      }])
    })
  });
});
