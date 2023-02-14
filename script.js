var inputBinario = document.getElementById("binario")
var outputDecimal = document.getElementById("decimal")

function calcular() {
    var binariotxt = inverterString(inputBinario.value)
    
    if (binariotxt.length > 8) {
        alert("Digite no máximo 8 digitos")
    } else if (binarioOuNao(binariotxt)) {
        alert("Digite 0 ou 1")
    } else {
        var resultado = binarioParaDecimal(binariotxt)
        outputDecimal.value = resultado
    }

}

function inverterString(string) {
    var stringInvertida = ""
    for (var i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i]
    }

    return stringInvertida
}

function binarioOuNao(stringBinario) {
    for(var i = 0; i < stringBinario.length; i++) {
        var numeroAtual = Number(stringBinario.charAt(i))
        if (numeroAtual != 1 && numeroAtual != 0) {
            return true
        }
    }
    return false
}

function binarioParaDecimal(stringBinario) {
    var soma = Number()
    for(var i = 0; i < stringBinario.length; i++) {
        var numeroAtual = Number(stringBinario.charAt(i)) 
        var numeroPotencial = Math.pow(2, i)
        var numeroMultiplicado = numeroPotencial * numeroAtual
        soma += numeroMultiplicado
    }
    return soma
}




