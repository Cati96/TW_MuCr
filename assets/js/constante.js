var resurse = {};

var bani = 0;
var castig = 1;
var populatie=0;
var angajati=0;
var curent=0;
var consum=0;
var apa=0;
var consumApa=0;
var misiuni_terminate=[0];
var misiuni=[];
//misiune 1
var m1=new Object();
m1.bani=100;
m1.poppulatie=1;
m1.curent=1;
m1.utilitati=1;
m1.recompensa=50;
m1.id=1;
misiuni.push(m1);

//misiune 2
var m2=new Object();
m2.bani=200;
m2.poppulatie=5;
m2.curent=2;
m2.utilitati=1;
m2.recompensa=150;
m2.id=2;
misiuni.push(m2);


//misiune 3
var m3=new Object();
m3.bani=200;
m3.poppulatie=5;
m3.curent=2;
m3.utilitati=1;
m3.recompensa=350;
m3.id=3;
misiuni.push(m3);


//misiune 4
var m4=new Object();
m4.bani=200;
m4.poppulatie=5;
m4.curent=2;
m4.utilitati=1;
m4.recompensa=750;
m4.id=4;
misiuni.push(m4);


//misiune 1
var m5=new Object();
m5.bani=200;
m5.poppulatie=5;
m5.curent=2;
m5.utilitati=1;
m5.recompensa=10050;
m5.id=5;
misiuni.push(m5);



var nivelJucator=1;
var puncteJucator=0;
var usernameJucator="Jucator nou";
var imagineProfil = "img";

//cost of upgrading items: cost,populatie,curent,apa
var buildR=
{   
    casa:[200,0,0,0],
    bloc:[500,0,0.5,0.3],
    apa:[620,0,0.08,0],
    fabrica:[1000,12,1.6,0.5],
    it:[2300,16,2.1,0],
    rafinarie:[300,0,0,0],
    termopane:[150,5,0.3,0.1],
    primarie1:10,
    primarie2:5000,
    primarie3:10000  
};

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
    $(".casa1").each(function () 
    {
        casa += 1;
    });
    $(".casa2").each(function () 
    {
        casa += 2;
    });
    $(".casa3").each(function () 
    {
        casa += 3;
    });
    $(".casa4").each(function () 
    {
        casa += 4;
    });
    $(".casa5").each(function () 
    {
        casa += 5;
    });

//<<-------------Pentru fiecare clasa de tip bloc1/2/3/4/5 adaug acestora 1/2/3/4/5 nivele la nivelul de baza bloc->>    
    $(".bloc1").each(function () 
    {
        bloc += 1;
    });
    $(".bloc2").each(function () 
    {
        bloc += 2;
    });
    $(".bloc3").each(function () 
    {
        bloc += 3;
    });
    $(".bloc4").each(function ()
    {
        bloc += 4;
    });
    $(".bloc5").each(function ()
    {
        bloc += 5;
    });

//<<--------Pentru fiecare clasa de tip apa1/2 (statie de epurare)----adaug cate 1/2 nivele la nivelul de baza apa----->>    
    $(".apa1").each(function () 
    {
        apa += 1;
    });
    $(".apa2").each(function ()
    {
        apa += 2;
    });

//<<-------------Pentru fiecare clasa de tip fabrica1/2/3/4/5 adaug acestora 1/2/3/4/5 nivele la nivelul de baza fabrica->>    
    $(".fabrica1").each(function () 
    {
        fabrica += 1;
    });
    $(".fabrica2").each(function () 
    {
        fabrica += 2;
    });
    $(".fabrica3").each(function () 
    {
        fabrica += 3;
    });
    $(".fabrica4").each(function () 
    {
        fabrica += 4;
    });
    $(".fabrica5").each(function () 
    {
        fabrica += 5;
    });

 //<<-------------Pentru fiecare clasa de tip i1/2/3 adaug acestora 1/2/3 nivele la nivelul de baza it->>       
    $(".it1").each(function () 
    {
        it += 1;
    });
    $(".it2").each(function () 
    {
        it += 2;
    });
    $(".it3").each(function () 
    {
        it += 3;
    });

//<<-------------Pentru fiecare clasa de tip termopane1/2/3 adaug acestora 1/2/3 nivele la nivelul de baza termopane->>    
    $(".termopane1").each(function () 
    {
        termopane += 1;
    });
    $(".termopane2").each(function () 
    {
        termopane += 2;
    });
    $(".termopane3").each(function () 
    {
        termopane += 3;
    });

//<<-------------Pentru fiecare clasa de tip rafinarie1/2 adaug acestora 1/2 nivele la nivelul de baza rafinarie-- produce curent-->>    
    $(".rafinarie1").each(function () 
    {
        rafinarie += 1;
    });
    $(".rafinarie2").each(function () 
    {
        rafinarie += 2;
    });

//<<-------------Pentru fiecare clasa de tip primarie1/2/3 adaug acestora 1/2/3 nivele la nivelul de baza primarie->>    
    $(".primarie1").each(function () 
    {
        primarie = 1;
    });
    $(".primarie2").each(function () 
    {
        primarie = 2;
    });
    $(".primarie3").each(function () 
    {
        primarie = 3;
    });
    
    
    return {
        casa, bloc, apa, fabrica, it, termopane, rafinarie,primarie
    };
}