/*Using kitsu api at https://kitsu.io/api/*/
var jucator = new Object();
jucator.resurse = resurse;
jucator.profil = 2;
jucator.nume = "Nu este setat";
jucator.id = 0;
jucator.info = {};

function populateAnime(id) {
	
	var jucatorTemp='';
	
	$.get("http://127.0.0.1:8111/login",{
		profil: id
	},function(data1){
		
		jucatorTemp=data1;
		console.log(jucatorTemp);
		var x = $.getJSON("https://kitsu.io/api/edge/characters/" + jucatorTemp.split("<>|<>")[2], function (data) {});	
		
		x.complete(function (data) {
			jucator.info = data.responseJSON.data;
			$("#showProfil").click(function () {
				$("#numej").html(jucatorTemp.split("<>|<>")[1]);
				$("#numep").html(jucator.info.attributes.names.en);
				$("#povp").html(jucator.info.attributes.description);
				
				var temp_name = jucator.info.attributes.image.original;
				var temp_html = '';
				temp_html += '<img src="' + temp_name + '" class="imagine_profil"/>';
				$("#pozec").html(temp_html);
		});
	});
	});
	
}
populateAnime($.cookie("userId"));