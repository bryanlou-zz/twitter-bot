console.log('The follow bot is starting');
var config = require('./config');
//console.log(config);
var Twit = require('twit');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow',followed);

function followed(event){
	var name  = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('.@' + screenName + ' do you like rainbows');
}

function tweetIt(txt){
	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: txt
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