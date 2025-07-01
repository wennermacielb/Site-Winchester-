const produtos = [
  {
    tipo: "colar",
    titulo: "Colar Faca da Ruby",
    descricao: "Cordão ajustável inspirado na arma de Ruby.",
    imagem: "https://i.imgur.com/NSWzrsS.jpg"
  },
  {
    tipo: "colar",
    titulo: "Colar Pentagrama Dean",
    descricao: "Pingente com pentagrama e corrente preta.",
    imagem: "https://i.imgur.com/YeYd7cv.jpg"
  },
  {
    tipo: "caneca",
    titulo: "Caneca Personalizada Impala",
    descricao: "Caneca com desenho do Impala e irmãos.",
    imagem: "https://i.imgur.com/Nr6Fi0H.jpg"
  },
  {
    tipo: "caneca",
    titulo: "Caneca Mágica Supernatural",
    descricao: "Caneca que muda com calor. Personalize com seu nome!",
    imagem: "https://i.imgur.com/91yD3bs.jpg"
  },
  {
    tipo: "colar",
    titulo: "Colar Kansas KAZ 2Y5",
    descricao: "Placa do Impala como pingente metálico.",
    imagem: "https://i.imgur.com/xFrA7OX.jpg"
  }
];

const container = document.getElementById('produtos');

function mostrarProdutos(lista) {
  container.innerHTML = '';
  lista.forEach(produto => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.titulo}">
      <h3>${produto.titulo}</h3>
      <p>${produto.descricao}</p>
    `;
    container.appendChild(card);
  });
}

function filtrar(tipo) {
  if (tipo === 'todos') {
    mostrarProdutos(produtos);
  } else {
    const filtrados = produtos.filter(p => p.tipo === tipo);
    mostrarProdutos(filtrados);
  }
}

// Inicializa com todos
mostrarProdutos(produtos);