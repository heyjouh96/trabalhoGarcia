function inserir(){
    var p = document.querySelector("p");
    var span = document.createElement("span");
    var a = document.querySelector("a");
    var btn = document.createElement("button");
    btn.innerHTML = "Botao123";
    span.innerHTML = "TESTE";
    //document.body.insertBefore(span,p);
    p.parentNode.insertBefore(span,p.nextSibling); //insertAfter
    p.parentNode.removeChild(p);
    a.parentNode.replaceChild(btn, a);
}