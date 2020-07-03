function exibirUsuario(){

    var usuarioLogado = localStorage.getItem("user");
    if (!usuarioLogado){
        window.location="index.html"
        return false
    }else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("perfil").innerHTML = 
        "<h4>" + usuarioJson.nome.toUpperCase() + " ("+  usuarioJson.racf.toUpperCase()  + ")</h4>" ;
        document.getElementById("fotoUsuario").innerHTML = 
        "<img alt='Imagem não encontrada' class='rounded-circle' style='width:120px;height:120px' src=./images/" + usuarioJson.foto + ">"
    }
    return true
}