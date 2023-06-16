if(window.Worker){ 
	result.innerHTML="MAIN"
	navigator.serviceWorker.register('js/worker.js');
	
	
}
