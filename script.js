// function Constructor

// var john ={
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'

// }

// var Person = function(name, yearOfBirth, job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.lastName = 'Smith';

// Person.prototype.calculateAge = function (){
//   console.log( 'The year of Birth ' + 'for ' + this.name + ' ' + this.lastName + ' is ' + (2020 - this.yearOfBirth) );
// }

// var john = new Person('john', 1990, 'teacher');

// var jane = new Person('jane', 1995, 'designer');

// var mark = new Person('mark', 1978, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();



// Object.create

// var personProto = {
//   calculateAge: function(){
//     console.log(2020 - yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = 'Designer';

// console.log(john);

// var jane = Object.create(personProto, {
//   name : { value: 'Jane'},
//   yearOfBirth: {value : 1978},
//   job : {value: 'Teacher'}
// });





// First Class function

var years = [1989, 1995, 2004, 1998, 2011]

function arrayCalc(arr, fn){
  var arrRes = [];
  for (var i=0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
};

function calculateAge(el){
  return 2016 - el;
};

function isFullAge(el){
  return el >= 18;
};

function maxHeartRate(el){
  if (el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el))
  } else { 
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAge = arrayCalc(ages, isFullAge);
console.log(fullAge);

var rateChecker = arrayCalc(ages, maxHeartRate);
console.log(rateChecker);


// First Class Function returning a Function


function interviewQuestion(job){
  if (job === 'teacher'){
    return function(name){
      console.log('What Subject do you teach? ' + name);
    }
  }else if (job === 'designer'){
    return function(name){
      console.log(name + ', Please tell us about UX designing?');
    } 
  }else {
    return function(name){
      console.log('There is no Candidate for this Session!');
    }
  }
};


var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mark');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');
designerQuestion('Ibrahim');

interviewQuestion('lecturer')('John');











