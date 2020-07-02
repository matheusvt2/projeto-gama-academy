function login(){
    var mensagem={
        email : document.getElementById("txtEmail").value,
        senha : document.getElementById("txtSenha").value
    };

    var cabecalho={
        method : "POST",
        body : JSON.stringify(mensagem),
        headers : {
            "Content-Type" : "application/json"
        }  
    }
    
    //fetch(document.URL+"/login",cabecalho).then(alert("logado"))
    fetch(document.URL+"/login",cabecalho)
    .then(res => res.json())
    .then(res => {
        alert(res.senha);
    })
    .catch(err=>{
        alert("erro");
    })

}