// UserType Enum
const UserType = {
  DEALER: 'Dealer',
  PRIVATE: 'Private',
};

class User {
  // Private fields declaration
  #id;
  #name;
  #password;
  #type;
  #phone;
  #email;
  #address;

  constructor(id, name, password, type, phone, email, address) {
      this.#id = id;
      this.#name = name;
      this.#password = password;
      this.#type = type;
      this.#phone = phone;
      this.#email = email;
      this.#address = address;
  }

  // Getters
  getId() {
      return this.#id;
  }

  getName() {
      return this.#name;
  }

  // Security recommendation: Remove password getter
  // getPassword() {
  //     return this.#password;
  // }

  getType() {
      return this.#type;
  }

  getPhone() {
      return this.#phone;
  }

  getEmail() {
      return this.#email;
  }

  getAddress() {
      return this.#address;
  }

  // Setters
  setId(id) {
      this.#id = id;
  }

  setName(name) {
      this.#name = name;
  }

  setPassword(password) {
      this.#password = password;
  }

  setType(type) {
      this.#type = type;
  }

  setPhone(phone) {
      this.#phone = phone;
  }

  setEmail(email) {
      this.#email = email;
  }

  setAddress(address) {
      this.#address = address;
  }

  static fromJson(json) {
      return new User(
          json._id,
          json.attributes.userName,
          json.attributes.userPassword,
          UserType.DEALER,
          json.attributes.userPhoneNumber,
          json.attributes.userMail,
          json.attributes.userAddress
      );
  }

  toJson() {
      return {
          _id: this.#id.toString(),
          attributes: {
              userName: this.#name,  // Fixed: using private field
              userPassword: '',     // Security: Never expose password in JSON
              userMail: this.#email,
              userAddress: this.#address,
              userPhoneNumber: this.#phone
          }
      };
  }

  // Security recommendation: Add password verification
  verifyPassword(inputPassword) {
      return inputPassword === this.#password; 
  }
}

// Example usage
const user = new User(
  1,
  'John Doe',
  'securepassword123',
  UserType.DEALER,
  '123-456-7890',
  'john.doe@example.com',
  '123 Main St'
);