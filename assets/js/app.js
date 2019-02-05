// Variables
const tweetList = document.getElementById("tweet-list");

// Event Listeners
eventListeners();

function eventListeners() {
  // Form Submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  //Remove Tweet from the list
  tweetList.addEventListener("click", removeTweet);

  //Document
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}

// Functions

function newTweet(e) {
  e.preventDefault();

  //Read the text area value
  const tweet = document.getElementById("tweet").value;

  //Create the remove button
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  //Create an <li> element
  const li = document.createElement("li");
  li.textContent = tweet;

  //Add the remove button to each tweet
  li.appendChild(removeBtn);

  //Add to the list
  tweetList.appendChild(li);

  //Add to local storage
  addTweetLocalStorage();
}

//Removes the tweets fromt he DOM
function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }
}

//Adds the tweets into the local storage
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsFromStorage();
  //Add the tweet into the array
  tweets.push(tweet);
  //convert tweet array into a string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromStorage() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");
  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

//Prints local storage Tweets on load
function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();

  //Loop through and then print the values
  tweets.forEach(function(tweet) {
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    //Create an <li> element
    const li = document.createElement("li");
    li.textContent = tweet;

    //Add the remove button to each tweet
    li.appendChild(removeBtn);

    //Add to the list
    tweetList.appendChild(li);
  });
}
