
currently questionsw are checked against local storage to see if they have been asked before 
this does not deliver what i need

the game should be triggered by pressing 'GO'

once started, the game will count down - initially - all 144 questions 

but over time the ones you can answer quickly and correctly go into 'bucket 1'
b1 = things you can answer correctly two times in a row and also within 5 seconds 
Anyting in b1 is considered 'safe'

anything you get correct, but is not within 5 seconds and is less than 10 seconds goes into bucket 2 
b2 = things you know but could be faster at 

anything you get correct but is over 10 seconds goes into b3 = things you do need to be faster at 

anything you get wrong goes into b4 = things you need to get right!

Each question can rank up or rank down
Each question has a history up to 10 answers 
history will also show which bucket it was in after each answer 

there should be an initial pass of all 144 questions in order to get a baseline data feed 
once done, you have 4 buckets populated 
there should an another repeat of this to get a second view of things 

you then have some games - based on data
you can choose which game to play
you can see which questions are in which buckets 
 

game 1 - promote b2 to b1
here you can work on your questions that are under 10 seconds, to try to get them into b1 
we want three right answers inder 5 secs
This will go through all questions in this bucket until all done
at end it will ask - another game?
as soon as a question ranks up - pause them game and give a star

game 2 - promote b3 to b2 or b1
here you can work on your questions that are under 10 seconds, to try to get them into b1 
we want three four answers under 10 seconds to rank them up
This will go through all questions in this bucket until all done
at end it will ask - another game?
as soon as a question ranks up - pause them game and give a star

game 3 - resolve b4 to b3 
you have got these wrong in the past 
by replaying these you can rank them up to b3 2 or even 1 
to rescue a question you have to get it right three times 
if correct three times it will go to the slowest bucket 



to-do
we need to be able to commence and end the game 
section to show history iof each question asked - last 10 answers and times 

streak data needs to be at bottom
each game needs to calc turns taken and turns left - so player knows extent of each game assessment 
current streak is not really needed, as you wont be checking that whne you answer questions

each game is run from script, and only sends data to DB at the end
The end screen also shows stats for that game in a modal

so initial pass - first time play - needs to refer to a localStorage bool
hasDoneFirst144?
hasDoneSecond144?
how long does 144 take?

7.50 - 7.57

another idea - sam said also - can you choose a specific tt to practice?
how about here - you have a non-scored practice, where you choose a tt, and it will 
randomnly ask you questions either sequentially or randomly
this is practice - goes on until say stop, and does not record scores
it does say when you are right though :)



data model
each question has a data object 

2x6 {
  current bucket residence
  last result and time
  last ten results and times
  if it is a time it can be graded as b 1 2 3 - if wrong it goes straight into b4 
  so do you only need to record times?
}

2x6 {
  results [
    "3.4"
    ]
}


objective for today - get local storage to record a growing array of answers to each question - and limit storage to 10 answers 




learn - flow text
learn - lorum pixels - random images free

----

from scratch, you need to complete 144 questions 
when done you get an award - done144
This ^^ is game type 1 
before complete, gameType144 = false 
when all done, in one session, gameType144 = true 
so when start, check is gameType144 == true? 
if no, do 144, if yes, unlock DDL 
in order to apply flag, you must be able to track when 144 is over 
so next task - count questions that have had answers 
note - pressing enter counts as a question - ie removes answer from array !

---

ok, so i now am able to only splice out a question from the main 144 array, only if answered in under 6 seconds.
everything else essentially gets recycled
there must be a check made
