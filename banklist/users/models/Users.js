import EmailValidator from "./EmailValidator";
class User {
    static users = JSON.parse(localStorage.getItem("users")) || [];
    constructor({
        firstName = "",
        lastName = "",
        dateOfBirth = "",
        sex = "others",
        contactInfo = "",
        married = false,
        email = "",
    } = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.contactInfo = contactInfo;
        this.isLoggedIn = true;
        this.isActive = true;
        this.isSuperUser = false;
        this.married = married;
        this.email = email;
        User.users.push(this);
        User.saveUsers();

        //validate sex options
        const validSexOptions = ["male", "female", "others"];
        const selectedSex = sex || "others"; // default fallback

        if (validSexOptions.includes(selectedSex)) {
            this.sex = selectedSex;
        } else {
            throw new Error("Invalid sex options");
        }
    }

    // save users
    static saveUsers() {
        const plainUsers = User.users.map((u) => ({
            firstName: u.firstName,
            lastName: u.lastName,
            dateOfBirth: u.dateOfBirth,
            sex: u.sex,
            married: u.married,
            email: u._email,
            isActive: u.isActive,
            isLoggedIn: u.isLoggedIn,
            isSuperUser: u.isSuperUser,
            contactInfo: u.contactInfo,
        }));

        localStorage.setItem("users", JSON.stringify(plainUsers));
    }

    static loadUsers() {
        const stored = localStorage.getItem("users");
        if (stored) {
            const parsed = JSON.parse(stored);
            User.users = parsed
                .filter((u) => u && u._email) // skip empty or broken records
                .map((data) => {
                    try {
                        return new User(data);
                    } catch (err) {
                        console.warn("Skipped invalid user:", err.message);
                        return null;
                    }
                })
                .filter((u) => u !== null);
        } else {
            User.users = [];
        }
    }

    static clearUsers() {
        localStorage.removeItem("users");
        User.users = [];
    }
    /**
     * @returns {any}
     */
    //returns a formated strings of the user name
    get getFullName() {
        if (this.sex == "male") {
            return `Mr. ${this.firstName} ${this.lastName}`;
        } else if (this.sex == "female" && this.married) {
            return `Miss. ${this.firstName} ${this.lastName}`;
        } else if (this.sex == "female" && !this.married) {
            return `Mrs. ${this.firstName} ${this.lastName}`;
        } else {
            return `Mx. ${this.firstName} ${this.lastName}`;
        }
    }

    //get user address from the related class field
    get getAddress() {
        return `\t \tstreet: ${this.contactInfo.address.street}\n
        city: ${this.contactInfo.address.city}\n
        state: ${this.contactInfo.address.state}\n
        country: ${this.contactInfo.address.country}
        `;
    }
    //It returns the users phone numbers
    get getPhoneNumbers() {
        return [this.contactInfo.phoneNumber].join(",");
    }

    set email(value) {
        if (!EmailValidator.isValidEmail(value)) {
            throw new Error("Invalid Email Address");
        }
        this._email = value;
    }

    get email() {
        return this._email;
    }
}

export default User;
