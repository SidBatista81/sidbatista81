if(window.Worker){ 
	result.innerHTML="Não implementado."
	navigator.serviceWorker.register('js/worker.js');
}
