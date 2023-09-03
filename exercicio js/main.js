function compararValores() {
    
    var campoA = parseFloat(document.getElementById("campA").value);
    var campoB = parseFloat(document.getElementById("campB").value);
        if (campoA < campoB) {
            alert("Tudo está certo! " + campoB+ " é maior que " + campoA );
        } else {
            alert("Algo está errado. " + campoB+ " não é maior que. " + campoA );
        }

}