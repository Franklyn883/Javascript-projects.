
class ContactInfo{
    constructor({address, email, phoneNumber}={}){
        this.address = address
        this.email = email
        this.phoneNumber = phoneNumber
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