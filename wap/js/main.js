if(window.Worker){
	var worker = new Worker("worker.js");
	worker.onmessage = function(e){
		result.innerHTML = e.data;
	};
	worker.postMessage("teste");
	document.write(worker);
	console.log("log"); 
}
