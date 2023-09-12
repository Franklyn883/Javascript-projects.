import BankAccount from "./Bank.js";
import SavingsAccount from "./SavingsAccount.js";
import CheckingAccount from "./CheckingAccount.js";
const user1 = new BankAccount("John doe samuel", 5000);
const user2 = new BankAccount("Samuel Hanson", 1000000);
const user3 = new BankAccount("James Bond");
user1.deposit = 400;


console.log(BankAccount.accounts);

BankAccount.getAccountInfo()

const user4 = new SavingsAccount("Emeka Raymond", 5000)
const user5 = new SavingsAccount("Smith willy", 20000)
console.log(`\n-----------------------------------SavingsAccount-------------------------------\n`);


console.log(user5.showInterest());
console.log(user5.withdraw(344));
console.log(user5.getBalance);

console.log(`------------------------------------------------Checking account-------------------\n`);
const user6 = new CheckingAccount("Thompson zedd", 3000)
const user7 = new CheckingAccount("hansan jude", 1000)
console.log(user6.withdraw(1000));

console.log(user6.getBalance);
CheckingAccount.getAccountInfo()
console.log(user6.transfer(1000,user7));
console.log(user7.getBalance);
