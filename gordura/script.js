document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    const resultadoDiv = document.getElementById('resultado');

    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    resultadoDiv.innerHTML = `Seu IMC é ${imc} (${categoria}).<br>Considere agendar uma consulta para dicas personalizadas!`;
});