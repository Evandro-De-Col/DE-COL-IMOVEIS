



let indiceAtual = 0;

function rolarAnuncios(direcao) {
    const anuncioLista = document.getElementById('anuncioLista');
    const totalAnuncios = anuncioLista.children.length;
    const anunciosPorVez = 3;

    // Atualiza o índice atual, com rotação circular a cada três anúncios
    indiceAtual += direcao * anunciosPorVez;
    if (indiceAtual < 0) {
        indiceAtual = totalAnuncios - anunciosPorVez;
    } else if (indiceAtual >= totalAnuncios) {
        indiceAtual = 0;
    }

    // Move a lista de anúncios
    anuncioLista.style.transform = `translateX(-${(indiceAtual / anunciosPorVez) * 100}%)`;
}




