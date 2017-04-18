function consultar() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hask4-romefeller.c9users.io/department");
    xhr.responseType = "application/json";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE &&  xhr.status == 200) {
            var resposta = xhr.responseText;
            var obj = JSON.parse(resposta);
            mostrarTodosDepto(obj);
        }
    }
    xhr.send();
}

function cadastrar() {
    var nome = document.forms.form1.nome.value;
    var data = {name : nome};
    // manda um request para o servidor.
    const xhr = new XMLHttpRequest();
    /* 
     abre a conexão com o back-end.
     1º parametro = metodo
     2º parametro = endereço do servidor
    */
    xhr.open("POST", "https://hask4-romefeller.c9users.io/department");
    // avisa para o back que a resposta será um JSON.
    xhr.responseType = "application/json";
    // a partir do momento que o back fazer algo ele cria a função.
    xhr.onreadystatechange = function() {
        /* 
        pergunta se a requisição acabou e se o status é 200 (sucesso | ok).
        STATUS:
        404 = not found
        200 = ok
        500 = falha na página
        */
        if (xhr.readyState == XMLHttpRequest.DONE &&  xhr.status == 200) {
            var resposta = xhr.responseText; // String
            var obj = JSON.parse(resposta); // virou JSON
            mostrarRespNaDiv(obj);
        }
    }
    xhr.send(JSON.stringify(data));
    document.forms.form1.nome.value = "";
}

// obj = {resp : "string"}
function mostrarRespNaDiv(obj){
    var div = document.querySelector(".resposta");
    div.innerHTML =  obj["resp"];
    div.style.background = "green";
}

// {resp : [{id:1, name:"algo"},{id:2, name:"algo"}]}
function mostrarTodosDepto(obj){
    var vetorObj = obj["resp"];
    var tb = document.getElementById("tb1");
    tb.parentNode.removeChild(tb);
    var tb1 = document.createElement("table");
    tb1.setAttribute("id","tb1");
    var th = document.createElement("thead");
    var trHead = document.createElement("tr");
    var tdHeadId = document.createElement("td");
    var tdHeadNome = document.createElement("td");
    tdHeadId.innerHTML = "id";
    tdHeadNome.innerHTML = "nome";
    trHead.appendChild(tdHeadId);
    trHead.appendChild(tdHeadNome);
    th.appendChild(trHead);
    tb1.appendChild(th);
    for(var i=0; i<vetorObj.length;i++){
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        tdId.innerHTML = vetorObj[i].id;
        tdNome.innerHTML = vetorObj[i].name;
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tb1.appendChild(tr);
    }
    document.body.appendChild(tb1);
}
