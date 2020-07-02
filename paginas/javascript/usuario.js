function exibirUsuario(){

    var usuarioLogado = localStorage.getItem("user");
    if (!usuarioLogado){
        window.location="index.html"
    }else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("perfil").innerHTML = 
        "<h3>" + usuarioJson.nome + "</h3>" + 
        "<br><h4>" + usuarioJson.email + 
        "<br> Código: " + usuarioJson.id + "</h4>";
        document.getElementById("fotoUsuario").innerHTML = 
        "<img alt='Imagem não encontrada' width='90%' src=images/" + usuarioJson.foto + ">"

    }
}