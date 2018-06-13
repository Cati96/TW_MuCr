function checkC(nivel, tip) {
	console.log(nivel + " * " + tip + " vs " + bani);
	var posibil = false;
	if (tip == 1) {
		//--Casa--resurse necesare construirii unei case de nivelul nivel
		console.log(buildR.casa[0] * nivel + " - " + bani + "|" + buildR.casa[1] * nivel + " - " + angajati + "|" + buildR.casa[2] * nivel + " - " + consum + "|" + buildR.casa[3] * nivel + " - " + consumApa + "|");
		//--Daca am resursele necesare--> scad resursele necesare construirii si setez posibil to true
		if ((buildR.casa[0] * nivel) <= bani && (buildR.casa[1] * nivel) <= angajati && (buildR.casa[2] * nivel) <= consum && (buildR.casa[3] * nivel) <= consumApa) {
			bani -= buildR.casa[0] * nivel;
			posibil = true;
		}
	}
	if (tip == 2) {
		//--BLoc--daca am resursele necesare construirii unui bloc de nivelul nivel -> construiesc
		if ((buildR.bloc[0] * nivel) <= bani && (buildR.bloc[1] * nivel) <= angajati && (buildR.bloc[2] * nivel) <= consum && (buildR.bloc[3] * nivel) <= consumApa) {
			bani -= buildR.bloc[0] * nivel;
			posibil = true;
		}
	}
	if (tip == 3) {
		//--Statie epurare--daca am resursele necesare construirii unei statii de epurare de nivelul nivel -> construiesc
		if ((buildR.apa[0] * nivel) <= bani && (buildR.apa[1] * nivel) <= angajati && (buildR.apa[2] * nivel) <= consum && (buildR.apa[3] * nivel) <= consumApa) {
			bani -= buildR.apa[0] * nivel;
			posibil = true;
		}
	}
	if (tip == 4) {
		//--Fabrica--daca am resursele necesare construirii unei fabrici  de nivelul nivel -> construiesc
		if ((buildR.fabrica[0] * nivel) <= bani && (buildR.fabrica[1] * nivel) <= angajati && (buildR.fabrica[2] * nivel) <= consum && (buildR.fabrica[3] * nivel) <= consumApa) {
			bani -= buildR.fabrica[0] * nivel;
			posibil = true;
		}
	}
	if (tip == 5) {
		//--Companie it--daca am resursele necesare construirii unei companii it de nivelul nivel -> construiesc
		if ((buildR.it[0] * nivel) <= bani && (buildR.it[1] * nivel) <= angajati && (buildR.it[2] * nivel) <= consum && (buildR.it[3] * nivel) <= consumApa) {
			bani -= buildR.it[0] * nivel;
			posibil = true;
		}
	}
	if (tip == 6) {
		//--Rafinarie (genereaza curent)--daca am resursele necesare construirii unei rafinarii de nivelul nivel -> construiesc
		if ((buildR.rafinarie[0] * nivel) <= bani && (buildR.rafinarie[1] * nivel) <= angajati && (buildR.rafinarie[2] * nivel) <= consum && (buildR.rafinarie[3] * nivel) <= consumApa) {
			bani -= buildR.rafinarie[0] * nivel;
			posibil = true;
		}
	}
	if (tip == 7) {
		//--Firma termopane--daca am resursele necesare construirii unei firme de termopane de nivelul nivel -> construiesc
		if ((buildR.termopane[0] * nivel) <= bani && (buildR.termopane[1] * nivel) <= angajati && (buildR.termopane[2] * nivel) <= consum && (buildR.termopane[3] * nivel) <= consumApa) {
			bani -= buildR.termopane[0] * nivel;
			posibil = true;
		}
	}
	return posibil;
}

function activateMechanics() {
	window.setInterval(function () {
		resurse = setConstants();
		//<<----Calcule a tutuor "resurselor" din joc la fiecare 1 secunda--->>
		populatie = (resurse.casa * 2) + (resurse.bloc * 3);
		angajati = populatie - (resurse.fabrica * 12) - (resurse.termopane * 5) - (resurse.it * 16)
		curent = resurse.rafinarie * 15;
		consum = curent - (resurse.bloc * 0.5) - (resurse.fabrica * 1.6) - (resurse.termopane * 0.3) - (resurse.it * 2.1) - (resurse.apa * 0.08);
		castig = resurse.primarie * (1 + resurse.fabrica * 3 + resurse.it * 6 + resurse.termopane * 2);
		bani += castig;
		apa = resurse.apa;
		consumApa = apa - (resurse.bloc * 0.3) - (resurse.fabrica * 0.5) - (resurse.termopane * 0.1);
		//<<-----Preluare total monede--- >>
		$("#bani").html(bani);
		//<<-----Preluare populatie libera cu precizie 2---->>
		$("#populatie").html(angajati.toFixed(2) + "/" + populatie);
		//<<--------Preluare cantitatea de curent actuala cu precizie 2---->>
		$("#curent").html(consum.toFixed(2) + "/" + curent);
		//<<>-------Preluare cantitate apa actuala cu precizie 2---momentan denumita utilitati--->>
		$("#apa").html(consumApa.toFixed(2) + "/" + apa);
	}, 1000);
}

function saveData() {
	var saved = new Object();
	saved.id = $.cookie("userId");
	saved.bani=bani;
	saved.buildings = [];
	
	var plevel=getPrimarieClass();
	saved.primarie=plevel;
	$(".caseta4").each(function () {
		saved.buildings.push($(this).attr('class').split(/\s+/));
	});
	localStorage.setItem("savedata",btoa(JSON.stringify(saved)));
    var currentPoints = parseInt(0.35 * saved.bani + 0.25 * populatie + 0.15 * apa + 0.15 * curent + 0.1 * angajati, 10) ;
    console.log("currentPoints:" + currentPoints);
	$.get("http://localhost:8111/save",{
		"userId":$.cookie("userId"),
		"saveData":btoa(JSON.stringify(saved)),
        "points":currentPoints
	},function(){console.log("Saved"); console.log(saved);});
}
function classCreator(arr){
	var s1="";
	for(var i=0;i<arr.length;i++){
		s1+=arr[i]+" ";
	}
    console.log("s1 = " + s1);
	return s1;
}
function getPrimarieClass(){
	return $("#main_activity").attr("class");
	
}
function loadData(code){
	var ldata=JSON.parse(atob(code));
	bani=ldata.bani;
	var idcasuta=0;
	$(".caseta4").each(function () {
		$(this).attr('class',classCreator(ldata.buildings[idcasuta]));
		idcasuta++;
	});
	console.log(ldata.primarie);
	$(".primarie1").attr("class",ldata.primarie);
	$(".primarie2").attr("class",ldata.primarie);
	$(".primarie3").attr("class",ldata.primarie);
	
}
$(document).ready(function () {
	if ($.cookie("userId")) {
		activateMechanics();
		if(localStorage.getItem("savedata")){
			loadData(localStorage.getItem("savedata"));
		}
		window.setInterval(saveData,5000);
	}
	
});