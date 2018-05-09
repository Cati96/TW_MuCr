/*HELPERS*/
$('#loginbtn').click(function () {
	$('#login').show();
	$('#login').removeClass("fade");
});

$('#showProfil').click(function () {
	$('#profil').show();
	$('#profil').removeClass("fade");
});

$('#registerbtn').click(function () {
	$('#register').show();
	$('#register').removeClass("fade");
});

$(".construieste").click(function () {
	if ($(this).attr("data-dismiss") == "modal") {
		$(this).parent().parent().parent().parent().parent().hide();
		$("modal").addClass("fade");
	}
});

$(".btn").click(function () {
	if ($(this).html() == "Close") {
		$(this).parent().parent().parent().parent().hide();
		$("modal").addClass("fade");
	}
});
$(".close").click(function () {
	if ($(this).attr("data-dismiss") == "modal") {
		$(this).parent().parent().parent().parent().hide();
		$("modal").addClass("fade");
	}
});
var curentId = "";
/*
Functia construieste ia trei parametri: id, cladire, nivel
Se apeleaza de fiecare data cand utilizatorul - care joaca rolul de primar - doreste sa construiasca o casa; daca utilizatorul are suficiente resurse se apeleaza functiile removeClass si addClass, functii specifice jQuery, altfel se afiseaza un mesaj corespunzator.
Atunci cand face match pe un anumit id, functia removeClass elibereaza zona de contruire si in acelasi loc se construieste cladirea aleasa cu ajutorul functiei addClass si se marcheaza terenul ca "ocupat"
*/
function construieste(id, cladire, nivel) {
	if (checkC(nivel, getBid(cladire))) {
		$("#" + id).removeClass("free");
		$("#" + id).removeClass("construieste");
		$("#" + id).addClass(cladire);
		$("#" + id).addClass(cladire + nivel);
		$("#" + id).addClass("ocupat");
	}
	else {
		alert("Mai asteapta. Resurse insuficiente");
	}
}
/*
Functia getBid primeste ca parametru un tip de cladire si returneaza un numar specific acesteia.
*/
function getBid(cladire) {
	if (cladire == "casa") {
		return 1;
	}
	if (cladire == "bloc") {
		return 2;
	}
	if (cladire == "apa") {
		return 3;
	}
	if (cladire == "fabrica") {
		return 4;
	}
	if (cladire == "it") {
		return 5;
	}
	if (cladire == "rafinarie") {
		return 6;
	}
	if (cladire == "termopane") {
		return 7;
	}
}
/*
Functie specifica jQuery. La producerea evenimentului click pe un anumit spatiu, se verifica daca spatiul este ocupat sau nu. 
Daca nu este ocupat atunci pentru id-ul "builder" si clasa "modal" se afiseaza imediat pop-up-ul/modalul cu o lista de constructii disponibile si se preia id-ul curent al casutei/spatiului cand te duci cu mouse-ul.
Daca nu este ocupat atunci pentru id-ul "builder" si clasa "modal" se afiseaza imediat pop-up-ul cu o lista de constructii disponibile.
Altfel, daca este ocupat se face un updgrade la cladire in functie de tipul acesteia: casa, bloc, apa ( statie de epurare), rafinarie, fabrica, it, termopane.
*/
$('.free').click(function () {
	if (!$(this).hasClass("ocupat")) {
		$('#builder').show();
		$('#builder').removeClass("fade");
		curentId = $(this).attr("id");
	}
	else {
		$('#upgrade').show();
		$('#upgrade').removeClass("fade");
		curentId = $(this).attr("id");
		if ($(this).hasClass("casa")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="4">Nivel 4</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="5">Nivel 5</button></div>';
			$(".upgradeBody").html(html_cont);
			$(".nivel").click(function () {
				construieste(curentId, "casa", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
		if ($(this).hasClass("bloc")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="4">Nivel 4</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="5">Nivel 5</button></div>';
			$(".upgradeBody").html(html_cont);
			$(".nivel").click(function () {
				construieste(curentId, "bloc", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
		if ($(this).hasClass("apa")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			$(".upgradeBody").html(html_cont);
			$(".nivel").click(function () {
				construieste(curentId, "apa", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
		if ($(this).hasClass("fabrica")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="4">Nivel 4</button></div>';
			$(".upgradeBody").html(html_cont);
			$(".nivel").click(function () {
				construieste(curentId, "fabrica", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
		if ($(this).hasClass("it")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
			$(".upgradeBody").html();
			$(".nivel").click(function () {
				construieste(curentId, "it", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
		if ($(this).hasClass("termopane")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
			$(".upgradeBody").html(html_cont);
			$(".nivel").click(function () {
				construieste(curentId, "termopane", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
		if ($(this).hasClass("rafinarie")) {
			var html_cont = "";
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
			html_cont += '<div class="row"><p  id ="upgradeText">Construieste nivel 1</p><button type="button" class="btn btn-upgrade nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
			$(".upgradeBody").html(html_cont);
			$(".nivel").click(function () {
				construieste(curentId, "rafinarie", $(this).attr("nivel"));
				$(this).parent().parent().parent().parent().parent().hide();
			});
		}
	}
});
/*
Functie specifica jQuery. La producerea evenimentului click pe spatiul primariei, se verifica la ce nivel se vrea construita primaria si daca sunt suficienti bani. Daca sunt suficienti bani atunci se construieste primaria la nivelul dorit, altfel se afiseaza mesajul corespunzator.
*/
$('.primarie').click(function () {
	$('#primarie').show();
	$('#primarie').removeClass("fade");
	$(".nivPrimarie").click(function () {
		if ($(this).attr("nivel") == 1 && bani >= 10) {
			$('.primarie').parent().parent().removeClass("primarie1");
			$('.primarie').parent().parent().removeClass("primarie2");
			$('.primarie').parent().parent().removeClass("primarie3");
			$('.primarie').parent().parent().addClass("primarie" + $(this).attr("nivel"));
			bani -= 10;
		}
		else if ($(this).attr("nivel") == 2 && bani >= 5000) {
			$('.primarie').parent().parent().removeClass("primarie1");
			$('.primarie').parent().parent().parent().parent().removeClass("primarie2");
			$('.primarie').parent().parent().removeClass("primarie3");
			$('.primarie').parent().parent().addClass("primarie" + $(this).attr("nivel"));
			bani -= 5000;
		}
		else if ($(this).attr("nivel") == 3 && bani >= 10000) {
			$('.primarie').parent().parent().removeClass("primarie1");
			$('.primarie').parent().parent().removeClass("primarie2");
			$('.primarie').parent().parent().removeClass("primarie3");
			$('.primarie').parent().parent().addClass("primarie" + $(this).attr("nivel"));
			bani -= 10000;
		}
		else {
			alert("Nu ai destui bani !");
		}
	});
});
/*
Functie specifica jQuery. Functia/eventul click reprezinta activatorul de buton
*/
$(".construieste").click(function () {
	construieste(curentId, $(this).attr("cladire"), "1");
});
$(".close").click(function () {
	$(this).parent().parent().parent().parent().css("display", "none");
});