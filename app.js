


let gotRight = 0;
let gotWrong = 0;
let streak = 0;
let bestStreak = 0;
let turns = 0;
let seconds = 0;

let levelThree = 0;
let levelTwo = 0;
let levelOne = 0;
let levelRetry = 0;

let q1x1;
let q1x2;
let q1x3;
let q1x4;
let q1x5;
let q1x6;
let q1x7;
let q1x8;
let q1x9;
let q1x10;
let q1x11;
let q1x12;

let q2x1;
let q2x2;
let q2x3;
let q2x4;
let q2x5;
let q2x6;
let q2x7;
let q2x8;
let q2x9;
let q2x10;
let q2x11;
let q2x12;

let q3x1;
let q3x2;
let q3x3;
let q3x4;
let q3x5;
let q3x6;
let q3x7;
let q3x8;
let q3x9;
let q3x10;
let q3x11;
let q3x12;

let q4x1;
let q4x2;
let q4x3;
let q4x4;
let q4x5;
let q4x6;
let q4x7;
let q4x8;
let q4x9;
let q4x10;
let q4x11;
let q4x12;

let q5x1;
let q5x2;
let q5x3;
let q5x4;
let q5x5;
let q5x6;
let q5x7;
let q5x8;
let q5x9;
let q5x10;
let q5x11;
let q5x12;

let q6x1;
let q6x2;
let q6x3;
let q6x4;
let q6x5;
let q6x6;
let q6x7;
let q6x8;
let q6x9;
let q6x10;
let q6x11;
let q6x12;

let q7x1;
let q7x2;
let q7x3;
let q7x4;
let q7x5;
let q7x6;
let q7x7;
let q7x8;
let q7x9;
let q7x10;
let q7x11;
let q7x12;

let q8x1;
let q8x2;
let q8x3;
let q8x4;
let q8x5;
let q8x6;
let q8x7;
let q8x8;
let q8x9;
let q8x10;
let q8x11;
let q8x12;

let q9x1;
let q9x2;
let q9x3;
let q9x4;
let q9x5;
let q9x6;
let q9x7;
let q9x8;
let q9x9;
let q9x10;
let q9x11;
let q9x12;

let q10x1;
let q10x2;
let q10x3;
let q10x4;
let q10x5;
let q10x6;
let q10x7;
let q10x8;
let q10x9;
let q10x10;
let q10x11;
let q10x12;

let q11x1;
let q11x2;
let q11x3;
let q11x4;
let q11x5;
let q11x6;
let q11x7;
let q11x8;
let q11x9;
let q11x10;
let q11x11;
let q11x12;

let q12x1;
let q12x2;
let q12x3;
let q12x4;
let q12x5;
let q12x6;
let q12x7;
let q12x8;
let q12x9;
let q12x10;
let q12x11;
let q12x12;




// -------------------------------------------------- Question Arrays

// questions bank
let questions1 = [q1x1, q1x2, q1x3, q1x4, q1x5, q1x6, q1x7, q1x8, q1x9, q1x10, q1x11, q1x12]
let questions2 = [q2x1, q2x2, q2x3, q2x4, q2x5, q2x6, q2x7, q2x8, q2x9, q2x10, q2x11, q2x12]
let questions3 = [q3x1, q3x2, q3x3, q3x4, q3x5, q3x6, q3x7, q3x8, q3x9, q3x10, q3x11, q3x12]
let questions4 = [q4x1, q4x2, q4x3, q4x4, q4x5, q4x6, q4x7, q4x8, q4x9, q4x10, q4x11, q4x12]
let questions5 = [q5x1, q5x2, q5x3, q5x4, q5x5, q5x6, q5x7, q5x8, q5x9, q5x10, q5x11, q5x12]
let questions6 = [q6x1, q6x2, q6x3, q6x4, q6x5, q6x6, q6x7, q6x8, q6x9, q6x10, q6x11, q6x12]
let questions7 = [q7x1, q7x2, q7x3, q7x4, q7x5, q7x6, q7x7, q7x8, q7x9, q7x10, q7x11, q7x12]
let questions8 = [q8x1, q8x2, q8x3, q8x4, q8x5, q8x6, q8x7, q8x8, q8x9, q8x10, q8x11, q8x12]
let questions9 = [q9x1, q9x2, q9x3, q9x4, q9x5, q9x6, q9x7, q9x8, q9x9, q9x10, q9x11, q9x12]
let questions10 = [q10x1, q10x2, q10x3, q10x4, q10x5, q10x6, q10x7, q10x8, q10x9, q10x10, q10x11, q10x12]
let questions11 = [q11x1, q11x2, q11x3, q11x4, q11x5, q11x6, q11x7, q11x8, q11x9, q11x10, q11x11, q11x12]
let questions12 = [q12x1, q12x2, q12x3, q12x4, q12x5, q12x6, q12x7, q12x8, q12x9, q12x10, q12x11, q12x12]

// bucket a - very fast
bucketA = [];

// bucket aa - ok
bucketAA = [];

// bucket aaa- slow
bucketAAA = [];

// bucket aaaa- wrong
bucketAAAA = [];
// --------------------------------------------------



// -------------------------------------------------- Get Data
// get streak data from local storage
bestStreak = localStorage.getItem('bestStreak')
// --------------------------------------------------


// -------------------------------------------------- Timing calc start 
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
// --------------------------------------------------


// -------------------------------------------------- Declarations and Pointers
let para = document.querySelector("p"); //
let form = document.querySelector(".signup-form"); // form reference by class
let answer = document.querySelector("#answer-field"); // field refernce by ID
let checkbox = document.querySelector('input[type="checkbox"]'); // form reference by class

