const enviar = document.getElementById("btn_enviar");
var msn = document.getElementById ("mensagem")
var valorA = 0
var valorB = 0

function e () {
    var valorA = document.getElementById("valorA");
    var valorB = document.getElementById("valorB");
    valorA = parseFloat(valorA.value)
    valorB = parseFloat(valorB.value)
    var ehmaior = valorB>valorA
    
    if (ehmaior == false){
        msn.classList.remove("correto")
        msn.classList.add("erro");
        msn.innerHTML = `<b>Erro</b><br>O valor A: ${valorA} é maior que o valor B: ${valorB}`;
        return msn
        msn.classList.remove("erro")
    }
    if (ehmaior == true){
        msn.classList.remove("erro")
        msn.classList.add("correto");
        msn.innerHTML = `<b>Correto</b><br>O valor A: ${valorA} é menor que o valor B: ${valorB}`
        return msn
    }
}   
enviar.addEventListener ('click',e) 

