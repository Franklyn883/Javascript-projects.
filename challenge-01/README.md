## Challenge 1: Simple Banking System & Account Inheritance

### Overview

This challenge involves the creation of a simple banking system with account creation, deposits, withdrawals, account closure, and account inheritance. 

### Folder Structure

```
/
|-- Challenge-01-02/
|   |-- README.md (This File)
|   |-- Bank.js
|   |-- SavingsAccount.js
|   |-- CheckingAccount.js
|   |-- main.js
```

### Task Details

#### Challenge 1: Simple Banking System

- **Account Creation**: Users should be able to create a new bank account with an initial balance.
- **Deposit**: Users should be able to deposit money into their account.
- **Withdrawal**: Users should be able to withdraw money from their account, but only if they have sufficient funds.
- **Account Information**: Users should be able to check their account balance.
- **Account Closure**: Users should be able to close their account.

#### Challenge 1b: Account Inheritance

- **Savings Account**: A savings account earns 2% interest on the balance every month.
- **Checking Account**: A checking account doesn't earn interest but has no withdrawal limits.

### Usage

1. `Bank.js`: Contains the class definition for the `Bank` that manages the bank accounts.

2. `SavingsAccount.js`: Contains the class definition for the `SavingsAccount` that inherits from the `BankAccount`.

3. `CheckingAccount.js`: Contains the class definition for the `CheckingAccount` that inherits from the `BankAccount`.

4. `main.js`: Contains example usage and scenarios.

### Example Usage

```javascript
const mySavings = new SavingsAccount('Jane Doe', 2000);
mySavings.calculateInterest(); // Calculates and adds interest
mySavings.withdraw(300); // Withdraws 300

const myChecking = new CheckingAccount('Jim Doe', 1500);
myChecking.withdraw(600); // Withdraws 600

console.log(mySavings.getAccountInfo()); // Outputs: Account Number: 123457, Name: Jane Doe, Balance: 1724
console.log(myChecking.getAccountInfo()); // Outputs: Account Number: 123458, Name: Jim Doe, Balance: 900
```
