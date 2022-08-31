var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  question = new Question();
  question.display()
//call the start() method inside the quiz class
 
}


function draw(){
  background("pink");

}
