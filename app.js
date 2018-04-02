// Filesystem Library
var fs = require('fs');

// Node JS 내부에서 OS Command 실행 
var exec = require('child_process').execSync,
    child;

//실행 URL 지정
var arvgStr = process.argv[2];

// 해상도별 파일명 지정
const DISPLAY_480 = '480x320.png';
const DISPLAY_800 = '800x480.png';
const DISPLAY_1280 = '1280x1024.png';

console.log('==========================================');
console.log('::: MyURLToImage App is started...');
console.log('==========================================');
console.log('::: Target URL : ' + arvgStr);

console.log('::: Converting Image : 1280x1024 800x480 480x320');

// PhantomJS를 이용하여 특정 URL을 Image로 변환
child = exec("pageres " + arvgStr + " 1280x1024 800x480 480x320 --delay=20 --overwrite", function (error, stdout, stderr) {            
    if (error !== null) {
        console.log('exec error: ' + error);
    } else {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    }
});

console.log('::: Execute Command : pageres ' + arvgStr  +' 1280x1024 800x480 480x320 --delay=7 --overwrite');
console.log('::: Converted Image : 1280x1024 800x480 480x320');
console.log('\n');  

// child = exec("sleep 4", function (error, stdout, stderr) {            
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
// });

var postFix = '';

// 변환된 이미지를 NCP File Storage에 저장
for(var i=0; i < 3; i++){
    
    if (i == 0) {
        postFix = arvgStr+"-"+DISPLAY_480;
    } else if (i == 1) {
        postFix = arvgStr+"-"+DISPLAY_800;
    } else {
        postFix = arvgStr+"-"+DISPLAY_1280;
    }

    // File Storage CLI 실행 & 저장
    child = exec("/Users/naver/MyURLScreenshot/CLI/ncfscmd.sh put " + postFix + " ncfs://MyURLToImage", function (error, stdout, stderr) {            
        
        console.log('::: ' + postFix + ' file(s) copied to NCP File Storage Container.');
        console.log('::: Command : /Users/naver/MyURLScreenshot/ncfscmd.sh put ' + postFix + ' ncfs://MyURLToImage' );
        console.log('\n');  

        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });

  
}


