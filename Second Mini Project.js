

function Person(firstName, lastName, age, gender) {
  this.name = {
    firstName,
    lastName
  };
  this.age = age;
  this.gender = gender;
};



function Teacher(firstName, lastName, age, gender, subject, tenure) {
	Teacher.prototype = Object.create(Person.prototype);

  Person.call(this, firstName, lastName, age, gender);

  this.subject = subject;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.tenure = tenure;
}

var Professor = new Teacher("Guru", "Ramu", 41, "Male", "Engineering", true);



function showFullName (firstName, lastName) { 
var nameIntro = "The name of the professor is ";

function makeFullName () {         
return nameIntro + firstName + " " + lastName;     
}

return makeFullName (); 

} 

var FullProfName = showFullName (Professor.firstName, Professor.lastName); 



function isTenure(lastName, tenure)
{
	if (tenure == true){
		return "Professor " + lastName + " is a tenured professor.";
	}

	else 
		return "Professor " + lastName + " is not a tenured professor.";
}

var TenureStatus = isTenure(Professor.lastName, Professor.tenure); 

console.log(FullProfName + ". " + TenureStatus);

