usuario = {
    nome : "",
    peso : 0.0,
    altura : 0.0,
    calcularIMC : function(){
        imc=this.peso/(this.altura*this.altura)
        return imc
    }
}

function calcular(){
    nome = document.getElementById("txtUsuario").value
    peso = document.getElementById("txtPeso").value
    altura = document.getElementById("txtAltura").value


    if (nome == "" || peso =="" || altura ==""){
        alert("Nome, peso e altura devem ser preenchidos")
    }else{
        usuario.nome = nome
        usuario.peso = peso.replace(",", ".")
        usuario.altura = altura.replace(",", ".")
        divIMC = document.getElementById("divIMC")
        divIMC.innerHTML = "Nome: " + usuario.nome
        divIMC.innerHTML += "<br>Peso: " + usuario.peso
        divIMC.innerHTML += "<br>Altura: " + usuario.altura
        divIMC.innerHTML += "<br>IMC: " + usuario.calcularIMC()
    }
}

$("#quadrado").css("width", "200px")
$("#quadrado").css("background", "blue")
$("#quadrado").css("color", "#fff")
$("#quadrado").hide(5000)
$("#quadrado").show(5000)