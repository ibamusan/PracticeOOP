// Solution to coding Challenge 7

// ( function(){
//   function Question(question, answer, correctAnswer){
//     this.question = question,
//     this.answer = answer,
//     this.correctAnswer = correctAnswer
//   };
  
//   Question.prototype.displayQuestion = function(){
//     console.log(this.question);
  
//     for(var i=0; i < this.answer.length; i++){
//       console.log( i + ':' + this.answer[i]);
//     }
  
//   };
  
//   var q1 = new Question ('What is your Name?', ['Ibrahim','Smith'], 0);
//   var q2 = new Question ('What is the name of your College?', ['ABU Zaria','OAU Ile-Ife'], 1);
//   var q3 = new Question ('What is your Course of study?', ['Physics','Chemistry'], 0);
  
//    var questions = [q1, q2, q3];
   
//   var randomQuestion = Math.floor(Math.random() * questions.length);
//   console.log('Question ' + randomQuestion + ':')
//   questions[randomQuestion].displayQuestion();
  
//   var userQuestion = parseInt(prompt('What is the correct answer to the question below?'));
  
//   Question.prototype.displayAnswer = function (ans){
    
//     if (userQuestion === this.correctAnswer){
//           console.log('correct, good job!')
//       }else{
//         console.log('Your answer is not correct, try again')
//       }
  
//   };
  
//   questions[randomQuestion].displayAnswer(userQuestion);
  
// })();


(function (){
  var Question = function (question, answer, correct){
    this.question = question,
    this.answer = answer,
    this.correct = correct
  }
  
  Question.prototype.displayQuestionAtRandome = function(){
    console.log(this.question);
    
    for(var i = 0; i < this.answer.length; i++){
     console.log(i + ':' + this.answer[i]);
  
    }
   
  }
  
  
  var q1 = new Question('What is your name?',  ['ibrahim', 'adewale'],  0);
  var q2 = new Question('What is the name of your town?', ['Ado', 'Ede'], 1);
  var q3 = new Question('whats your best food?', ['rice','beans'], 0); 
  
  var questions = [q1, q2, q3];
  
  var randomQuestion = Math.floor(Math.random() * questions.length);
  
  questions[randomQuestion].displayQuestionAtRandome();
  
  var correctAnswer = parseInt(prompt('What is the correct answer from the listed below?'));
  
  Question.prototype.askForAnswer = function(){
    if(this.correct === correctAnswer){
      console.log('Your answer is correct, welldone!')
    }else{
      console.log('Your answer is wrong, please try again :)');
  
    }
  };
  
  questions[randomQuestion].askForAnswer(correctAnswer);
    
})();













