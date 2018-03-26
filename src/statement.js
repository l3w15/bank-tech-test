function Statement() {
  this.transactions = [];
}

Statement.prototype = {
  update(amount, type, balance, manualDate) {
    const date = manualDate || new Date();
    const dateString = this.getDateString(date);
    this.transactions.push({
      date,
      amount: `${amount}.00`,
      type,
      balance: `${balance}.00`,
      dateString,
    });
    this.sortByDate();
  },

  print() {
    let printString = 'date || credit || debit || balance\n';
    for (let i = 0; i < this.transactions.length; i += 1) {
      this.transactions[i].type === 'credit' ?
        printString += `${this.transactions[i].dateString} || ${this.transactions[i].amount} || || ${this.transactions[i].balance}\n`
        : printString += `${this.transactions[i].dateString} || || ${this.transactions[i].amount} || ${this.transactions[i].balance}\n`;
    }
    return printString;
  },

  sortByDate() {
    this.transactions = this.transactions.sort((a, b) => b.date - a.date);
  },

  getDateString(date) {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth()}`;
    return `${day}/${month}/${date.getYear() + 1900}`;
  },
};
