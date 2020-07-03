function exibirUsuario(){

    var usuarioLogado = localStorage.getItem("user");
    if (!usuarioLogado){
        window.location="index.html"
    }else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("perfil").innerHTML = 
        "<h3>" + usuarioJson.nome + "</h3>" + 
        "<h4>(" + usuarioJson.racf + ")</h4>";
        document.getElementById("fotoUsuario").innerHTML = 
        "<img alt='Imagem não encontrada' style='width:120px;height:120px' src=./images/" + usuarioJson.foto + ">"

    }
}

function tableParceiros(){
  var cabecalho={
    method : "GET",
    headers : {
        "Content-Type" : "application/json"
    }
  }

  fetch("http://localhost:8080/agentes", cabecalho)
  .then(res => res.json())
  .then(res => {
      localStorage.setItem("agentes", JSON.stringify(res));
  })
  .catch(err => {
      alert("Erro!");
  })

  var agentes = localStorage.getItem("agentes");
  var myObj, x, txt = "";

  myObj = JSON.parse(agentes);
  myObj.sort(function (a, b) {
    return b.volume_transacional-a.volume_transacional;
  });
  txt = "<h3 class='text-center'>Top 10 Parceiros</h3>"+
  "<table class='table'>" +
  "<thead><tr><th scope='col'>Parceiro</th> " +
  "<th scope='col'>Volume Transacional</th></tr> "
  
  for (x in myObj) {
    txt += "<tr><td>" + myObj[x].nome_agente + "</td>" +
    "<td>" + myObj[x].volume_transacional + "</td></tr> ";
  }
  txt += "</table>" 
  document.getElementById("tabelaParceiros").innerHTML = txt;
}

function goToDash(nome){
  var cabecalho={
    method : "GET",
    headers : {
        "Content-Type" : "application/json"
    }
  }

  fetch("http://localhost:8080/agentes/"+nome, cabecalho)
  .then(res => res.json())
  .then(res => {
      localStorage.setItem("dashAgente", JSON.stringify(res));
      window.location='dashboard.html'
  })
  .catch(err => {
      alert("Erro");
  })

  
}

function dropParceiros(){
  var agentes = localStorage.getItem("agentes");
  var myObj, x, txt = "";

  myObj = JSON.parse(agentes);
  myObj.sort(function (a, b) {
    return b.volume_transacional-a.volume_transacional;
  });  
  for (x in myObj) {
    txt += '<a class="dropdown-item" href="#" onclick="goToDash('+myObj[x].id_agente.toString()+')">' + myObj[x].nome_agente + "</a>";
  }
  document.getElementById("dropdownParceiros").innerHTML = txt;
}


function incializaPagina(){
  tableParceiros();
  exibirUsuario();
  dropParceiros();
}

