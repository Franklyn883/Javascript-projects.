import Bank from "./bank/models/Bank";
import BankAccount from "./bank/models/BankAccount";
import SavingsAccount from "./bank/models/SavingsAccount";
import CheckingAccount from "./bank/models/CheckingAccount";
import ModalController from "./root/controllers/uiController";
import User from "./users/models/Users";

ModalController.init()

const myBank = new Bank()
const newUser = new User("John Smith","secretPassword")
console.log(newUser);
const account1 = myBank.createAccount("Savings","John smith",2000)
const account2 = myBank.createAccount("Current", "samuel benson", 5000)
myBank.transfer(account2,account1,3000)

console.log(myBank.getAccountInfo(account1));
console.log(myBank.accounts);