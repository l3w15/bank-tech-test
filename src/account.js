function Account() {
  this.INITIAL_BALANCE = 0;
  this.balance = this.INITIAL_BALANCE;
}

Account.prototype = {
  deposit: function(amount) {
    this.balance += amount;
  },


}
