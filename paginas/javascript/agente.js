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
      alert("Erro!2");
  })
  
  var agentes = localStorage.getItem("agentes");
  var myObj, x, txt = "";

  myObj = JSON.parse(agentes);
  myObj.sort(function (a, b) {
    return b.volume_transacional-a.volume_transacional;
  });
  txt = "<h3 class='text-center'>Top 10 Parceiros</h3>"+
  "<table class='table'>" +
  "<thead class='thead-dark'><tr><th scope='col'>Parceiro</th> " +
  "<th scope='col'>Volume Transacional em R$</th></tr> "
  
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
      alert("Erro1");
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
  flag = exibirUsuario();
  if(flag){
    tableParceiros();
    dropParceiros();
  }  
  
}

