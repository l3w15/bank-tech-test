function Statement() {
  this.creditsAndDebits = [];
};

Statement.prototype = {
  update: function(amount, date, type, balance) {
    this.creditsAndDebits.push({
      date: date,
      amount: amount,
      type: type,
      balance: balance });
  }
}
