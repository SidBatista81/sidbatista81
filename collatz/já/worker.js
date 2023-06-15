onmessage=function(e){

	postMessage("Aguarde...");	var f = function(){

		if(f){

			postMessage(++i);

			setTimeout(f, 300); 

		}else {

			postMessage("Nāo definido");

		}

	};

	f();

	/*function (){

		setTimeout(function (){postMessage(++i);}, 1000);

	}();//*/

}
