function setConstants() {
//<<--- Constante---->>
    var casa = 0;
    var bloc = 0;
    var apa = 0;
    var fabrica = 0;
    var it = 0;
    var termopane = 0;
    var rafinarie = 0;
    var primarie=0;
//<<------Pentru fiecare clasa de tip casa1/2/3/4/5 adaug acestora 1/2/3/4/5 nivele la nivelul de baza casa----->>    
    $(".casa1").each(function () {
        casa += 1;
    });
    $(".casa2").each(function () {
        casa += 2;
    });
    $(".casa3").each(function () {
        casa += 3;
    });
    $(".casa4").each(function () {
        casa += 4;
    });
    $(".casa5").each(function () {
        casa += 5;
    });

//<<-------------Pentru fiecare clasa de tip bloc1/2/3/4/5 adaug acestora 1/2/3/4/5 nivele la nivelul de baza bloc->>    
    $(".bloc1").each(function () {
        bloc += 1;
    });
    $(".bloc2").each(function () {
        bloc += 2;
    });
    $(".bloc3").each(function () {
        bloc += 3;
    });
    $(".bloc4").each(function () {
        bloc += 4;
    });
    $(".bloc5").each(function () {
        bloc += 5;
    });

//<<--------Pentru fiecare clasa de tip apa1/2 (statie de epurare)----adaug cate 1/2 nivele la nivelul de baza apa----->>    
    $(".apa1").each(function () {
        apa += 1;
    });
    $(".apa2").each(function () {
        apa += 2;
    });

//<<-------------Pentru fiecare clasa de tip fabrica1/2/3/4/5 adaug acestora 1/2/3/4/5 nivele la nivelul de baza fabrica->>    
    $(".fabrica1").each(function () {
        fabrica += 1;
    });
    $(".fabrica2").each(function () {
        fabrica += 2;
    });
    $(".fabrica3").each(function () {
        fabrica += 3;
    });
    $(".fabrica4").each(function () {
        fabrica += 4;
    });
    $(".fabrica5").each(function () {
        fabrica += 5;
    });

 //<<-------------Pentru fiecare clasa de tip i1/2/3 adaug acestora 1/2/3 nivele la nivelul de baza it->>       
    $(".it1").each(function () {
        it += 1;
    });
    $(".it2").each(function () {
        it += 2;
    });
    $(".it3").each(function () {
        it += 3;
    });

//<<-------------Pentru fiecare clasa de tip termopane1/2/3 adaug acestora 1/2/3 nivele la nivelul de baza termopane->>    
    $(".termopane1").each(function () {
        termopane += 1;
    });
    $(".termopane2").each(function () {
        termopane += 2;
    });
    $(".termopane3").each(function () {
        termopane += 3;
    });

//<<-------------Pentru fiecare clasa de tip rafinarie1/2 adaug acestora 1/2 nivele la nivelul de baza rafinarie-- produce curent-->>    
    $(".rafinarie1").each(function () {
        rafinarie += 1;
    });
    $(".rafinarie2").each(function () {
        rafinarie += 2;
    });

//<<-------------Pentru fiecare clasa de tip primarie1/2/3 adaug acestora 1/2/3 nivele la nivelul de baza primarie->>    
    $(".primarie1").each(function () {
        primarie = 1;
    });
    $(".primarie2").each(function () {
        primarie = 2;
    });
    $(".primarie3").each(function () {
        primarie = 3;
    });
    
    
    return {
        casa, bloc, apa, fabrica, it, termopane, rafinarie,primarie
    };
}

window.setInterval(function () {
    resurse = setConstants();

    //<<----Calcule a tutuor "resurselor" din joc la fiecare 1 secunda--->>
    populatie = (resurse.casa * 2) + (resurse.bloc * 3);
    angajati = populatie - (resurse.fabrica * 12) - (resurse.termopane * 5) - (resurse.it * 16)
    curent = resurse.rafinarie * 15;
    consum = curent  - (resurse.bloc * 0.5) - (resurse.fabrica * 1.6) - (resurse.termopane * 0.3) - (resurse.it * 2.1) - (resurse.apa * 0.08);
    castig=resurse.primarie*(1+resurse.fabrica*3+resurse.it*6+resurse.termopane*2);
    bani += castig;
    apa=resurse.apa;
    consumApa=apa-(resurse.bloc*0.3)-(resurse.fabrica*0.5)-(resurse.termopane*0.1);

    //<<-----Preluare total monede--- >>
    $("#bani").html(bani);
    //<<-----Preluare populatie libera cu precizie 2---->>
    $("#populatie").html(angajati.toFixed(2) + "/" + populatie);
    //<<--------Preluare cantitatea de curent actuala cu precizie 2---->>
    $("#curent").html(consum.toFixed(2) + "/" + curent);
    //<<>-------Preluare cantitate apa actuala cu precizie 2---momentan denumita utilitati--->>
     $("#apa").html(consumApa.toFixed(2) + "/" + apa);
}, 1000);


