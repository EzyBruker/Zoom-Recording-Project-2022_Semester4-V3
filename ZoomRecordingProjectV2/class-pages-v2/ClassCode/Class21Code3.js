var database =
[
  {
    username: "yankle",
    password: "supersecret"
  },
  {
    username: "leah",
    password: "12345"
  },
  {
    username: "yentle",
    password: "987"
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
  },
  {
    username: "tirze",
    timeline: "Can't wait to learn more"
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What is your password?");
//

//
// function signIn(username, password)
// {
//   for (var counter = 0; counter < database.length; counter++)
//   {
//     if(database[counter].username === username &&
//         database[counter].password === password)
//         {
//           console.log(newsFeed);
//         }
//         else
//         {
//             alert("Sorry, wrong username and password");
//         }
//   }
// }
  // if(username === database[0].username &&
  //  password === database[0].password)
  //  {
  //    console.log(newsFeed);
  //  }
  //  else
  //  {
  //    alert("Sorry, wrong username and password!");
  //  }
////This program has two parts a sign in function which prints out the facebook newsFeed
// if you are a valid user and an error message if you are not - and
// a isuservalid function which uses a for loop to test the user name entered against the
//database array of objects
 //
  signIn(userNamePrompt, passwordPrompt);
 // //

 function isUserValid(username, password)
 {
   for (var counter = 0; counter < database.length; counter++)
   {
    if(database[counter].username === username &&
        database[counter].password === password)
        {
          return true;
        }
    }
   return false;
 }

//
// function signIn(username, password) {
//   console.log(isUserValid(username, password));
// }
function signIn(username, password)
{
  if(isUserValid(username, password))
  {
    console.log(newsFeed);
  }
  else
  {
      alert("Sorry, wrong username and password!");
  }
}
