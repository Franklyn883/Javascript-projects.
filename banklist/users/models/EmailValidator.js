class EmailValidator {
    static isValidEmail(email) {
        //to remove empty spaces in emails.
        email = email.trim();
        if (email) {
            // to ensure email only contains letters, numbers, underscores and dots.
            let pattern = /^[a-zA-Z0-9_@.]+$/;
            // To check if '@' occurs in the email.
            if (!email.includes("@")) {
                return false;
            }
            // To check if email has at least one character before and after the "@" symbol.
            if (email.startsWith("@") || email.endsWith("@")) {
                return false;
            }
            // To check if email does not start or end with "."
            if (email.startsWith(".") || email.endsWith(".")) {
                return false;
            }
            //To check if '@' occurs just once in email.
            let count = 0;
            for (let i in email) {
                if (email[i] == "@") {
                    count++;
                    if (count > 1) {
                        return false;
                    }
                }
            }
            return pattern.test(email);
        }

        //To check if email has at least one character before the "@" symbol.
        else {
            return false;
        }
    }
}

export default EmailValidator