function checkC(nivel,tip){
    console.log(nivel+" * "+tip+" vs "+bani);
    var posibil=false;
    if(tip==1){
        //--Casa--resurse necesare construirii unei case de nivelul nivel
        console.log(buildR.casa[0]*nivel+" - "+bani+"|"+buildR.casa[1]*nivel+" - "+angajati+"|"+buildR.casa[2]*nivel+" - "+consum+"|"+buildR.casa[3]*nivel +" - "+consumApa+"|");
        //--Daca am resursele necesare--> scad resursele necesare construirii si setez posibil to true
        if((buildR.casa[0]*nivel)<=bani && (buildR.casa[1]*nivel)<=angajati && (buildR.casa[2]*nivel)<= consum && (buildR.casa[3]*nivel) <=consumApa){
             bani-=buildR.casa[0]*nivel;
         posibil= true;   
        }
        
    }
    if(tip==2){
        //--BLoc--daca am resursele necesare construirii unui bloc de nivelul nivel -> construiesc
        if((buildR.bloc[0]*nivel)<=bani && (buildR.bloc[1]*nivel)<=angajati && (buildR.bloc[2]*nivel)<= consum && (buildR.bloc[3]*nivel) <=consumApa){
             bani-=buildR.bloc[0]*nivel;
         posibil= true;   
        }
        
    }
    if(tip==3){
        //--Statie epurare--daca am resursele necesare construirii unei statii de epurare de nivelul nivel -> construiesc
        if((buildR.apa[0]*nivel)<=bani && (buildR.apa[1]*nivel)<=angajati && (buildR.apa[2]*nivel)<= consum && (buildR.apa[3]*nivel) <=consumApa){
             bani-=buildR.apa[0]*nivel;
         posibil= true;   
        }
        
    }
    if(tip==4){
        //--Fabrica--daca am resursele necesare construirii unei fabrici  de nivelul nivel -> construiesc
        if((buildR.fabrica[0]*nivel)<=bani && (buildR.fabrica[1]*nivel)<=angajati && (buildR.fabrica[2]*nivel)<= consum && (buildR.fabrica[3]*nivel) <=consumApa){
             bani-=buildR.fabrica[0]*nivel;
         posibil= true;   
        }
        
    }
    if(tip==5){
        //--Companie it--daca am resursele necesare construirii unei companii it de nivelul nivel -> construiesc
        if((buildR.it[0]*nivel)<=bani && (buildR.it[1]*nivel)<=angajati && (buildR.it[2]*nivel)<= consum && (buildR.it[3]*nivel) <=consumApa){
             bani-=buildR.it[0]*nivel;
         posibil= true; 
            
        }
        
    }
    if(tip==6){
        //--Rafinarie (genereaza curent)--daca am resursele necesare construirii unei rafinarii de nivelul nivel -> construiesc
        if((buildR.rafinarie[0]*nivel)<=bani && (buildR.rafinarie[1]*nivel)<=angajati && (buildR.rafinarie[2]*nivel)<= consum && (buildR.rafinarie[3]*nivel) <=consumApa){
             bani-=buildR.rafinarie[0]*nivel;
         posibil= true;   
        }
        
    }
    if(tip==7){
        //--Firma termopane--daca am resursele necesare construirii unei firme de termopane de nivelul nivel -> construiesc
        if((buildR.termopane[0]*nivel)<=bani && (buildR.termopane[1]*nivel)<=angajati && (buildR.termopane[2]*nivel)<= consum && (buildR.termopane[3]*nivel) <=consumApa){
            bani-=buildR.termopane[0]*nivel;
         posibil= true;   
        }
        
    }
    return posibil;
    
}