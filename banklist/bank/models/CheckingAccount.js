import BankAccount from "./BankAccount";

class CheckingAccount extends BankAccount {
    static accounts = [];
    constructor(owner, initialBalance) {
        super(owner, initialBalance);
        CheckingAccount.accounts.push(this);
    }
}

export default CheckingAccount;
