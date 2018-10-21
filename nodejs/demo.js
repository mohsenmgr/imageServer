var express = require('express');
var app = express();

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-10-20',
  iam_apikey: 'ecuVM_GfJ8R3JPiZq5bVd_QNXUrBMWFdB6Er6S9vTzZf',
  url: "https://gateway.watsonplatform.net/visual-recognition/api"
});

//here goes the input of user
var images_file = fs.createReadStream('./test2.jpeg');

//classifier id 
var classifier_ids = ["wildfire_1266669216"];

var params = {
  images_file: images_file,
  classifier_ids: classifier_ids
};

app.get('/', function (req, res) 
{
	visualRecognition.classify(params, function(err, response) {
	  if (err)
	    res.send("Error " + err);
	  else
	  	var data = JSON.stringify(response, null, 2);
	    res.send(data);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});