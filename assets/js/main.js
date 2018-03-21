var curentId = "";

/*
Functia buildBuilding ia trei parametri: id, cladire, nivel
Se apeleaza de fiecare data cand utilizatorul - care joaca rolul de primar - doreste sa construiasca o casa; daca utilizatorul are suficiente resurse se apeleaza functiile removeClass si addClass, functii specifice jQuery, altfel se afiseaza un mesaj corespunzator.
Atunci cand face match pe un anumit id, functia removeClass elibereaza zona de contruire si in acelasi loc se construieste cladirea aleasa cu ajutorul functiei addClass si se marcheaza terenul ca "ocupat"
*/
function buildBuilding(id, cladire, nivel) {
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
Altfel, daca este ocupat se face un updgrade la cladire in functie de tipul acesteia: casa, bloc, apa ( statie de epurare), rafinarie, fabrica, it, termopane.
*/
$('.free').click(function () {
    if (!$(this).hasClass("ocupat")) {
        $('#builder').modal('show');
        curentId = $(this).attr("id");
    }
    else {
        $('#upgrade').modal('show');
        curentId = $(this).attr("id");
        var html_cont = "";
        if ($(this).hasClass("casa")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="4">Nivel 4</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="5">Nivel 5</button></div>';
            
            $(".upgradeBody").html(html_cont);
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "casa", $(this).attr("nivel"));
            });
        }
        else if ($(this).hasClass("bloc")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="4">Nivel 4</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="5">Nivel 5</button></div>';
            
            $(".upgradeBody").html(html_cont);
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "bloc", $(this).attr("nivel"));
            });
        }
        else if ($(this).hasClass("apa")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            
            $(".upgradeBody").html(html_cont);
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "apa", $(this).attr("nivel"));
            });
        }
        else if ($(this).hasClass("fabrica")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="4">Nivel 4</button></div>';
            
            $(".upgradeBody").html(html_cont);
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "fabrica", $(this).attr("nivel"));
            });
        }
        else if ($(this).hasClass("it")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
            
            $(".upgradeBody").html();
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "it", $(this).attr("nivel"));
            });
        }
        else if ($(this).hasClass("termopane")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="3">Nivel 3</button></div>';
            
            $(".upgradeBody").html(html_cont);
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "termopane", $(this).attr("nivel"));
            });
        }
        else if ($(this).hasClass("rafinarie")) {
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="1">Nivel 1</button></div>';
            html_cont += '<div class="row"><p>Construieste nivel 1</p><button type="button" class="btn btn-default nivel" data-dismiss="modal" nivel="2">Nivel 2</button></div>';
            
            $(".upgradeBody").html(html_cont);
            
            $(".nivel").click(function () {
                buildBuilding(curentId, "rafinarie", $(this).attr("nivel"));
            });
        }
    }
});

/*
Functie specifica jQuery. La producerea evenimentului click pe spatiul primariei, se verifica la ce nivel se vrea construita primaria si daca sunt suficienti bani. Daca sunt suficienti bani atunci se construieste primaria la nivelul dorit, altfel se afiseaza mesajul corespunzator.
*/
$('.primarie').click(function () {
    $('#primarie').modal('show');
    $(".nivPrimarie").click(function () {
        if ($(this).attr("nivel") == 1 && bani >= 10) {
            $('.primarie').removeClass("primarie1");
            $('.primarie').removeClass("primarie2");
            $('.primarie').removeClass("primarie3");
            $('.primarie').addClass("primarie" + $(this).attr("nivel"));
            bani -= 10;
        }
        else if ($(this).attr("nivel") == 2 && bani >= 5000) {
            $('.primarie').removeClass("primarie1");
            $('.primarie').removeClass("primarie2");
            $('.primarie').removeClass("primarie3");
            $('.primarie').addClass("primarie" + $(this).attr("nivel"));
            bani -= 5000;
        }
        else if ($(this).attr("nivel") == 3 && bani >= 10000) {
            $('.primarie').removeClass("primarie1");
            $('.primarie').removeClass("primarie2");
            $('.primarie').removeClass("primarie3");
            $('.primarie').addClass("primarie" + $(this).attr("nivel"));
            bani -= 10000;
        }
        else {
            alert("Nu ai destui bani !");
        }
    });
});

/*
Fucntie specifica jQuer. Functia/eventul click reprezinta activatorul de buton
*/
$(".construieste").click(function () {
    buildBuilding(curentId, $(this).attr("cladire"), "1");
});