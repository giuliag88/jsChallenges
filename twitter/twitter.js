var newTweet;
var newTweetText = document.querySelectorAll(".input")[0];
var button = document.querySelectorAll(".button")[0];
var newTweetWrapper = document.querySelectorAll(".element-wrapper")[0];
	
var regEx = /fuck?|shit?/i;


button.addEventListener(
	"click",
	function(event) {
		newTweet = "<li class=\"element\">" + newTweetText.value + "</li>"
		if (regEx.test(newTweet) === true) {
			alert("not allowed");
		}
		else {
			newTweetWrapper.insertAdjacentHTML("afterbegin", newTweet);
		}
		
	}
);


// How to check if a big text contains bad words?
// - need to have a "list/library" of bad words to refer to. 
// - need the list/library to be organised in alphabetical order. 
// - if for example I need to check a word starting with F, I will refer to the list "F" section directly
