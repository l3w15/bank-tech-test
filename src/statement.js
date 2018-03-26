function Statement() {
  this.transactions = [];
};

Statement.prototype = {
  update: function(amount, type, balance, manualDate) {
    let date = manualDate ? manualDate : new Date;
    let day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
    let month = (date.getMonth() + 1) < 10 ?  `0${date.getMonth() + 1}` : `${date.getMonth()}`
    let dateString = `${day}/${month}/${date.getYear() + 1900 }`
    this.transactions.push({
      date: date,
      amount: `${amount}.00`,
      type: type,
      balance: `${balance}.00`,
      dateString: dateString });
    this.sortByDate();
  },

  print: function() {
    let printString = 'date || credit || debit || balance\n'
    for(var i = 0; i < this.transactions.length; i++) {
      this.transactions[i].type === 'credit' ?
        printString += `${this.transactions[i].dateString} || ${this.transactions[i].amount} || || ${this.transactions[i].balance}\n`
        : printString += `${this.transactions[i].dateString} || || ${this.transactions[i].amount} || ${this.transactions[i].balance}\n`
    }
    return printString;
  },

  sortByDate: function() {
    this.transactions = this.transactions.sort(function(a,b) {
      return b.date - a.date;
    });
  }
}
