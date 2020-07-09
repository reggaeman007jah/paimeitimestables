// -------------------------------------------------- Console Welcome
console.log("-------------------------------");
console.log("WELCOME TO PAI MEI TIMES TABLES");
console.log("-------------------------------");
console.log("");
console.log("");

// to do --------------------------------------------
/*
add total turns, total right, total wrong in stats
fix DDL - edit - do we now want multi games? or just one game?
have a counter to show how many are left when doing 144 assessment
end game state for 144 assessment with modal showing stats and message
check isComplete144? - if false, run 144 asssessment 
no save state yet, this has to be done all the way through 
add stop button to end curretn game
*/
// to do --------------------------------------------


// game states --------------------------------------
/*
we need to pull game states on page load
has there been a 144 assessment? This needs to be done at least once all the way through 

*/
// game states --------------------------------------
let gameType144 = false; // init dec 

// now check if exists in local storage 



// I declare these arrays here, to enable local storage to pull in anything it has in storage

// bucket V - locked - proven knowledge goes in here
let bucketV = [];

// bucket a - very fast - correct in under 6 seconds
let bucketA = [];

// bucket aa - ok - correct between 6 and 12 seconds
let bucketAA = [];

// bucket aaa- slow - correct over 12 seconds
let bucketAAA = [];

// bucket aaaa- wrong 
let bucketR = [];

// local storage init test
let dataA = localStorage.getItem('leBucketA'); // pulls in what is kept in storage
let dataAA = localStorage.getItem('leBucketAA'); // pulls in what is kept in storage
let dataAAA = localStorage.getItem('leBucketAAA'); // pulls in what is kept in storage
let dataV = localStorage.getItem('leBucketV'); // pulls in what is kept in storage
let dataR = localStorage.getItem('leBucketR'); // pulls in what is kept in storage
console.log("init testData bucketA: ", dataA) // shows what was loaded from storage on init
console.log("init testData bucketAA: ", dataAA) // shows what was loaded from storage on init
console.log("init testData bucketAAA: ", dataAAA) // shows what was loaded from storage on init
console.log("init testData bucketV: ", dataV) // shows what was loaded from storage on init
console.log("init testData bucketR: ", dataR) // shows what was loaded from storage on init
bucketA.push(dataA) // this pushes loaded content into the A bucket
bucketAA.push(dataAA) // this pushes loaded content into the A bucket
bucketAAA.push(dataAAA) // this pushes loaded content into the A bucket
bucketV.push(dataV) // this pushes loaded content into the A bucket
bucketR.push(dataR) // this pushes loaded content into the A bucket
// console.log("Bucket A: ", bucketA)
// end

// here i think we need to forEach all of the imported data, to popluate the AAAs
// let importID = imageID + "a" // gemID is a way to show success in the grid
// newColour = document.getElementById(importID); // css
// newColour.classList.add("bigSuccess") // css 

// console.log(bucketA)
// const convertedData = JSON.parse(bucketA)
// console.log("test 1 ---", convertedData)

// var array = [0, 1, null, 2, "", 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,];



// let testArray = JSON.parse("[" + bucketA + "]");
// console.log("testing", testArray)
// dataA.forEach(function (item) {
//   console.log(item)

// })

// convertedData.forEach(function (item) {
//   item = item + "a"
//   console.log(item)
// })



// here we have init decs for stats 
let gotRight = 0;
let gotWrong = 0;
let streak = 0;
let bestStreak = 0;
let turns = 0;
let seconds = 0;

let sessionGotRight = 0;
let sessionGotWrong = 0;
let sessionTurns = 0;
let totalGotRight = 0;
let totalgotWrong = 0;
let totalTurns = 0;

// this is the init decs for numbers of answers in each bucket
let vault = 0; // these have been answered correctly 5 times in a row in under 6 seconds
let levelThree = 0; // these have been answered correctly in under 6 seconds
let levelTwo = 0; // these have been answered correctly between 6 and 12 seconds
let levelOne = 0; // these have been answered correctly in over 12 seconds
let levelRetry = 0; // these we got wrong

