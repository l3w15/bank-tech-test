function Statement() {
  this.creditsAndDebits = [];
};

Statement.prototype = {
  update: function(date, amount, type, balance) {
    this.creditsAndDebits.push({
      date: date,
      amount: amount,
      type: type,
      balance: balance });
  }
}
