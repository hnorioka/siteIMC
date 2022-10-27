var idoso = false;

function idosoF(){
    if (document.getElementById("checkbox").checked == true){
        idoso = true;
    }
    else {
        idoso = false;
    }
}

function calcular() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    if (altura.includes('.') || altura.includes(',')){

    }
    else{
        var altura = altura/100
    }
    
    var resultado = (peso/(altura*altura))
    var imagem = document.getElementById("boneco");

    

    if (peso !== "" && altura !== ""){
        document.getElementById("resultadoimc").innerHTML = "Sem valores"
        imagem.src="imagens/fundo-resultado.png";
        document.getElementById("classificacao").innerHTML = ""
    }
    
    if (idoso == false){
        if (resultado < 18.5){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco1.png";
            document.getElementById("classificacao").innerHTML = "baixo peso"
        }
        else if (resultado >= 18.5 && resultado < 24.9){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco2.png";
            document.getElementById("classificacao").innerHTML = "peso normal"
        }
        else if (resultado >= 25 && resultado < 29.9){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco3.png";
            document.getElementById("classificacao").innerHTML = "excesso de peso"
        }
        else if (resultado >= 30 && resultado < 34.9){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco4.png";
            document.getElementById("classificacao").innerHTML = "obesidade 1"
        }
        else if (resultado >= 30 && resultado < 39.9){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco4.png";
            document.getElementById("classificacao").innerHTML = "obesidade 2"
        }
        else if (resultado >= 40){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco5.png";
            document.getElementById("classificacao").innerHTML = "obesidade 3"
        }
        else{

        }
    }
    else{
        
        if (resultado <= 22){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco1.png";
            document.getElementById("classificacao").innerHTML = "baixo peso"
        }
        else if (resultado > 22 && resultado < 27){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco2.png";
            document.getElementById("classificacao").innerHTML = "adequado"
        }
        else if (resultado >=27){
            document.getElementById("resultadoimc").innerHTML = resultado.toFixed([1])
            imagem.src="imagens/boneco3.png";
            document.getElementById("classificacao").innerHTML = "sobrepeso"
        }
    }
       
}   


