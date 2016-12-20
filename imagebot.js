console.log('The image bot is starting');

var Twit = require('twit');

var fs = require('fs');

var config = require('./config');
//console.log(config);
var T = new Twit(config);

var exec = require('child_process').exec;

tweetIt();

function tweetIt(){
	var x = 0;
	var cmd = 'processing-java --sketch =`pwd`/rainbow --run'
	exec(cmd,processing);


	function processing(){
		var filename = 'rainbow/output.png';
		var params = {
			encoding: 'base64'
		}
		var b64content = fs.readFileSync(filename,params);

		T.post('media/upload', { media_data: b64content },uploaded);
		function uploaded(err,data,response) {
			var id =data.media_id_string;
			var tweet = {
				status: 'fractal rendering',
				media_ids: [id]
			}
			T.post('statuses/update',tweet,tweeted);
		}

		function tweeted(err,data,response){
			if(err){
				console.log("Something went wrong!");
			} else{
				console.log("it worked!");
			}
		}
	}
}

