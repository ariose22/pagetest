window.onload = function(){
	
	$('a#start').click(function(e){
		e.preventDefault();
		chrome.runtime.sendMessage('start', function(response){
		    document.write(response);
		});
		window.open('http://www.webpagetest.org');
	});
	$('a#cancel').click(function(e){
		e.preventDefault();
		chrome.runtime.sendMessage('cancel', function(response){
		    document.write(response);
		});
	});
}

