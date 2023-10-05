import EmailValidator from "./EmailValidator";
import {ContactInfo,Address} from "./ContactInfo";

class User {
    static users = [];

    constructor({firstName,lastName,dateOfBirth, sex, contactInfo, married=false}={}) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
        this.contactInfo = contactInfo
        this.isLoggedIn = true
        this.isActive = true
        this.isSuperUser = false
        this.married = married
        User.users.push(this)//stores the all instances of the class

        //validate sex options
        const validSexOptions = ["male","female","others"]

        if(validSexOptions.includes(sex)){
            this.sex = sex;
        }else {
            throw new Error('Invalid sex options')
        }

    }

    /**
     * @returns {any}
     */
    //returns a formated strings of the user name
    get getFullName(){
        if(this.sex == 'male'){
            return `Mr. ${this.firstName} ${this.lastName}`
        }
        else if(this.sex == 'female' && this.married){
            return `Miss. ${this.firstName} ${this.lastName}`
        }
        else if(this.sex =='female' && !this.married){
            return `Mrs. ${this.firstName} ${this.lastName}`
        }
        else{
            return `Mx. ${this.firstName} ${this.lastName}`
        }
    }

//this method logouts out a user
    logOut(){
        return this.isLoggedIn =false
    }
//this method deactivate a user accounts
    deactivate(){
        return this.isActive = false
    }

    //get user address from the related class field
    get getAddress(){
        return `\t \tstreet: ${this.contactInfo.address.street}\n
        city: ${this.contactInfo.address.city}\n
        state: ${this.contactInfo.address.state}\n
        country: ${this.contactInfo.address.country}
        `
    }
//It returns the users phone numbers
    get getPhoneNumbers(){
        return [this.contactInfo.phoneNumber].join(',')
    }



}

export default User;
