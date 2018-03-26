function Account(statementConstructor) {
  this.INITIAL_BALANCE = 0;
  this.MINIMUM_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
  this.statement = new statementConstructor();
}

Account.prototype = {
  deposit(amount) {
    if (this.isPositive(amount)) {
      this.transact(amount, 'credit');
    }
  },

  withdraw(amount) {
    if (this.isPositive(amount) && this.balanceCheck(amount)) {
      this.transact(amount, 'debit');
    }
  },

  transact(amount, transactionType) {
    transactionType === 'credit' ? this.balance += amount : this.balance -= amount;
    this.statement.update(amount, transactionType, this.balance);
  },

  isPositive(amount) {
    return amount > 0;
  },

  balanceCheck(amount) {
    return (this.balance - amount) > this.MINIMUM_BALANCE;
  },
};
