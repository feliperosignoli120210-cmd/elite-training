let genderSelected = "";

function setGender(gender) {
    genderSelected = gender;
    document.getElementById('gender-step').style.display = 'none';
    document.getElementById('division-step').style.display = 'block';
    
    const optionsDiv = document.getElementById('division-options');
    optionsDiv.innerHTML = ""; 

    if (gender === 'masculino') {
        optionsDiv.innerHTML = `
            <label class="radio-option"><input type="radio" name="divisao" value="ppl" checked> PPL (6 Dias - Hipertrofia Máxima)</label>
            <label class="radio-option"><input type="radio" name="divisao" value="ppl-ul"> PPL + UPPER (5 Dias - Híbrido Elite)</label>
            <label class="radio-option"><input type="radio" name="divisao" value="abcd"> ABCD (4 Dias - Foco Definição)</label>
            <label class="radio-option"><input type="radio" name="divisao" value="up2x"> UP2X (4 Dias - Foco Superior)</label>
        `;
    } else {
        optionsDiv.innerHTML = `
            <label class="radio-option"><input type="radio" name="divisao" value="fem-ab" checked> AB (3 Dias - Tonificação Inicial)</label>
            <label class="radio-option"><input type="radio" name="divisao" value="fem-abc"> ABC (4 Dias - Foco Glúteo e Posterior)</label>
            <label class="radio-option"><input type="radio" name="divisao" value="fem-abcde"> ABCDE (5 Dias - Protocolo Sophia Bianco / Pro)</label>
        `;
    }
}

document.getElementById('treinoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const divisao = document.querySelector('input[name="divisao"]:checked').value;
    
    const rotas = {
        'ppl': 'treino-ppl.html',
        'ppl-ul': 'treino-ppl-ul.html',
        'abcd': 'treino-abcd.html',
        'up2x': 'treino-up2x.html',
        'fem-ab': 'treino-femininoAB.html',
        'fem-abc': 'treino-femininoABC.html',
        'fem-abcde': 'treino-femininoABCDE.html'
    };
    
    window.location.href = rotas[divisao];
});
