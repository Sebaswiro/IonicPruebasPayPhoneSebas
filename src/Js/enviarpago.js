var getData = function(){

	var valor = document.getElementById("valor").value;
	var telefono = document.getElementById("tele").value;
	alert(valor + " " + telefono);

	var iva = parseInt(valor) * 0.12;
	iva = iva * 100;
	valor = valor * 100;
	total = parseInt(valor) + parseInt(iva);
	alert("Valor " + valor + " Iva:" + iva + " Total " + total);


	var parametros = {phoneNumber: "998457815",
     					  countryCode: "593",
     					  amount: "1120",
     					  amountWithTax: "1000",
     					  Tax: "120",
     					  clientTransactionId: "w12"};

     	$.ajax({
	     	data: parametros,
	        url: 'https://payphone-payments-panama.azurewebsites.net/api/Sale',
	        type: 'POST',
	        beforeSend: function(xhr) {
	            xhr.setRequestHeader("Authorization", 
	        "Bearer GO9GhyFvTAEvHUNNQdx3bUjbMXB6nSXL2nxIN771-HMP2cl7rnwirRwn4eaNHq4HRbdoPWo9OKrzlw02zHh7E6a5TU7qk1zVEOF9CGYotKp04asjgi6XChRMYY4JWKi7kEXh6-Nhu4b2lxDbr1Wlo43lnlecsw0Vdzm4RI7AidCrUVkOsc9DT7IuoE4YhUM7aB-yVwMbju5sQ4pGJn0rultcbdGcJNHhZBlUq7dbKq8MH2e4pTb6ohLfu710kiRm")
	        }, success: function SolicitarPago(){
	           alert("autorizacion lista");
	        }, error: function(respuesta){
	           alert("CHUTA SE CAYO: " + respuesta);
	        } 
	    });  
}