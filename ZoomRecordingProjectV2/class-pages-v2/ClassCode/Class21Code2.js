var database =
[
  {
    username: "yankle",
    password: "supersecret"
  }
];

var newsFeed =
[
  {
    username: "shmendrick",
    timeline: "So tired from all that learning"
  },
  {
    username: "berle",
    timeline: "Javascript is soo cool"
  }
];


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What is your password?");


function signIn(user, pass)
{
  if(user === database[0].username &&
    pass === database[0].password)
    {
      console.log(newsFeed);
    }
    else
    {
      alert("Sorry, wrong username and password!");
    }
}

 signIn(userNamePrompt, passwordPrompt);
