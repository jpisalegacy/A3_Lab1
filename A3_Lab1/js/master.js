$(document).foundation();

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");

$('.click').on('click',function(){
		$.getJSON('includes/ajaxQuery.php',{model:this.id},function(data){
			console.log(data);
			$('.modelName').text(data.modelName);
			$('.hidden').removeClass('.hidden');

			$('.priceInfo').text(data.pricing);
			$('.modelDetails').text(data.modelDetails);
		});
	});
	
})();