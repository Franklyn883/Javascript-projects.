class EmailValidator {
    static isValidEmail(email) {
        //to remove empty spaces in emails.
        email = email.trim();
        if (email) {
          

            // To check if '@' occurs in the email.
            if (!email.includes("@")) {
                throw new Error('Email should include "@"');
            }
            // To check if email has at least one character before and after the "@" symbol.
            if (email.startsWith("@") || email.endsWith("@")) {
                throw new Error('Email must not start or end with "@"');
            }
            // To check if email does not start or end with "."
            if (email.startsWith(".") || email.endsWith(".")) {
                throw new Error('Email must not start or end with "."');
            }

            //To check if '@' occurs just once in email.
            let count = 0;
            for (let i in email) {
                if (email[i] == "@") {
                    count++;
                    if (count > 1) {
                        throw new Error(
                            "Email can only include one instance of '@'"
                        );
                    }
                }
            }
            //to check if the email contails valid symbols
        }

        //To check if email has at least one character before the "@" symbol.
        else {
            return false;
        }
    }
}

export default EmailValidator;
