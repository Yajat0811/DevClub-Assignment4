console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector(""); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

array1=login_text.split(" ");

let question = array1; // Use split and array operations on the login_text string to extract the question
if(question[2]=="second") {
  second_number=question[5];
  console.log(second_number)
  fianlanswer=second_number
}
 else if(question[2]=="first") {
   first_number=question[4];
   console.log(fisrt_number)
   finalanswer=first_number
 }
else if(question[1]=="add") {
  number1=question[2]
  console.log(number1)
  number2=question[3]
  console.log(number2)
  finalanswer=number1+number2
}
else(question[1]=="subtract") {
  number1=question[2]
  console.log(number1)
  number2=question[3]
  console.log(number2)
  finalanswer=number1-number2
  
  
  let answer=finalanswer



const captcha_input_element = document.querySelector(""); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
