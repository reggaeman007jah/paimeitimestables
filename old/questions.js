// old version - do not use

gotRight = 0;
gotWrong = 0;

console.log("-------------------------------");
console.log("WELCOME TO TIMES TABLES MADNESS");
console.log("currently not working :(");
console.log("-------------------------------");
console.log("");
console.log("");

function FNC_Question() {
  console.log("-------------------------------");
  console.log("Top");
  console.log(gotRight + " correct / " + gotWrong + " incorrect");
  let newColour = ""; // reset value
  let theQuestion = ""; // reset value
  let testQuestionpart1 = "";
  let testQuestionpart2 = "";
  let theAnswer = ""; // to reset
  let parsedAnswer = "";
  let stringValue = "";
  let para = document.querySelector("p"); //
  let form = document.querySelector(".signup-form"); // form reference by class
  let togSwitch = document.querySelector(".togSwitch"); // form reference by class
  let answer = document.querySelector("#answer-field"); // field refernce by ID
  testQuestionpart1 = Math.floor(Math.random() * 12 + 1); // first number to multiply
  testQuestionpart2 = Math.floor(Math.random() * 12 + 1); // second number to multiply
  theQuestion = testQuestionpart1 + " x " + testQuestionpart2; // text display of the question
  para.innerText = theQuestion; //question text on-screen
  theAnswer = testQuestionpart1 * testQuestionpart2;

  console.log(
    "DEBUG TEST - The switch shows:" +
    togSwitch.value
  );


  console.log(
    "DEBUG - The answer we are looking for next, as per current variable 'theAnswer', is " +
    theAnswer
  );
  // console.log("Debug stringValue: " + stringValue);
  // console.log("Debug theAnswer: " + theAnswer);
  // console.log("-------------------");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    stringValue = answer.value; // get string
    parsedAnswer = Number(stringValue); // now number
    console.log("answer entered is: " + parsedAnswer); // console feedback

    if (parsedAnswer === theAnswer) {
      console.log("CORRECT"); // console feedback
      let imageID = testQuestionpart1 + "x" + testQuestionpart2; // css
      console.log("CSS imageID is: " + imageID); // css debug info
      newColour = document.getElementById(imageID); // css
      newColour.classList.add("success"); // css
      imageID = ""; // reset value
      form.reset(); // reset form field
      // theAnswer = ""; // reset value
      gotRight += 1; // score
      // testQuestionpart1 = "";
      // testQuestionpart2 = "";
      newColour = ""; // reset value
      theQuestion = ""; // reset value
      testQuestionpart1 = "";
      testQuestionpart2 = "";
      // theAnswer = ""; // to reset
      parsedAnswer = "";
      stringValue = "";
    } else {
      console.log("FAILS");
      console.log("FAIL = parsedAnswer : " + parsedAnswer);
      console.log("FAIL = theAnswer : " + theAnswer);
      console.log(testQuestionpart1, testQuestionpart2);
      gotWrong = gotWrong + 1; // score
      // return;
    }
    FNC_Question(); // reset FNC
  });
}

FNC_Question();
