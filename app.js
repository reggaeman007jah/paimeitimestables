let gotRight = 0;
let gotWrong = 0;
let streak = 0;
let bestStreak = 0;
let turns = 0;
let seconds = 0;

// get streak data
bestStreak = localStorage.getItem('bestStreak')

// testing timeing 

let startTime, endTime;

function start() {
  startTime = performance.now();
};

function end() {
  endTime = performance.now();
  let timeDiff = endTime - startTime; //in ms 
  // strip the ms 
  timeDiff /= 1000;

  // get seconds 
  seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

// end testing timing


// decs 
let para = document.querySelector("p"); //
let form = document.querySelector(".signup-form"); // form reference by class
let answer = document.querySelector("#answer-field"); // field refernce by ID
let checkbox = document.querySelector('input[type="checkbox"]'); // form reference by class

// let showStreak = document.querySelector("#currentStreak"); // field ref for current streak
let showTurns = document.querySelector("#turnsTaken"); // field ref for current streak
let showTotalCorrect = document.querySelector("#totalCorrect"); // field ref for current streak
const feedback = document.querySelector('.feedback');

// showBestStreak.innerText = bestStreak

console.log("-------------------------------");
console.log("WELCOME TO PAI MEI TIMES TABLES");

console.log("-------------------------------");
console.log("");
console.log("");
PMTT()

checkbox.addEventListener('change', function () {
  let showStreak = document.querySelector("#currentStreak"); // field ref for current streak
  let showBestStreak = document.querySelector("#bestStreak"); // field ref for best streak
  // showTotalCorrect.innerText = gotRight
  // showBestStreak.innerText = bestStreak

  if (checkbox.checked) {
    console.log("checked")
    showStreak.innerText = streak
    // showTurns.innerText = turns
    // showTotalCorrect.innerText = gotRight
    showBestStreak.innerText = bestStreak
  } else {
    console.log("unchecked")
    showStreak.innerText = ""
    showBestStreak.innerText = ""
  }
})




function checkQuestion(questionID) {
  // check to see if q has already been answered
  let qID = localStorage.getItem(questionID)

  console.log(questionID)
  console.log(qID)
  if (!qID) {
    console.log("A new question appeared")
  } else {
    console.log("We have had this one before")
  }
}


function PMTT() {

  console.log("////// ------------------------------- //////");
  const testQuestionpart1 = Math.floor(Math.random() * 12 + 1); // first number to multiply
  const testQuestionpart2 = Math.floor(Math.random() * 12 + 1); // second number to multiply
  const theQuestion = testQuestionpart1 + " x " + testQuestionpart2; // text display of the question
  para.innerText = theQuestion; //question text on-screen
  // FNC here to manage the questions coming in, removing easy ones
  const theAnswer = testQuestionpart1 * testQuestionpart2;
  let imageID = testQuestionpart1 + "x" + testQuestionpart2; // css and DB ID
  checkQuestion(imageID) // check whether q already answered


  //
  console.log("Debug:")
  console.log("Calc: " + testQuestionpart1 + " x " + testQuestionpart2)
  console.log("Result we want: " + theAnswer)
  console.log("CSS imageID is: " + imageID); // css debug info
  console.log(gotRight + " correct / " + gotWrong + " incorrect");
  console.log("turns: " + turns);
  console.log("streak: " + streak);

  // test
  start()

  form.addEventListener("submit", testFNC = (e) => {
    e.preventDefault();
    const answer = document.querySelector("#answer-field"); // field refernce by ID
    const stringValue = answer.value; // get string
    const parsedAnswer = Number(stringValue); // now number

    // validation here

    if (stringValue == "") {
      feedback.textContent = "invalid answer - please submit a number .. tysm :)"
      form.removeEventListener("submit", testFNC)
      PMTT();
    } else {
      feedback.textContent = ""
      form.reset(); // reset form field
      console.log("answer entered is: " + parsedAnswer); // console feedback
      console.log("answer we were looking for is: " + theAnswer); // console feedback

      if (parsedAnswer === theAnswer) {
        console.log("WELL DONE + 1 SCORE")
        gotRight += 1; // score
        streak += 1; // score
        turns += 1 // count turns
        newColour = document.getElementById(imageID); // css
        newColour.classList.add("done"); // css
        localStorage.setItem(imageID, 1)
        end()
        if (seconds < 7) {
          console.log("EPIC TIME")
          let gemID = imageID + "a"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("bigSuccess")
          console.log(" ------------------ gemID: " + gemID)
        } else {
          console.log("nice work")
          let gemID = imageID + "aa"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("success")
          console.log(" ------------------ gemID: " + gemID)
        }
      } else {
        console.log("BAD LUCK + 1 FAIL SCORE")
        gotWrong = gotWrong + 1; // score
        newColour = document.getElementById(imageID); // css
        newColour.classList.add("error"); // css
        streak = 0;
        turns += 1 // count turns
      }

      if (streak > bestStreak) {
        let copyVar = streak
        bestStreak = copyVar

      }
      localStorage.setItem('bestStreak', bestStreak)

      // showStreak.innerText = streak
      showTurns.innerText = turns
      showTotalCorrect.innerText = gotRight
      // showBestStreak.innerText = bestStreak


      form.removeEventListener("submit", testFNC)
      PMTT();






    }

    // // regex 
    // const pattern = /^[0-9]{1-3}$/;
    // if (pattern.test(parsedAnswer)) {
    //   feedback.textContent = 'nice'
    // } else {
    //   // bad
    //   feedback.textContent = 'hmm, try again'
    //   // form.removeEventListener("submit", testFNC)
    //   // PMTT();
    // }



    // form.reset(); // reset form field
    // console.log("answer entered is: " + parsedAnswer); // console feedback
    // console.log("answer we were looking for is: " + theAnswer); // console feedback

    // if (parsedAnswer === theAnswer) {
    //   console.log("WELL DONE + 1 SCORE")
    //   gotRight += 1; // score
    //   streak += 1; // score
    //   turns += 1 // count turns
    //   newColour = document.getElementById(imageID); // css
    //   newColour.classList.add("success"); // css
    //   localStorage.setItem(imageID, 1)
    // } else {
    //   console.log("BAD LUCK + 1 FAIL SCORE")
    //   gotWrong = gotWrong + 1; // score
    //   newColour = document.getElementById(imageID); // css
    //   newColour.classList.add("error"); // css
    //   streak = 0;
    //   turns += 1 // count turns
    // }

    // if (streak > bestStreak) {
    //   let copyVar = streak
    //   bestStreak = copyVar

    // }
    // localStorage.setItem('bestStreak', bestStreak)

    // showStreak.innerText = streak
    // showTurns.innerText = turns
    // showTotalCorrect.innerText = gotRight
    // showBestStreak.innerText = bestStreak


    // form.removeEventListener("submit", testFNC)
    // PMTT();
  })

}
// PMTT()