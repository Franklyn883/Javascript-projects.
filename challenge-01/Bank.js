import SavingsAccount from "./SavingsAccount.js";
import CheckingAccount from "./CheckingAccount.js";

class Bank {
    constructor() {
        this.accounts = [];
    }
    createAccount(type, owner, initialBalance) {
        const account =
            type === "Savings"
                ? new SavingsAccount(owner, initialBalance)
                : new CheckingAccount(owner, initialBalance);

        this.accounts.push(account);
        return account;
    }

    deposit(account, amount) {
        account.deposit(amount);
    }

    withdraw(account, amount) {
        account.withdraw(amount);
    }
    transfer(account, targetAccount, amount) {
        return account.transfer(amount, targetAccount);
    }

    closeAccount(account) {
        const index = this.accounts.indexOf(account);
        if (index !== -1) {
            this.accounts.splice(index, 1);
            return `Account closed successfully `
        }
        
    }

    getBalance(account){
        return account.getBalance
    }
    getAccountInfo(account) {
        return account.getUserInfo();
    }

     getNumberOfCustomer() {
        
        let savingsAccount = 0
        let checkingAccount = 0
       for(let account of this.accounts){
        if(account instanceof SavingsAccount){
           savingsAccount++ 
        }
        else{
            checkingAccount++
        }
       }
       let totalCustomers = checkingAccount + savingsAccount
       return `Saving Accounts:${savingsAccount}\nChecking Accounts:${checkingAccount}\nTotal Accounts:${totalCustomers}`
    }
}
export default Bank;
