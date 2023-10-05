import Bank from "./bank/models/Bank";
import BankAccount from "./bank/models/BankAccount";
import SavingsAccount from "./bank/models/SavingsAccount";
import CheckingAccount from "./bank/models/CheckingAccount";
import ModalController from "./root/controllers/uiController";
import User from "./users/models/Users";
import { ContactInfo,Address } from "./users/models/ContactInfo";


ModalController.init()

const myBank = new Bank()
const account1 = myBank.createAccount("Savings","John smith",2000)
const account2 = myBank.createAccount("Current", "samuel benson", 5000)
myBank.transfer(account2,account1,3000)

console.log(myBank.getAccountInfo(account1));
console.log(myBank.accounts);

const address1 = new Address({postalCode:124, street:"no 9 Ohonre street, Ikpoba-slope", city:"Benin City", state:"Edo State"})
const contact1 = new ContactInfo({address:address1,email:"Franklyngood@gmail.com", phoneNumber:['08163953883', '09065886457']})

const user1 = new User({firstName:"James",lastName:"Samuel",dateOfBirth:"31-03-1994",contactInfo:contact1, sex:'male'})
console.log(user1);

console.log(User.users);
console.log(user1.getFullName);
console.log(user1.getAddress);
console.log(user1.getPhoneNumbers);
