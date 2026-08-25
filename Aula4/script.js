function lerDados(){
    var req = new XMLHttpRequest() /*Criando a requisição*/ 
    document.getElementById("divDados").innerHTML = "Carregando..."

    req.onreadystatechange = function() {/*será executado quando mudar o status */
        //alert("readyState: " + this.readyState) /*Emite um alerta do estado atual */
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("divDados").innerHTML = this.responseText 
        }

    }
    req.open("GET" , "dados.txt" , true) /* Método + local do arquivo / True(assincrona) */
    req.send() /*Enviar a requisição */
}


function gerarNumeros(){
    document.getElementById("divNumeros").innerHTML = "Carregando..."

    const req = new XMLHttpRequest() /*Criando a requisição*/ 
    
    req.onreadystatechange = function() {/*será executado quando mudar o status */
        const divNumeros = document.getElementById("divNumeros")
        
        if(this.readyState == 4 && this.status == 200){
            divNumeros.innerHTML = this.responseText
        }

        if(this.readyState == 4 && this.status == 404){
            divNumeros.innerHTML = "Código" + this.status + " - " + this.statusText
        }

    }
    const numero = document.getElementById("txtNumero").value

    //req.open("GET" , "servidor2.php?valor= " + numero , true) /* Método + local do arquivo / True(assincrona)*/
    //req.send() /*Enviar a requisição */

    req.open("POST" , "servidor.php", true)
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    req.send("valor=" + numero)
}