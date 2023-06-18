//var VERSION
processaParâmetros((new URL(document.location)).searchParams)
if(window.Worker){ 
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

function processaParâmetros(parâmetros){
	var alvo = parâmetros.get('alvo');
	if(alvo) conteudo.src = alvo;
}
