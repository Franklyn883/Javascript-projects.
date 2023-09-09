import BankAccount from "./Bank.js";
import SavingsAccount from "./SavingsAccount.js";
const user1 = new BankAccount("John doe samuel", 5000);
const user2 = new BankAccount("Samuel Hanson", 1000000);
const user3 = new BankAccount("James Bond");
user1.deposit = 400;


console.log(BankAccount.accounts);

BankAccount.getAccountInfo()

const user4 = new SavingsAccount("Emeka Raymond", 5000)
const user5 = new SavingsAccount("Smith willy", 20000)
console.log(`\n-----------------------------------SavingsAccount-------------------------------\n`);
SavingsAccount.getAccountInfo()
console.log(user5.withdraw(1500));
console.log(user5.getBalance);
user1.withdraw(3525)
console.log(user1.getBalance);

console.log(user5.getBalance);
console.log(user5.calculateInterest());
console.log(user4.getBalance);
console.log(user4.calculateInterest());

