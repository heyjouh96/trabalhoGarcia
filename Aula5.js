//descontruir
function mostrarObjeto(obj){
    var aux = ""
    for(var indice in obj){
    //for(var indice=0; indice < obj.length; indice++){
        aux = aux + indice + " -> " + obj[indice] + "<br>";
    }
    document.write(aux);
}

function todosFundoAzulClidado(listaTags){
    for(var i = 0; i < listaTags.length; i++){
        listaTags[i].style.backgroundColor = "blue";
        listaTags[i].style.color = "white";
        listaTags[i].innerHTML = "Clicado";
    }
}

function todosFundoVermelhoClidado(listaTags){
    for(var i = 0; i < listaTags.length; i++){
        listaTags[i].style.backgroundColor = "red";
        listaTags[i].style.color = "white";
        listaTags[i].innerHTML = "Clicado";
    }
}

function teste(){
    //ELE RETORNA UMA LISTA DE OBJETOS QUE REPRESENTAM
    //UMA TAG p.
    var ps = document.getElementsByTagName("p");
    todosFundoAzulClidado(ps);
}

/*

1) Considere uma página que tenha a seguinte estrutura:

<div> CONTEUDO 1 </div>
<div> CONTEUDO 2 </div>
<div> CONTEUDO 3 </div>
<div> CONTEUDO 4 </div>
<div> CONTEUDO 5 </div>
<div> CONTEUDO 6 </div>
<div> CONTEUDO 7 </div>

a) Faça uma função que troque a cor de fonte
de todas para rosa.

b) Faça uma função que faça com que suma as
div que contenha um número par (ex: CONTEUDO 2)

c) Faça uma função que troque o conteudo string da div
por números 0, 1, 2, 3, 4, 5 e 6 respectivamente.


*/

function exer1(){
    var divs = document.getElementsByTagName("div");
    c(divs);
}

function a(obj){
    for(var i in obj){
        obj[i].style.color = "pink";
    }
}

function b(obj){
    for(var i=1; i < obj.length; i+=2){
        obj[i].style.display = "none";
    }
}

function c(obj){
    for(var i in obj){
        obj[i].innerHTML = ""+i;
    }
}

// QUERY SELECTOR <- prova

function queryselector(){
    var divps = document.querySelectorAll("p, div");
    todosFundoAzulClidado(divps);
}

function queryselector2(){
    var divps = document.querySelectorAll("div ul li");
    todosFundoVermelhoClidado(divps);
}

// CALCULAR

function calcular(){
    var n1 = parseInt(document.forms.form1.n1.value);
    var n2 = parseInt(document.forms.form1.n2.value);
    document.querySelector("div").innerHTML = n1+n2;
}

function pintarAmarelo(obj){
    obj.style.backgroundColor = "yellow";
}

function pintarBranco(obj){
    obj.style.backgroundColor = "white";
}

/*

2)

a) Melhorar o que fiz: "Juntar as funções de pintura
em uma";

b) Fazer a pintura para a outra caixa;

c) Botão que realiza a multiplicao dos campos.

*/

function pintarTudo(obj){
    var n1 = document.getElementsByName("n1");
    var n2 = document.getElementsByName("n2");
    n1.style.backgroundColor="yellow";
    n2.style.backgroundColor="red";
}


function multiplicar(){
    var n1 = parseInt(document.forms.form1.n1.value);
    var n2 = parseInt(document.forms.form1.n2.value);
    document.querySelector("div").innerHTML = n1*n2;
}

$("div").click(function(){
    
})