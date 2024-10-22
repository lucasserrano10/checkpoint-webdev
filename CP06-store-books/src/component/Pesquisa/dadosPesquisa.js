// dadosPesquisa.js
const imagens = {
    'Acessibilidade na Web': require('../../imgs/Acessibilidade na Web.png'),
    'Bootstrap4': require('../../imgs/Bootstrap4.png'),
    'Coleção Cangaceiro JavaScript': require('../../imgs/Colecao Cangaceiro JavaScript.png'),
    'Coletânea Front-End': require('../../imgs/Coletânea Front-End.png'),
    'Guia Front-End': require('../../imgs/Guia Front-End.png'),
    'HTML5 e CSS3': require('../../imgs/HTML5 e CSS3.png'),
    'JavaScript Assertivo': require('../../imgs/JavaScript Assertivo.png'),
    'Liderança em Design': require('../../imgs/Liderança em Design.png'),
    'Progressive Web Apps': require('../../imgs/Progressive Web Apps.png'),
    'Sass': require('../../imgs/Sass.png'),
    'Turbine seu CSS': require('../../imgs/Turbine seu CSS.png'),
};

export const livros = [
    { nome: 'Acessibilidade na Web', id: 1, src: imagens['Acessibilidade na Web'], descricao: 'Descrição do livro sobre acessibilidade.' },
    { nome: 'Bootstrap4', id: 2, src: imagens['Bootstrap4'], descricao: 'Descrição do livro sobre Bootstrap.' },
    { nome: 'Coleção Cangaceiro JavaScript', id: 3, src: imagens['Coleção Cangaceiro JavaScript'], descricao: 'Descrição sobre Cangaceiro JavaScript.' },
    { nome: 'Coletânea Front-End', id: 4, src: imagens['Coletânea Front-End'], descricao: 'Descrição sobre Front-End.' },
    { nome: 'Guia Front-End', id: 5, src: imagens['Guia Front-End'], descricao: 'Guia para desenvolvedores Front-End.' },
    { nome: 'HTML5 e CSS3', id: 6, src: imagens['HTML5 e CSS3'], descricao: 'Aprenda HTML5 e CSS3.' },
    { nome: 'JavaScript Assertivo', id: 7, src: imagens['JavaScript Assertivo'], descricao: 'Descrição do livro sobre JavaScript.' },
    { nome: 'Liderança em Design', id: 8, src: imagens['Liderança em Design'], descricao: 'Descrição sobre liderança em design.' },
    { nome: 'Progressive Web Apps', id: 9, src: imagens['Progressive Web Apps'], descricao: 'Aprenda sobre PWA.' },
    { nome: 'Sass', id: 10, src: imagens['Sass'], descricao: 'Descrição do livro sobre Sass.' },
    { nome: 'Turbine seu CSS', id: 11, src: imagens['Turbine seu CSS'], descricao: 'Descrição sobre como turbinar seu CSS.' },
];

export const fetchLivros = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.map((livro, index) => ({
            nome: livro.nome,
            id: index + 1,
            src: imagens[livro.nome] || null,
            descricao: livro.descricao,
        }));
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        return [];
    }
};
