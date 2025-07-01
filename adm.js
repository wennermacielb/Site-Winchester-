const form = document.getElementById("produtoForm");
const lista = document.getElementById("listaProdutos");

let produtos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const imagem = document.getElementById("imagem").value.trim();
  const tipo = document.getElementById("tipo").value;

  const novoProduto = {
    titulo,
    descricao,
    imagem,
    tipo
  };

  produtos.push(novoProduto);
  renderizarProdutos();
  form.reset();
});

function renderizarProdutos() {
  lista.innerHTML = "";

  if (produtos.length === 0) {
    lista.innerHTML = "<p>Nenhum produto cadastrado ainda.</p>";
    return;
  }

  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.titulo}">
      <div class="info">
        <h3>${produto.titulo}</h3>
        <p>${produto.descricao}</p>
        <small><strong>Tipo:</strong> ${produto.tipo}</small>
      </div>
    `;

    lista.appendChild(card);
  });
}