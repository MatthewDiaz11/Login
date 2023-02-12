var database = [
    {
        username: "matt",
        password: "password"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "My timeline is just beginning!"
    },
    {
        username: "Sally",
        timeline: "Javascript pro!"
    },
    {
        username: "Mitch",
        timeline: "Average at Javascript!"
    },
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username == username && database[i].password == password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What\'s your username");
var passwordPrompt = prompt("Whats\'s your password?");

signIn(userNamePrompt, passwordPrompt);