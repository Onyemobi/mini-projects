var data = [{
  "firstName": "Chang",
  "lastName": "Wang",
  "age": 45,
  "gender": "M",
  "subject": "Calculus",
  "tenure": false
}, {
  "firstName": "Oluwatosin",
  "lastName": "Adero",
  "age": 45,
  "gender": "F",
  "subject": "Java",
  "tenure": true
}, {
  "firstName": "Guru",
  "lastName": "Ramu",
  "age": 41,
  "gender": "M",
  "subject": "Engineering",
  "tenure": true
}, {
  "firstName": "Muhammad",
  "lastName": "Ali",
  "age": 60,
  "gender": "M",
  "subject": "Chemistry",
  "tenure": false
}];


function getTeacherbyName(searchTerm) {
  return data.filter(
    function(data) {
      return  data.lastName == searchTerm
    }
  );
}

var selectedProfessor = getTeacherbyName("Wang");

var selProFN = selectedProfessor[0].firstName;
var selProLN = selectedProfessor[0].lastName;
var selProAge = selectedProfessor[0].age;
var selProGen = selectedProfessor[0].gender;
var selProSub = selectedProfessor[0].subject;
var selProTen = selectedProfessor[0].tenure; 




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

var Professor = new Teacher(selProFN, selProLN, selProAge, selProGen, selProSub, selProTen);



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


var newDiv = document.createElement("Div");
var text = document.createTextNode(FullProfName + ". " + TenureStatus);
newDiv.appendChild(text);
document.body.innerHTML="";
document.body.appendChild(newDiv);

