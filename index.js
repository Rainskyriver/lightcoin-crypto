// let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction {

  get value() {
    if (this.account.balance < this.amount) {
      console.log `Transaction aborted, not enough money to withdraw`;
      return 0;
    } else {
      return -(this.amount);
    }
  }


}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
    this.balance = 0;
  }


  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account("john-cleese");

// t1 = new Withdrawal(50.25, myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(500, myAccount);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Balance:', myAccount.balance);
