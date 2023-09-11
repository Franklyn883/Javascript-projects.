import BankAccount from "./bank/models/BankAccount.js";
import SavingsAccount from "./bank/models/SavingsAccount.js";
import CheckingAccount from "./bank/models/CheckingAccount.js";
import Bank from "./bank/models/Bank.js";
import User from "./users/models/Users.js";
import ModalController from "./uiController.js";


const user1 = new BankAccount("John doe samuel", 5000);
const user2 = new BankAccount("Samuel Hanson", 1000000);
const user3 = new BankAccount("James Bond");
const modalController = new ModalController
//initialize classes
ModalController.init()
user1.deposit = 400;

console.log(BankAccount.accounts);

BankAccount.getAccountInfo();
const user4 = new SavingsAccount("Emeka Raymond", 5000);
const user5 = new SavingsAccount("Smith willy", 20000);
console.log(
    `\n-----------------------------------SavingsAccount-------------------------------\n`
);

console.log(user5.showInterest());
console.log(user5.withdraw(344));
console.log(user5.getBalance);

console.log(
    `------------------------------------------------Checking account-------------------\n`
);
const user6 = new CheckingAccount("Thompson zedd", 3000);
const user7 = new CheckingAccount("hansan jude", 1000);
console.log(user6.withdraw(1000));

console.log(user6.getBalance);
console.log(user6.transfer(1000, user7));
console.log(user7.getBalance);

console.log(
    `\n \n--------------------------Bank-------------------------------------------------------------\n\n`
);

const myBank = new Bank();
const account1 = myBank.createAccount("Savings", "Samuel Grey", 2000);
const account2 = myBank.createAccount("Checking", "Reginae Daniels", 5000);
const account3 = myBank.createAccount("Checking", "Jammie Fox", 3300);
const account4 = myBank.createAccount("Savings", "Dave champel", 4000);
myBank.deposit(account1, 3000);
myBank.withdraw(account2, 2000);
console.log(myBank.getAccountInfo(account1));
console.log(myBank.getAccountInfo(account2));
console.log(myBank.accounts);
console.log(myBank.getNumberOfCustomer());
console.log(myBank.closeAccount(account4));

console.log(myBank.transfer(account1, account2, 4000));
console.log(myBank.getBalance(account1));
console.log(myBank.accounts);

const newUser = new User("John")
newUser.validateEmail="John@gmail.com"
newUser.password="John3301"

console.log(newUser);