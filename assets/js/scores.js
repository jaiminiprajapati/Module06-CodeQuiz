// Retrieve user initials and scores from localStorage
const userInitials = localStorage.getItem("initial");
const userScores = localStorage.getItem("score");

// Get references to the clear button and the highscores list element
const clearBtn = document.getElementById("clear");
var highScoreListElement = document.getElementById("highscores");

// Create a new list item element and set its text content to display user initials and scores
var li = document.createElement("li");
li.innerText = userInitials + " - " + userScores;

// Append the new list item to the highscores list
highScoreListElement.appendChild(li);

// Add event listener to the clear button to remove the displayed highscore
clearBtn.addEventListener("click", function(){
    li.remove();
});