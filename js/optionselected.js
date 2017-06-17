"use strict";

function selectedOptions(array){
	var divSelected = $("<div></div>");
	var p = $("<p></p>");
	console.log(array);

	$("select").change(function(e){
		alert($("select").val());
		alert(e);
		console.log(array);
		divSelected.empty();
		console.log(array.this);
		p.text(array.this);
		divSelected.append("Mi nombre es:" + p);
	})
	
	// array.forEach((elem)=>{
		
		// console.log(elem);
		
		
	// })

	return divSelected;
}