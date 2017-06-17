"use strict";

function createOptions(array){
	var selected = $("<select></select>");
	var option = $("<option></option>");
	option.text("Selecciona una especie");
	option.attr("hidden", "");
	selected.append(option);
	array.forEach((elem)=>{
		var optionFamily = $("<option></option>");
		var people = elem.people[0];
		console.log(people);
		optionFamily.val(people.slice(people.length-3));
		console.log((people.slice(people.length-3)));
		optionFamily.text(elem.name);
		selected.append(optionFamily);
	})

	return selected;
}