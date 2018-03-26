function Account(statementConstructor) {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
  this.statement = new statementConstructor;
}

Account.prototype = {
  deposit: function(amount) {
    this.balance += amount;
  },

  withdraw: function(amount) {
    this.balance -= amount;
  }
}
