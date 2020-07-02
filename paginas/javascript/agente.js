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