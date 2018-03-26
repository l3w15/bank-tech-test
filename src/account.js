function Account(statementConstructor) {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
  this.statement = new statementConstructor;
  this.date;
}

Account.prototype = {
  deposit: function(amount) {
    this.transact(amount, 'credit');
  },

  withdraw: function(amount) {
    this.transact(amount, 'debit');
  },

  transact: function(amount, transactionType) {
    transactionType === 'credit' ? this.balance += amount : this.balance -= amount;
    this.statement.update(amount, transactionType, this.balance);
  }
}
