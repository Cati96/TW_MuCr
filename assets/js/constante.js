var bani = 0;
var castig = 1;
var resurse = {};
var populatie=0;
var angajati=0;
var curent=0;
var consum=0;
var apa=0;
var consumApa=0;

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

//items status
function setConstants() 
{
    var casa = 0;
    var bloc = 0;
    var apa = 0;
    var fabrica = 0;
    var it = 0;
    var termopane = 0;
    var rafinarie = 0;
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
    $(".apa1").each(function () 
	{
        apa += 1;
    });
    $(".apa2").each(function () 
	{
        apa += 2;
    });
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
    $(".rafinarie1").each(function () 
	{
        rafinarie += 1;
    });
    $(".rafinarie2").each(function () 
	{
        rafinarie += 2;
    });
    return 
	{
        casa, bloc, apa, fabrica, it, termopane, rafinarie
    };
}