// var decs for each possible question 1 - 144 ------------------------------------------------- start
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

// var decs for each possible question 1 - 144 ------------------------------------------------- end



// -------------------------------------------------- Question Arrays

// questions bank - these may not be needed
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

// the 144 contains all possible questions
// we can use this to avoid too much randomisation in questions selection 
let questions144 = [
  q1x1 = "1x1", q1x2 = "1x2", q1x3 = "1x3", q1x4 = "1x4", q1x5 = "1x5", q1x6 = "1x6",
  q1x7 = "1x7", q1x8 = "1x8", q1x9 = "1x9", q1x10 = "1x10", q1x11 = "1x11", q1x12 = "1x12",
  q2x1 = "2x1", q2x2 = "2x2", q2x3 = "2x3", q2x4 = "2x4", q2x5 = "2x5", q2x6 = "2x6",
  q2x7 = "2x7", q2x8 = "2x8", q2x9 = "2x9", q2x10 = "2x10", q2x11 = "2x11", q2x12 = "2x12",
  q3x1 = "3x1", q3x2 = "3x2", q3x3 = "3x3", q3x4 = "3x4", q3x5 = "3x5", q3x6 = "3x6",
  q3x7 = "3x7", q3x8 = "3x8", q3x9 = "3x9", q3x10 = "3x10", q3x11 = "3x11", q3x12 = "3x12",
  q4x1 = "4x1", q4x2 = "4x2", q4x3 = "4x3", q4x4 = "4x4", q4x5 = "4x5", q4x6 = "4x6",
  q4x7 = "4x7", q4x8 = "4x8", q4x9 = "4x9", q4x10 = "4x10", q4x11 = "4x11", q4x12 = "4x12",
  q5x1 = "5x1", q5x2 = "5x2", q5x3 = "5x3", q5x4 = "5x4", q5x5 = "5x5", q5x6 = "5x6",
  q5x7 = "5x7", q5x8 = "5x8", q5x9 = "5x9", q5x10 = "5x10", q5x11 = "5x11", q5x12 = "5x12",
  q6x1 = "6x1", q6x2 = "6x2", q6x3 = "6x3", q6x4 = "6x4", q6x5 = "6x5", q6x6 = "6x6",
  q6x7 = "6x7", q6x8 = "6x8", q6x9 = "6x9", q6x10 = "6x10", q6x11 = "6x11", q6x12 = "6x12",
  q7x1 = "7x1", q7x2 = "7x2", q7x3 = "7x3", q7x4 = "7x4", q7x5 = "7x5", q7x6 = "7x6",
  q7x7 = "7x7", q7x8 = "7x8", q7x9 = "7x9", q7x10 = "7x10", q7x11 = "7x11", q7x12 = "7x12",
  q8x1 = "8x1", q8x2 = "8x2", q8x3 = "8x3", q8x4 = "8x4", q8x5 = "8x5", q8x6 = "8x6",
  q8x7 = "8x7", q8x8 = "8x8", q8x9 = "8x9", q8x10 = "8x10", q8x11 = "8x11", q8x12 = "8x12",
  q9x1 = "9x1", q9x2 = "9x2", q9x3 = "9x3", q9x4 = "9x4", q9x5 = "9x5", q9x6 = "9x6",
  q9x7 = "9x7", q9x8 = "9x8", q9x9 = "9x9", q9x10 = "9x10", q9x11 = "9x11", q9x12 = "9x12",
  q10x1 = "10x1", q10x2 = "10x2", q10x3 = "10x3", q10x4 = "10x4", q10x5 = "10x5", q10x6 = "10x6",
  q10x7 = "10x7", q10x8 = "10x8", q10x9 = "10x9", q10x10 = "10x10", q10x11 = "10x11", q10x12 = "10x12",
  q11x1 = "11x1", q11x2 = "11x2", q11x3 = "11x3", q11x4 = "11x4", q11x5 = "11x5", q11x6 = "11x6",
  q11x7 = "11x7", q11x8 = "11x8", q11x9 = "11x9", q11x10 = "11x10", q11x11 = "11x11", q11x12 = "11x12",
  q12x1 = "12x1", q12x2 = "12x2", q12x3 = "12x3", q12x4 = "12x4", q12x5 = "12x5", q12x6 = "12x6",
  q12x7 = "12x7", q12x8 = "12x8", q12x9 = "12x9", q12x10 = "12x10", q12x11 = "12x11", q12x12 = "12x12"
];

