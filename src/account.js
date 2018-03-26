function Account(statementConstructor) {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
  this.statement = new statementConstructor;
}

Account.prototype = {
  deposit: function(amount, date) {
    this.balance += amount;
    this.statement.update(amount, date, 'credit', this.balance);
  },

  withdraw: function(amount, date) {
    this.balance -= amount;
    this.statement.update(amount, date, 'debit', this.balance);
  }
}
