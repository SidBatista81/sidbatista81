//var VERSION
if(window.Worker){ 
	console.log("Registrando o worker")
	worker = new Worker('js/worker.js')
	try{
		result.innerHTML = VERSION;
	} catch(ex){
		result.innerHTML = ex;
	}
	worker.onmessage = function(e){
		result.innerHTML = e.data;
	}
	worker.postMessage("Enviando mensagem...");
	//navigator.serviceWorker.register('js/worker.js');
}
