// UserType Enum

import golbalData from "../golbalData.js";

  class User {
    // Private fields declaration
    _id;
    name;
    password;
    type;
    phone;
    email;
    address;
  
    constructor(_id, name, password, type, phone, email, address) {
      this._id = _id;
      this.name = name;
      this.password = password;
      this.type = type;
      this.phone = phone;
      this.email = email;
      this.address = address;
    }
  
    // Getters
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getType() {
      return this.type;
    }
  
    getPhone() {
      return this.phone;
    }
  
    getEmail() {
      return this.email;
    }
  
    getAddress() {
      return this.address;
    }
  
    // Setters
    setId(_id) {
      this._id = _id;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setPassword(password) {
      this.password = password;
    }
  
    setType(type) {
      this.type = type;
    }
  
    setPhone(phone) {
      this.phone = phone;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setAddress(address) {
      this.address = address;
    }
  
    toJson() {
      return {
        _id: this._id,
        name: this.name,
        password: this.password,
        type: this.type,
        phone: this.phone,
        email: this.email,
        address: this.address
      };
    }
  
    static fromJson(json) {
       
      return new User(
        json._id,
        json.userName,
        json.userPassword,
        json.UserType,
        json.userPhoneNumber,
        json.userMail,
        json.userAddress
      );
    }
  }
  
  export default User;