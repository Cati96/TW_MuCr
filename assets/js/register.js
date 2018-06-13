//Metoda principale de populat selectul de la profil si eventul selectului de a afisa datele profilului selectat
function PopuleazaAnimeuriProfil() {
	//apelam apii-ul ce returneaza numele si id-ul animeurilor
	var x = $.getJSON("https://kitsu.io/api/edge/characters", function (data) {
		console.log("loading");
	}).done(function () {});
	//executam un trigger cand se termina de incarcat raspunsul requestului la api
	x.complete(function (data) {
		//recuperam doar datele animeurilor din raspuns si le salvam intr-o variabila var
		var db = data.responseJSON.data;
		console.log(db);
		//incepem crearea html-ului pentru select cu datele din variabila mai sus creata
		var htmla = '';
		htmla += '<label>Select Avatar</label><br><select class="select_avatar">\n';
        htmla += '<option value = "select"> ---Select--- </option>\n';
		for (var i = 0; i < db.length; i++) {
			htmla += '<option value="' + db[i].id + '">' + db[i].attributes.names.en + '</option>\n';
		}
		htmla += '</select>';
		//introducem codul selectului populat cu date in pagina noastra
		$(".avatar").html(htmla);
		//cream un trigger pe select care in momentul modificarii acestuia citeste id-ul animeului selectat si apeleaza un alt api pt a returna toate datele acestuia
		$('.select_avatar').on('change', function () {
			console.log("selectat " + this.value);
			var x = $.getJSON("https://kitsu.io/api/edge/characters/" + this.value, function (data) {});
			x.complete(function (data) {
				console.log(data.responseJSON.data);
				var character = data.responseJSON.data;
				$(".pinfo").show();
				$("#nick").html(character.attributes.names.en);
				$("#poveste").html(character.attributes.description);
				$(".selected-profile").attr("src", character.attributes.image.original);
				$(".selected-profile").attr("id", character.id);
			});
		})
	});
}
//executam metoda mai sus creata
PopuleazaAnimeuriProfil();
$("#register").click(function () {
	$.get("http://127.0.0.1:8111/register", {
		"username": $("#username").val()
		, "password": $("#password").val()
		, "email": $("#email").val()
		, "name": $("#fname").val()
		, "avatar": $(".selected-profile").attr("id")
	}, function (data) {
		if (data == "valid") {
			alert("User registered");
			window.location.href = "index.html";
		}
		else {
			alert("User Not Created ! Server returned " + data);
		}
	});
});