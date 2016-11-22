var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('jquery-3.1.1.min.js');
s2.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s2);

setTimeout(function() {
    var s = document.createElement('script');
	s.src = chrome.extension.getURL('script.js');
	s.onload = function() {
	    this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
}, 100);



