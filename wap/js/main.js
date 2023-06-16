if(window.Worker){
	navigator.serviceWorker.register('/js/worker.js')
	var worker = ew Worker("js/worker.js");
	worker.onmessage = function(e){
		result.innerHTML = e.data;
	};
	worker.postMessage("teste");
	document.write(worker);
	console.log("log"); //*/
}

        
