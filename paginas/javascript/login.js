function login(){
    var verificador=document.getElementById("txtLogin").value;
    if(verificador.length==7){
        var mensagem={
            racf : document.getElementById("txtLogin").value,
            senha : document.getElementById("txtSenha").value
        };
    }else{
        var mensagem={
            email : document.getElementById("txtLogin").value,
            senha : document.getElementById("txtSenha").value
        };
    };
var cabecalho={
    method : "POST",
    body : JSON.stringify(mensagem),
    headers : {
        "Content-Type" : "application/json"
    }
}

fetch("http://localhost:8080/login", cabecalho)
.then(res => res.json())
.then(res => {
    alert(JSON.stringify(res));
    localStorage.setItem("user", JSON.stringify(res));
    window.location="agentes.html";
})
.catch(err => {
    alert("Erro!");
})

}