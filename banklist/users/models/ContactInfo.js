import EmailValidator from "./EmailValidator"
class ContactInfo{
    
    constructor({address, email, phoneNumber}={}){
        this.address = address
        this.phoneNumber = phoneNumber
      if(EmailValidator.isValidEmail(email)){
        this.email = email
      }
    }


}



class Address{
    constructor({postalCode,street,city,region,state,country="Nigeria"}={}){
        this.postalCode = postalCode
        this.street = street
        this.city = city
        this.region = region
        this.state = state
        this.country = country
    }
}

export { ContactInfo, Address };