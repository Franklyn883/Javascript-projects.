import BankAccount from "./Bank.js";
class SavingsAccount extends BankAccount{
    static interestRate = 0.02
    static accounts = []
    constructor(owner,initialBalance){
        super(owner,initialBalance)
        SavingsAccount.accounts.push(this)

    }
    showInterest(){
        const formatUserInfo = SavingsAccount.formatUserInfo()
        const interest = (this.balance)*SavingsAccount.interestRate
        return formatUserInfo.formatAmount(interest)
    }
    calculateInterest(){
        
        this.balance += this.showInterest()
        return this.getBalance
    }
    withdraw(){
        return `Action not allowed! You have to give a two weeks notice`
    }
    
}
export default SavingsAccount;