import User from "./Users";

class Auth {
    constructor() {
        User.loadUsers();
        this.users = User.users;
    }

    register(newUserData) {
        // Make sure we reload the latest users
        const { email } = newUserData;
        const userExists = User.users.find((u) => {
            return u._email === email;
        });
        if (userExists) {
            alert("User already exists!");
            return false;
        }
        // Only create after passing validation ✅
        const user = new User(newUserData);
        User.users.push(user);
        User.saveUsers();

        return user;
    }

    login(email, password) {
        const user = this.users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid credentials");
            return false;
        }
        localStorage.setItem("loggedInUser", email);
    }
    logout() {
        localStorage.removeItem("loggedInUser");
    }

    isLoggedIn() {
        return !!localStorage.getItem("loggedInUser");
    }
}

export default Auth;
