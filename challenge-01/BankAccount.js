class AccountNumberGenerator {
    constructor() {
        this.generatedNumbers = new Set(); // Store generated account numbers
    }

    generateAccountNumber() {
        let attempts = 0;
        while (attempts < 1000) {
            // Try up to 1000 times to generate a unique number
            const randomNum = this.generateRandomNumber();
            const accountNumber = this.formatAccountNumber(randomNum);

            if (!this.generatedNumbers.has(accountNumber)) {
                this.generatedNumbers.add(accountNumber);
                return accountNumber;
            }
            attempts++;
        }

        throw new Error("Unable to generate a unique account number."); // Error handling for rare collision scenarios
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 9000000000) + 1000000000; // Generates a random 10-digit number
    }

    formatAccountNumber(number) {
        return String(number);
    }

    get getAccountNumbers() {
        return [this.generatedNumbers];
    }
}

const accountNumberGenerator = new AccountNumberGenerator();

//This handles all the main banking activities
class BankAccount {
    accountNumberGenerator = new AccountNumberGenerator();
    static accounts = [];
    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.balance = initialBalance;
        this.accountNumber = accountNumberGenerator.generateAccountNumber();
        BankAccount.accounts.push(this);
    }
    static formatUserInfo() {
        const formatOwnerName = (ownerName) => {
            return ownerName.replace(/\w\S*/g, (txt) => {
                return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
            });
        };
        const formatAmount = (amount) => {
            return amount.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
            });
        };
        return {formatOwnerName,formatAmount}
    }

    static getAccountInfo() {
        const formatUserInfo = BankAccount.formatUserInfo()
        for (let account of this.accounts) {
            let accountInfo = `\t Account Number:${
                account.accountNumber
            }, Name:${formatUserInfo.formatOwnerName(account.owner)}, Balance:${
                account.getBalance
            }\n`;
            console.log(accountInfo);
        }
    }

    //Get the information of a single user
    getUserInfo(){
        const formatUserInfo = BankAccount.formatUserInfo()
        const userInfo = `\t Account Number:${this.accountNumber} name: ${formatUserInfo.formatOwnerName(this.owner)}, Balance :${this.getBalance} `
        return userInfo
    }
    /**
     * @param {number} amount
     */
    deposit(amount) {
        return (this.balance += amount);
    }
    /**
     * @param {number} amount
     */
    withdraw(amount) {
        if (typeof amount == "number" && amount > 0) {
            if (this.balance >= amount) {
                return (this.balance -= amount);
            } else {
                return `Your account account balance is ${this.balance}, and is too low to withdraw ${amount}.`;
            }
        }
        return `Please enter a valid Amount`;
    }

    transfer(amount, targetAccount) {
        const formatUserInfo = BankAccount.formatUserInfo()
        if (typeof amount == "number" && amount > 0) {
            if (this.balance > amount) {
                this.balance -= amount;
                targetAccount.balance += amount;

                return ` Transfer successful, ${formatUserInfo.formatAmount(amount)} sent to ${formatUserInfo.formatOwnerName(
                    targetAccount.owner
                )} \n Balance : ${this.getBalance}`;
            }
            else{
                return `Insufficient funds`
            }

        }
        return `Please enter a valid Amount`
    }

    get getBalance() {
        const formatUserInfo = BankAccount.formatUserInfo()
        return formatUserInfo.formatAmount(this.balance);
    }
    get closeAccount() {
        for (let account in this) {
            if (this.hasOwnProperty(account)) {
                this[account] = null;
            }
        }
    }
}

export default BankAccount;
