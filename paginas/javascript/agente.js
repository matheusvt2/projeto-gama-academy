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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName(agenteFinanceiro.nome_agente);
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
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
      alert(JSON.stringify(res));
      localStorage.setItem("agentes", JSON.stringify(res));
  })
  .catch(err => {
      alert("Erro!");
  })

  var agentes = localStorage.getItem("agentes");
  var myObj, x, txt = "";

  myObj = JSON.parse(agentes);
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


function dropParceiros(){
  var agentes = localStorage.getItem("agentes");
  var myObj, x, txt = "";

  myObj = JSON.parse(agentes);
  txt = "<h3 class='text-center'>Selecione um Parceiro</h3>"+
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


function incializaPagina(){
  tableParceiros();
  exibirUsuario();
}