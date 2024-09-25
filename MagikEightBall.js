let userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");

const userQuestion = "Will I become a programmer?";  // Replace with the question you want to ask
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);

let eightBall = "";

switch (Math.floor(Math.random() * 8)) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy, try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(`The Magic Eight Ball says: ${eightBall}`);
