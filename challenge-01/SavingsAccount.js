import BankAccount from "./Bank.js";
class SavingsAccount extends BankAccount{
    static interestRate = (2/100)
    static savingPeriod = 1
    static accounts = []
    constructor(owner,balance){
        super(owner,balance)
        SavingsAccount.accounts.push(this)

    }
    calculateInterest(){
        const interest = (this.balance*SavingsAccount.savingPeriod)*SavingsAccount.interestRate
        return this.balance +=interest
    }
    
}
export default SavingsAccount;