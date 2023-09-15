import EmailValidator from "./EmailValidator";
class User {
    static #users = [];

    constructor(username, password, email) {
        (this.username = username),
           
            (this.password = password);
            (this.email = null),
        this.isLoggedIn = false;
        User.#users.push(this);
    }

    /**
     * @param {any} email
     */
    set validateEmail(email) {
        if (EmailValidator.isValidEmail(email)) {
            this.email = email;
        } else {
            throw new Error("Invalid Email");
        }
    }
}

export default User;
