var num = 0;
var time;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	console.log(message);
    if(message == 'start'){
        time = setInterval(function(){
			if(num <23){
				window.open('http://www.webpagetest.org');
				console.log('testing...NO:'+num);
				num++;
			}else{
				console.log('test done');
				clearTimeout(time);
			}
		},1000*60*60);//1000*60*60
    }else if(message == 'cancel'){
		sendResponse('test canceled');
		clearTimeout(time);
	}
});