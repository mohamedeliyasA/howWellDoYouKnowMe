var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question(chalk.yellowBright("Thanks for participating in this  program \n May I know your name please? "));
console.log("\nWelcome "+ userName + "!");
console.log(chalk.underline.yellow("\nRules/Instruction"));
console.log(chalk.green("\n 1.Total of 10 questions \n 2.Each correct answer will get 2 points \n 3.One point will be deducted for each wrong answer \n 4.Please send me the screenshot if you beaten the current topper"))
var score = 0;
var Leader = "";
var LeaderScore = 0;
var participants = [{
  "Name": "Eliyas",
  "Score": 13
},
{
  "Name": "Rilla",
  "Score": 9
},
{
  "Name": "Atle",
  "Score": 15
},
{
  "Name": "Gokul Kannan",
  "Score": 17
}]

for(i = 0 ; i < participants.length ; i ++)
{
  var currentParticipant = participants[i];
  
  if (currentParticipant.Score > LeaderScore)
  {
    Leader = currentParticipant.Name;
    LeaderScore = currentParticipant.Score;
  }
}
console.log(chalk.underline.bgCyan("\nCurrent Topper"));
console.log(chalk.blueBright(" "+ Leader+": "+ LeaderScore+"\n"  ));

var userRes = readlineSync.question(chalk.yellow(userName) + ", Are you ready for a quiz test?(say yes/no): ");
function play(question, answer)
{
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() == answer)
  {
    console.log (chalk.green("You are right"));
    score = score +2;
    
  }
  else
  {
    console.log (chalk.red("Sorry, You are wrong"));
    score = score-1;
    
  }
}

var questions=[{
 question: "Which is my home town? ",
  answer: "THANJAVUR",
},
{
question: "where do I currently live? ",
  answer: "NORWAY",
},
{
question: "which school I studied my higher secondary? ",
  answer: "K.H.S",
},
{
question: "which school I studied my secondary? ",
  answer: "ST PETERS HR SEC",
},
{
question: "which city I first started my carrer ",
  answer: "BANGALORE",
},
{
question: "which is my first company? ",
  answer: "MAPLES ESM TECHNOLOGIES",
},
{
question: "which company I currently work? ",
  answer: "CTS",
},
{
question: "which is my favourite color? ",
  answer: "BLUE",
},
{
question: "which year I got married? ",
  answer: "2015",
},
{
question: "how many kids I have? ",
  answer: "TWO",
},]

if(userRes.toUpperCase() == "YES")
{
  console.log(chalk.blue("********Quiz Started**********"));
  for(var i = 0; i < questions.length ; i++ )
{
  var current = questions[i];
  console.log("Questions no: ", i+1)
play(current.question, current.answer);
}
}
else{ 
  console.log("You did not type Yes, please press play button in down and press "+chalk.red("Yes") + " if you want to play the quiz");
  process.exit() }
console.log("\n")

console.log (chalk.underline.green("Your final score: "+ score+" out of "+questions.length ));
console.log("\n")
if(score >= 17)
{
  console.log(chalk.bold.yellowBright("Congragulations!, Don't forget to send the screenshot if you beaten the topper"));
}
else{
  console.log(chalk.bold.red("you scored low, try one more time"));
}

console.log(chalk.blue("********Thank you**********"));