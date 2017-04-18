function criar(){
    //CRIOU-SE UMA DIV "EM MEMORIA"
    var div = document.createElement("div");
    //CRIOU-SE UM NÓ TEXTO "EM MEMORIA"
    var txt = document.createTextNode("Olá Mundo!");
    //EM MEMÓRIA, TEMOS <div> Olá Mundo! </div>
    div.appendChild(txt);
    // AQUI A DIV SERA ANEXADA NA PAGINA
    // document.body.appendChild(div);
    // OU
    div.style.backgroundColor = "red";
    var btn = document.querySelector("button");
    document.body.insertBefore(div, btn);
    
}

function criarListaOrdenada(){
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var txt1 = document.createTextNode("UM");
    var txt2 = document.createTextNode("DOIS");
    var txt3 = document.createTextNode("TRES");
    // li3.innerHtml = "TRES"; 
    li1.appendChild(txt1);
    li2.appendChild(txt2);
    li3.appendChild(txt3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    document.body.appendChild(ul);
}

/*function inserirAluno(){
    var ul = document.getElementById("ul1");
    var nome = document.forms.form1.aluno.value;
    if(nome === ""){
        alert("Erro, nome vazio");
    }else{
        var li = document.createElement("li");
        var txt = document.createTextNode(nome);
        li.appendChild(txt);
        ul.appendChild(li);
        document.forms.form1.aluno.value = "";
    }
}*/

//EX 1 - CRIAR UM FORMULARIO QUE ENTRE COM UM NOME DE DISCIPLINA
//E UMA SIGLA. AO INSERIR OS DADOS DIGITADOS NA PÁGINA,
//MOSTRE-OS COM ALGUM ESTILO. (TUDO VIA JS).

//PARA PENSAR: COMO FAZER ALGO PARECIDO SEM A ul INICIAL.

function inserirDisciplina(){
    var table = document.getElementById("tab1");
    var dis = document.forms.ex1.disciplina.value;
    var sig = document.forms.ex1.sigla.value;
    if(dis === "" || sig === ""){
        alert("Erro, nome vazio");
    }
    else{
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        // estilo
        tr.style.color = "#fff";
        td1.style.backgroundColor = "red";
        td2.style.backgroundColor = "blue";
        td1.innerHTML = dis;
        td2.innerHTML = sig;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        document.forms.form1.disciplina.value = "";
        document.forms.form1.sigla.value = "";
    }
}

function inserirParaPensar(){
    var ul = document.createElement("ul");
    var dis = document.forms.pp.disciplina.value;
    var sig = document.forms.pp.sigla.value;
    document.body.appendChild(ul);
    if(dis === "" || sig === ""){
        alert("Erro, nome vazio");
    }
    else{
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        // estilo
        tr.style.color = "#fff";
        td1.style.backgroundColor = "red";
        td2.style.backgroundColor = "blue";
        td1.innerHTML = dis;
        td2.innerHTML = sig;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        document.forms.form1.disciplina.value = "";
        document.forms.form1.sigla.value = "";
    }
}

/*EX 2 - 

Considere um vetor da forma

{"resp":[{nome:"Caneta", preco:5.5, qtd:8},{nome:"Tesoura", preco:8.27, qtd:3}]}

Faça uma função que receba o objeto acima e monte uma página da seguinte forma

<table>
    <thead>
        <tr> NOME PRODUTO </tr>
        <tr> PREÇO </tr>
        <tr> QUANTIDADE </tr>
    </thead>
    <tbody>
        <tr>
            <td>Caneta</td>
            <td>5.5</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Tesoura</td>
            <td>8.27</td>
            <td>3</td>
        </tr>
    </tbody>
</table>

*/