// let showStreak = document.querySelector("#currentStreak"); // field ref for current streak
let showTurns = document.querySelector("#turnsTaken"); // field ref for current streak
let showTotalCorrect = document.querySelector("#totalCorrect"); // field ref for current streak
const feedback = document.querySelector('.feedback');
let embedLevelThree = document.querySelector("#embedLevelThree")
let embedLevelTwo = document.querySelector("#embedLevelTwo")
let embedLeveOne = document.querySelector("#embedLevelOne")
let embedLevelRetry = document.querySelector("#embedLevelRetry")

// DDLs
function TESTFNC() {
  console.log("TEST FNC")
}

let DDL_freestyle = document.getElementById("DDL_freestyle").addEventListener('click', TESTFNC);;
// --------------------------------------------------


// start and stop buttons 
let startButton = document.getElementById("start_button").addEventListener('click', PMTT);
focusMethod = function getFocus() {
  document.getElementById("answer-field").focus();
}


// showBestStreak.innerText = bestStreak - do we need this?


// test 
// DDL_freestyle.addEventListener('click', TESTFNC);


// end test

// -------------------------------------------------- Console Welcome
console.log("-------------------------------");
console.log("WELCOME TO PAI MEI TIMES TABLES");
console.log("-------------------------------");
console.log("");
console.log("");
// --------------------------------------------------


// -------------------------------------------------- Init call
// PMTT() // init call 
// --------------------------------------------------


// -------------------------------------------------- Show / hide streak data
checkbox.addEventListener('change', function () {
  let showStreak = document.querySelector("#currentStreak"); // field ref for current streak
  let showBestStreak = document.querySelector("#bestStreak"); // field ref for best streak
  // showTotalCorrect.innerText = gotRight
  // showBestStreak.innerText = bestStreak

  if (checkbox.checked) {
    console.log("checked")
    showStreak.innerText = streak
    showBestStreak.innerText = bestStreak
  } else {
    console.log("unchecked")
    showStreak.innerText = ""
    showBestStreak.innerText = ""
  }
})
// --------------------------------------------------


// -------------------------------------------------- Quest Question History
// check to see if q has already been answered
function checkQuestion(questionID) {

  let qID = localStorage.getItem(questionID)
  console.log(questionID)
  console.log(qID)
  if (!qID) {
    console.log("A new question appeared")
  } else {
    console.log("We have had this one before")
  }
}
// currently this just check locStore to see if there is a ref to that question 
// but it 'should' check against a fixed store of questions 
// this is an area to fix 
// --------------------------------------------------


// -------------------------------------------------- Declare Game Types
// there are several games to build here
// game1_Welcome
// if !playedBefore, then do initial baseline game 
// 144 questions to get some data on performance
// after game1_welcome, player can choose from the following:
// game_practiceAA - work towards pushing AA to A 
// game_practiceAAA - work towards pushing AAA to AA or A
// game_practiceAAAA - work towards rescuing wrong answers and pushing into AAA AA or A
// game_practiceA - here you continue to test your ability to quickly answer your tables
// in this game you answer all your As to keep them in the top level - some may fall to a lower level
// --------------------------------------------------


// -------------------------------------------------- Main FNC
function PMTT() {

  focusMethod(); // gets cursor to answer line on pressing start button
  // feedback.textContent = ""

  // here I can create totally random quetsions - use this for training 
  // I need to pull down from questions array to avoid duplicates
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
    const answer = document.querySelector("#answer-field"); // field reference by ID
    const stringValue = answer.value; // get string
    const parsedAnswer = Number(stringValue); // now number

    // validation here

    if (stringValue == "") {
      // feedback.textContent = "invalid answer - please submit a number .. tysm :)"
      form.removeEventListener("submit", testFNC)
      PMTT();
    } else {
      feedback.textContent = ""
      form.reset(); // reset form field
      console.log("answer entered is: " + parsedAnswer); // console feedback
      console.log("answer we were looking for is: " + theAnswer); // console feedback

      if (parsedAnswer === theAnswer) {
        console.log("WELL DONE + 1 SCORE")
        // feedback.textContent = "Well Done :)"
        gotRight += 1; // score
        streak += 1; // score
        turns += 1 // count turns
        newColour = document.getElementById(imageID); // css
        newColour.classList.add("done"); // css
        localStorage.setItem(imageID, 1)
        end()
        if (seconds < 6) {
          console.log("EPIC TIME")
          levelThree += 1; // score
          let gemID = imageID + "a"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("bigSuccess")
          console.log(" ------------------ gemID: " + gemID)
        } else if (seconds < 12) {
          console.log("nice work")
          levelTwo += 1; // score
          let gemID = imageID + "aa"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("success")
          console.log(" ------------------ gemID: " + gemID)
        } else {
          console.log("good work - slow and steady")
          levelOne += 1; // score
          let gemID = imageID + "aaa"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("success")
          console.log(" ------------------ gemID: " + gemID)
        }
      } else {
        console.log("BAD LUCK + 1 FAIL SCORE")
        // feedback.textContent = "Dang it ;/"
        levelRetry += 1; // score
        gotWrong = gotWrong + 1; // score
        let gemID = imageID + "aaaa"
        newColour = document.getElementById(gemID); // css
        newColour.classList.add("error"); // css
        newColour2 = document.getElementById(imageID); // css
        newColour2.classList.add("done"); // css
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
      embedLevelThree.innerText = levelThree
      embedLevelTwo.innerText = levelTwo
      embedLevelOne.innerText = levelOne
      embedLevelRetry.innerText = levelRetry
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

