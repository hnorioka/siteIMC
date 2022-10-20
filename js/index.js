
function calcular() {
    var v1 = parseFloat(document.getElementById("peso").value);
    var v2 = parseFloat(document.getElementById("altura").value);
    var v2 = v2/100
    document.getElementById("resultadoimc").innerHTML = "Imc:" + (v1/(v2*v2))
    
        
}

