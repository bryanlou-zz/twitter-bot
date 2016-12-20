console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
//console.log(config);
var T = new Twit(config);

var params = {
	q: 'dog',
	count: 10
};

T.get('search/tweets', params, gotData); 

function gotData(err, data, response) {
	var tweets = data.statuses;
	while(true){
	for(var i=0;i<tweets.length;i++){
		console.log(tweets[i].text);
	}
}
}