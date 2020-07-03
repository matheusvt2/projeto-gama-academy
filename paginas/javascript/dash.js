function complete(){
    exibirUsuario()
    var agente = localStorage.getItem("dashAgente");
    var myObj, x, txt = "";

    myObj = JSON.parse(agente);
    
    sumSucesso = 0;
    sumFalha=0;
    sumFraude = 0;
    myObj.transactions.forEach(transac => {
        if(transac.status == 0){
                sumSucesso += 1;
            }
            else if(transac.status == 1){
                sumFalha += 1;
            }
            else if(transac.status == 2){
                sumFraude += 1;
            }
            else{
                console.log("");
            }})

    document.getElementById("valorSucesso").value=sumSucesso;
    document.getElementById("valorFalha").value=sumFalha;
    document.getElementById("valorFraude").value=sumFraude;
    document.getElementById("valorParceiro").value = myObj.nome_agente +" / R$"+myObj.volume_transacional;
}

function voltar(){
    window.location='agentes.html'
}