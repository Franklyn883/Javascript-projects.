import BankAccount from "./Bank.js";
const user1 = new BankAccount("John doe samuel", 1000000);
const user2 = new BankAccount("Samuel Hanson", 1000000);
const user3 = new BankAccount("James Bond");
user1.deposit = 400;

console.log(user1.getBalance);
console.log(BankAccount.accounts);
BankAccount.getAccountInfo();
