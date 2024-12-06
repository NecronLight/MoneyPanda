const calculateButton = document.querySelector('#calculate-btn');
calculateButton.addEventListener('click', () => {
        let valor = prompt("Qual o valor investido?");
        let valorInt = parseInt(valor);
        
        let tempo = prompt("Qual a quantidade de meses do investimento?");
        let rendimento = prompt("Qual o rendimento mensal? Ex: 0.2");
        
        let valorFinal = valorInt + (valorInt * (tempo * (rendimento / 100)))
        console.log("O valor total será de R$",valorFinal);

        alert("O valor total será de R$" + valorFinal);


});