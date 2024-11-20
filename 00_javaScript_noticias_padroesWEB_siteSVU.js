const noticias = [
    {
        id: 1,
        titulo: "OMS: cinco vidas são salvas por vacinas contra o sarampo a cada segundo",
        categoria: "Destaque",
        resumo: "Vacina que previne o sarampo é a tríplice viral, que está disponível gratuitamente nos postos de saúde do Brasil",
        data: "15 de Março, 2024",
        imagem: "https://www.ufms.br/wp-content/uploads/2023/06/8e94623a-bd03-452a-8891-cf9c3aa8c2a3.jpeg"
    },
    {
        id: 2,
        titulo: "Fim da gotinha: vacina injetável substitui a oral para poliomielite ",
        categoria: "Destaque",
        resumo: "Mudança no esquema vacinal passa a ser definitiva a partir desta segunda-feira (4), segundo Ministério da Saúde",
        data: "15 de Março, 2024",
        imagem: "https://images02.brasildefato.com.br/2d9ca3cb127eb71f25c8e466f2bbccb2.jpeg"
    },
    {
        id: 3,
        titulo: "Ministério da Saúde vai analisar o pedido da Fiocruz para produzir vacina contra dengue",
        categoria: "Destaque",
        resumo: "Solicitação será analisada pela por comissões da pasta e não há um prazo definido para a conclusão",
        data: "15 de Março, 2024",
        imagem: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/11D74/production/_116567037_gettyimages-1287271384.jpg.webp"
    }
]; 

function carregarNoticias(pagina) {
    const inicio = (pagina - 1) * 6;
    const fim = inicio + 6;
    const noticiasExibidas = noticias.slice(inicio, fim);
    
    const gridNoticias = document.querySelector('.noticias-grid');
    gridNoticias.innerHTML = '';
    
    noticiasExibidas.forEach(noticia => {
        const noticiaHTML = `
            <article class="noticia-card">
                <img src="${noticia.imagem}" alt="${noticia.titulo}" />
                <div class="noticia-conteudo">
                    <span class="noticia-categoria">${noticia.categoria}</span>
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumo}</p>
                    <div class="noticia-metadata">
                        <span class="data">${noticia.data}</span>
                        <a href="#" class="ler-mais">Ler mais</a>
                    </div>
                </div>
            </article>
        `;
        gridNoticias.innerHTML += noticiaHTML;
    });
}

document.querySelector('.pagina-anterior').addEventListener('click', () => {
    const paginaAtual = parseInt(document.querySelector('.pagina-atual').textContent);
    if (paginaAtual > 1) {
        carregarNoticias(paginaAtual - 1);
        atualizarPaginacao(paginaAtual - 1);
    }
});

document.querySelector('.proxima-pagina').addEventListener('click', () => {
    const paginaAtual = parseInt(document.querySelector('.pagina-atual').textContent);
    const totalPaginas = Math.ceil(noticias.length / 6);
    if (paginaAtual < totalPaginas) {
        carregarNoticias(paginaAtual + 1);
        atualizarPaginacao(paginaAtual + 1);
    }
});

function atualizarPaginacao(pagina) {
    document.querySelector('.pagina-atual').textContent = pagina;
}

carregarNoticias(1); 