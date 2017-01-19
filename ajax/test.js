$(document).ready(function(){
	$.ajax({
		dataType: "json",
		url: "http://swapi.co/api/people",
		success: function(data){
			console.log(data.results.forEach(function(element){
				console.log(element.name)
			}))
		}
	});
	//print out another object with an attribute that is has
	$.ajax({
		dataType: "json",
		url: "http://swapi.co/api/planets",
		success: function(rock){
			console.log(rock.results.forEach(function(orb){
				console.log(orb.name)
			}))
		}
	});
});