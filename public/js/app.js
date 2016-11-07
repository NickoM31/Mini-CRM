(function(){
	"use strict";

	var app = {
		urlGobal : "http://localhost:1500/crm.json",
		
		init:function(){
			app.getForm();
		},

		
		getForm: function(){
			// $('#charger').on('click', function(){
			// 	console.log("click");
			$.ajax({
				url : app.urlGobal,
				type : "GET",
				dataType: "json",
				success : function(data){
					var tab = data.customers;
					for(var i = 0; i< tab.length; i++){
						$('#liste').append("<ul id="+[i]+"></ul>");
						for (var prop in tab[i]) {
							$("#"+i).append("<ul>"+tab[i][prop]+"</ul>")

							console.log(tab[i]);
						};

						// $('#liste').append('<li>'+'<div>' + 'id:'+ tab[i].id + '</div>'+'</li>'
						// + '<div>'+ );

						
					};

				}
			});

		},
		







		
		
		
	};



	$(document).ready(function(){
		app.init();
	});
})();