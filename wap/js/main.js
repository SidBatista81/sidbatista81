if(window.Worker){ 
	try{
		result.innerHTML = VERSION;
	} catch(ex){
		result.innerHTML = ex;
	}
	navigator.serviceWorker.register('js/worker.js');
}
