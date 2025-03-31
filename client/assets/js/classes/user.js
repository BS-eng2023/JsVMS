// UserType Enum
const UserType = {
    DEALER: 'Dealer',
    PRIVATE: 'Private',
  };
  
  class User {
    constructor(id, name, password, type, phone, email, address) {
      this.id = id; // Long
      this.name = name; // String
      this.password = password; // String
      this.type = type; // UserType (Dealer or Private)
      this.phone = phone; // String
      this.email = email; // String
      this.address = address; // String
    }
  
    // Getters
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getPassword() {
      return this.password;
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
    setId(id) {
      this.id = id;
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
  }
  
 /*  // Example usage
  const user = new User(
    1,
    'John Doe',
    'securepassword123',
    UserType.DEALER,
    '123-456-7890',
    'john.doe@example.com',
    '123 Main St'
  );
   */
