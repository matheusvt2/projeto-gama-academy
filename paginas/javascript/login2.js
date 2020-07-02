function login(){
    
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"racf":document.getElementById("txtLogin").value,"senha":document.getElementById("txtSenha").value});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/login", requestOptions)
  .then(response => response.text())
  .then(result =>{
      window.location="agentes.html";
    console.log(result);
})
  .catch(error => console.log('error', error)
  );
}