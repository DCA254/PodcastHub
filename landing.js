document.addEventListener('DOMContentLoaded', function() {
    // Capturando os elementos de botão
    const daviButton = document.getElementById('davi-button');
    const antonioButton = document.getElementById('antonio-button');
    
    // Adicionando event listeners para os cliques nos botões
    daviButton.addEventListener('click', function() {
        window.location.href = 'HTML/DaviPodcast.html';
    });
    
    antonioButton.addEventListener('click', function() {
        window.location.href = 'HTML/AntonioPodcast.html';
    });
});