// as questions are asked they are removed from the above and pushed into the below 
let activeQuestions = []

// cycles management 
// here we track how many full cycles we've done
// e.g. if three cycles we can start to rule out some questions into the vault 
// asking all 144 = 1 cycle
let fullCycles = 0
// note this needs to be held in localStorage, the above is just a placeholder 
// after three cycles the system does an initial assessment and shows the user what they have demonstrated

// --------------------------------------------------



// -------------------------------------------------- Get Data
// get streak data from local storage
bestStreak = localStorage.getItem('bestStreak')
// --------------------------------------------------


// -------------------------------------------------- Timing calc start 
let startTime, endTime; // init decs

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
let para = document.querySelector("p"); // this holds the rendered questions 
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
// -------------------------------------------------- Show / hide streak data


// -------------------------------------------------- Question History
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
// -------------------------------------------------- Question History


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

  if (questions144.length == 0) {
    alert("well done - you win the game")


    return
  }

  focusMethod(); // gets cursor to answer line on pressing start button
  // feedback.textContent = ""

  // here I can create totally random quetsions - use this for training 
  // I need to pull down from questions array to avoid duplicates
  console.log("////// ------------------------------- //////");
  // const testQuestionpart1 = Math.floor(Math.random() * 12 + 1); // first number to multiply
  // const testQuestionpart2 = Math.floor(Math.random() * 12 + 1); // second number to multiply

  // take one from 144 
  // next line creates random selector from questions bank 
  let arraySelect = Math.floor(Math.random() * questions144.length)

  // next line uses selector to ID question from bank
  let item = questions144[arraySelect]
  console.log("select array check: ", arraySelect)

  // next line shows which item was selected 
  console.log("selected from 144 array:", item)
  // let removed = questions144.splice(arraySelect, 1)
  // console.log("spliced out: ", removed)
  // testing removing above two lines and only slicing them out if get under 6 seconds
  console.log(questions144)

  // now to extract key numbers from spliced question 
  // get item len 
  let itemLen = item.length
  console.log("item length is: ", itemLen)

  // now get x pos from item 
  let findX = item.indexOf("x")
  console.log("x is at pos: ", findX)

  // declars vars - enables them to be used in embedded if statements below
  let testQuestionpart1
  let testQuestionpart2

  if (itemLen == 4 && findX == 1) {
    console.log("n x nn")
    let testParse1 = item[0]
    let testParse2 = item[2]
    let testParse3 = item[3]
    let testParseCombo = testParse2 + testParse3
    console.log("testParse 1:", testParse1)
    console.log("testParse combo:", testParseCombo)
    testQuestionpart1 = testParse1; // first number to multiply
    testQuestionpart2 = testParseCombo; // second number to multiply
  } else if (itemLen == 4 && findX == 2) {
    console.log("nn x n")
    let testParse1 = item[0]
    let testParse2 = item[1]
    let testParse3 = item[3]
    let testParseCombo = testParse1 + testParse2
    console.log("testParse combo:", testParseCombo)
    console.log("testParse 2:", testParse3)
    testQuestionpart1 = testParseCombo; // first number to multiply
    testQuestionpart2 = testParse3; // second number to multiply
  } else if (itemLen == 5) {
    console.log("nn x nn")
    let testParse1 = item[0]
    let testParse2 = item[1]
    let testParse3 = item[3]
    let testParse4 = item[4]
    let combo1 = testParse1 + testParse2
    let combo2 = testParse3 + testParse4
    console.log("testParse combo1:", combo1)
    console.log("testParse combo2:", combo2)
    testQuestionpart1 = combo1; // first number to multiply
    testQuestionpart2 = combo2; // second number to multiply
  } else {
    console.log("n x n")
    let testParse1 = item[0]
    let testParse2 = item[2]
    console.log("testParse 1:", testParse1)
    console.log("testParse 2:", testParse2)
    testQuestionpart1 = testParse1; // first number to multiply
    testQuestionpart2 = testParse2; // second number to multiply
  }











  // if (itemLen == 3) {
  //   let testParse1 = item[0]
  //   let testParse2 = item[2]
  //   console.log("testParse 1:", testParse1)
  //   console.log("testParse 2:", testParse2)
  //   testQuestionpart1 = testParse1; // first number to multiply
  //   testQuestionpart2 = testParse2; // second number to multiply
  // } else if (itemLen == 5) {
  //   let testParse1 = item[0, 1]
  //   let testParse2 = item[3, 4]
  //   console.log("testParse 1:", testParse1)
  //   console.log("testParse 2:", testParse2)
  //   let testQuestionpart1 = testParse1; // first number to multiply
  //   let testQuestionpart2 = testParse2; // second number to multiply
  // } else if {
  //   // if length is 4 and x is at pos 1 
  // }


  // the issue here is that the above works fine if you are multiplying single digits, but does not
  // work if you have, say, 11x3 or 4x10, or 11x12
  // so if length is 3, then the above works ok 
  // if the length is 5, then you can take 2 digits each side 
  // the issue lies with results that have a length of 4, as that could be 1x10 or 10x1
  // so we need to know where the x is located in order to extract the correct numbers from the string 



  // let arrayLen = questions144.length
  // console.log("144 len: ", arrayLen)
  // let randomNum = Math.floor(Math.random() * arrayLen)
  // console.log(randomNum)
  // let removed = questions144.splice(randomNum, 1)
  // console.log("removed:", removed)
  // arrayLen = questions144.length
  // console.log("144 len: ", arrayLen)

  // remove from initial and push to new 

  // console.log(questions144)
  // push to active questions
  // select key elements 

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
          console.log("EPIC TIME") // console feedback
          levelThree += 1; // score
          let gemID = imageID + "a" // gemID is a way to show success in the grid
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("bigSuccess") // css 
          console.log(" ------------------ gemID: " + gemID) // console feedback
          bucketA.push(imageID) // this pushes the question to the A bucket
          localStorage.setItem('leBucketA', JSON.stringify(bucketA)) // this sets local data 
          console.log("Bucket A: ", bucketA) // console feedback
          let testData2 = localStorage.getItem('leBucketA'); // pulls in what is kept in storage - problem == ALL ONE STRING HERE
          console.log("init testData bucketA: ", testData2) // console feedback
          let removed = questions144.splice(arraySelect, 1)
          console.log("spliced out on under 6 seconds: ", removed)
        } else if (seconds < 12) {
          console.log("nice work")
          levelTwo += 1; // score
          let gemID = imageID + "aa"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("success")
          console.log(" ------------------ gemID: " + gemID)
          bucketAA.push(imageID) // this pushes the question to the AA bucket
          console.log("Bucket AA: ", bucketAA)
        } else {
          console.log("good work - slow and steady")
          levelOne += 1; // score
          let gemID = imageID + "aaa"
          newColour = document.getElementById(gemID); // css
          newColour.classList.add("success")
          console.log(" ------------------ gemID: " + gemID)
          bucketAAA.push(imageID) // this pushes the question to the AAA bucket
          console.log("Bucket AAA: ", bucketAAA)
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
        bucketR.push(imageID) // this pushes the question to the R bucket
        console.log("Bucket R: ", bucketR)
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

