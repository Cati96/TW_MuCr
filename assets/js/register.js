//Metoda principale de populat selectul de la profil si eventul selectului de a afisa datele profilului selectat
function PopuleazaAnimeuriProfil() {
	//apelam apii-ul ce returneaza numele si id-ul animeurilor
	var x = $.getJSON("https://private-anon-11bdd5b450-jikan.apiary-proxy.com/search/character/Code/5", function (data) {
		console.log("loading");
	}).done(function () {});

	//executam un trigger cand se termina de incarcat raspunsul requestului la api
	x.complete(function (data) {
		//recuperam doar datele animeurilor din raspuns si le salvam intr-o variabila var
		var db = data.responseJSON.result;
		//incepem crearea html-ului pentru select cu datele din variabila mai sus creata
		var htmla = '';
		htmla += '<label>Select Avatar</label><br><select class="select_avatar">';
		console.log(db.length);
		
		for (var i = 0; i < db.length; i++) {
			htmla += '<option value="' + db[i].mal_id + '">' + db[i].name + '</option>';
		}

		htmla += '</select>';
		//introducem codul selectului populat cu date in pagina noastra
		$(".avatar").html(htmla);
		//cream un trigger pe select care in momentul modificarii acestuia citeste id-ul animeului selectat si apeleaza un alt api pt a returna toate datele acestuia
		
		$('.select_avatar').on('change', function () {
			console.log("selectat " + this.value);
			var x = $.getJSON(" https://private-anon-11bdd5b450-jikan.apiary-proxy.com/character/" + this.value + "/pictures", function (data) {});
			x.complete(function (data) {
				console.log(data.responseJSON);
				var character = data.responseJSON;
				$(".pinfo").show();
				$("#nick").html(character.name);
				$("#poveste").html(character.about);
				$(".selected-profile").attr("src", character.image[0]);
				$(".selected-profile").attr("id", character.mal_id);
			});
		})
	});
}

//executam metoda mai sus creata
//PopuleazaAnimeuriProfil();
$("#register").click(function(){
	$.get("http://localhost:8111/register",{
		"username":$("#username").val(),
		"password":$("#password").val(),
		"email":$("#email").val(),
		"name":$("#fname").val(),
		"avatar":"Unavailable"
	},function(data){
		if(data == "valid"){
			alert("User registered");
			window.location.href="index.html";
		}else{
			alert("User Not Created ! Server returned "+data);
		}
	})
});