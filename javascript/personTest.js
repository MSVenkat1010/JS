class Person {
	constructor(name,age,gender){
	this.name=name
	this.age=age;
	this.gender=gender;
	}
}

console.log(new Person('jack','24','Male'));

class Employee extends Person{
	constructor(name,age,gender,salary,designation){
		super(name,age,gender);
		this.salary = salary;
		this.designation = designation
	}

}

const employee = new Employee("jav","23","Female","3333","Manager");

console.log(employee);

class Company {
  #password = "1234";
  #founderName = "DEV";

  constructor(companyName) {
    this.companyName = companyName;
    this.loginUserName = null;
    this.loginPassword = null;
    this.usernewPass = null;
  }

  #setPassword(newPassword) {
    this.#password = newPassword;
  }

  login(userName, password) {
    this.loginUserName = userName;
    this.loginPassword = password;
  }

  resetPassword(userName, password) {
    if (this.loginUserName === null || this.loginPassword === null) {
      console.log("Please login with valid credentials to reset the password.");
      return;
    }

    if (this.loginUserName === userName && this.loginPassword === password) {
      const newPass = prompt("Please enter a new password:");
      if (newPass) {
        this.#setPassword(newPass);
        this.usernewPass = newPass;
        console.log("Password updated successfully.");
      } else {
        console.log("Password update cancelled.");
      }
    } else {
      console.log("Invalid credentials for password reset.");
    }
  }
}



