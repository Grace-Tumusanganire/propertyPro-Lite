const user = [];

class users {
constructor  (firstname, lastname, email, password, address){
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.password = password,
    this.address = address;
}
      
    
  createUser() {
      const newUser = {
          firstname: this.firstname, 
          lastname:this.lastname, 
          email:this.email, 
          address: this.address,
          id: this.users.length + 1,
        
        }
      user.push(newUser);
   return newUser;
  }

  getUser(email) {
    return this.users.get(user => user.email === email);
  }

  
}

export default users;