function Account(statementConstructor) {
  this.INITIAL_BALANCE = 0;
  this.MINIMUM_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
  this.statement = new statementConstructor;
  this.date;
}

Account.prototype = {
  deposit: function(amount) {
    if (this.isPositive(amount)) {
      this.transact(amount, 'credit');
    }
  },

  withdraw: function(amount) {
    if (this.isPositive(amount) && this.balanceCheck(amount)) {
      this.transact(amount, 'debit');
    }
  },

  transact: function(amount, transactionType) {
    transactionType === 'credit' ? this.balance += amount : this.balance -= amount;
    this.statement.update(amount, transactionType, this.balance);
  },

  isPositive: function(amount) {
    return amount > 0 ? true : false;
  },

  balanceCheck: function(amount) {
    return (this.balance - amount) > this.MINIMUM_BALANCE ? true : false;
  }
}
