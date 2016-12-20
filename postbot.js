console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
//console.log(config);
var T = new Twit(config);

tweetIt();
setInterval(tweetIt,1000*20);  // 20 second delay

function tweetIt(){
	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: 'random number ' + r + " #selfie"
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err,data,response){
		if (err){
			console.log("Something went wrong!");
		}
		else{
			console.log(tweet);
		}
	}
}