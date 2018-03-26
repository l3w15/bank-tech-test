describe('Statement', function() {

  beforeEach(function() {
    statement = new Statement;
  });

  it('is created with a creditsAndDebits Array', function() {
    expect(statement.creditsAndDebits).toEqual([]);
  });
});
