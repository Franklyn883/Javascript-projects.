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
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumberGenerator.generateAccountNumber();
        BankAccount.accounts.push(this);
    }
    static getAccountInfo() {
        let accounts = BankAccount.accounts;

        function formatOwnerName(ownerName) {
            return ownerName.replace(/\w\S*/g, (txt) => {
                return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
            });
        }

        for (let account of accounts) {
            let info = `Account Number:${
                account.accountNumber
            }, Name:${formatOwnerName(account.owner)}, Balance:${
                account.getBalance
            }`;
            console.log(info);
        }
    }
    /**
     * @param {number} amount
     */
    set deposit(amount) {
        return (this.balance += amount);
    }
    /**
     * @param {number} amount
     */
    withdraw(amount) {
        if (this.balance - 100 >= amount) {
            return (this.balance -= amount);
        } else {
            return `Your account account balance is ${this.balance}, and is too low to withdraw ${amount}. You must have a minimum of N100.00 in your account`;
        }
    }
    get getBalance() {
        return this.balance.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
        });
    }
    get closeAccount() {
        for (let account in this) {
            if (this.hasOwnProperty(account)) {
                this[account] = null;
            }
        }
    }
}

const user1 = new BankAccount("John doe samuel", 1000000);
const user2 = new BankAccount("Samuel Hanson", 1000000);
const user3 = new BankAccount("James Bond");
console.log(user1);
console.log(user2);
user1.deposit = 400;

console.log(user1.withdraw(54599));
console.log(user1.balance);

console.log(user1.getBalance);
console.log(user1);
console.log(BankAccount.accounts);
BankAccount.getAccountInfo();
