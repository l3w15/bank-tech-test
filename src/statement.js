function Statement() {
  this.transactions = [];
};

Statement.prototype = {
  update: function(amount, date, type, balance) {
    this.transactions.push({
      date: date,
      amount: amount,
      type: type,
      balance: balance });
  },

  print: function() {
    this.sortByDate();
    let printString = 'date || credit || debit || balance\n'
    for(var i = 0; i < this.transactions.length; i++) {
      // console.log(this.transactions[i].type === 'credit' : )
      this.transactions[i].type === 'credit' ?
        printString += `${this.transactions[i].date} || ${this.transactions[i].amount} || || ${this.transactions[i].balance}\n`
        : printString += `${this.transactions[i].date} || || ${this.transactions[i].amount} || ${this.transactions[i].balance}\n`
    }
    return printString;
  },

  sortByDate: function() {
    for (var i = 0; i < this.transactions.length; i++) {
      this.transactions[i].jsDate = new Date(this.transactions[i].date.split('/')[2], this.transactions[i].date.split('/')[1] - 1, this.transactions[i].date.split('/')[0]);
    }
    this.transactions = this.transactions.sort(function(a,b) { return b.jsDate - a.jsDate });
  }
}
