document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('treinoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const escolha = document.querySelector('input[name="objetivo"]:checked').value;
            const rotas = {
                'ppl': 'treino-ppl.html',
                'ppl-up': 'treino-ppl-ul.html', 
                'abcd': 'treino-abcd.html',
                'up2x': 'treino-up2x.html'
            };
            window.location.href = rotas[escolha];
        });
    }
});
