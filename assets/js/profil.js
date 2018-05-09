/*Using jikan api at https://jikan.docs.apiary.io/#*/
var jucator = new Object();
jucator.resurse = resurse;
jucator.profil = 40450;
jucator.nume = "Nu este setat";
jucator.id = 0;
jucator.info = {};

function populateAnime(id) {
	var x = $.getJSON(" https://private-anon-11bdd5b450-jikan.apiary-proxy.com/character/" + id + "/pictures", function (data) {});
	x.complete(function (data) {
		jucator.info = data.responseJSON;
		$("#showProfil").click(function () {
			$("#numej").html(jucator.nume);
			$("#numep").html(jucator.info.name);
			$("#povp").html(jucator.info.about);
			var temp_name = jucator.info.image;
			var temp_html = '';
			for (var i = 0; i < temp_name.length; i++) {
				temp_html += '<img src="' + temp_name[i] + '" class="imagine_profil"/>';
			}
			$("#pozec").html(temp_html);
		});
	});
}
populateAnime(jucator.profil);