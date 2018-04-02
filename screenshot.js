var express = require('express');
var app = express();

// File 처리 관련 라이브러리
var fs = require('fs');
var fs = require('fs-extra')

var filesInDir = [];

app.get('/MyScreenshots', function (req, res) {

    console.log('::: MyScreenshots is called');

    // Read to Directory 
    var files = fs.readdirSync('/Users/naver/MyURLScreenshot/public/images');
    var filesInDir = files;

    console.log('::: filesInDir.length : ' +filesInDir.length);

    var fileName;
    var tempDiv = '';

    // Strig to Image Path
    for ( var i = 0; i < filesInDir.length; i++) {
        fileName = filesInDir[i];
        tempDiv += ' <div class="item"><img src="./images/'+fileName+'" style="width:300px;height=400px;float:left; margin-right:10px;border:2px solid green;"/></div>'
        
    }
    
    res.write(tempDiv);
    res.end();
 });

 // Express Server Started
 app.listen(3000, function () {
   console.log('::: MyScreenshots App listening on port 3000!');
   app.use(express.static('public'));
 });