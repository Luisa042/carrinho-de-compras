let valorTotal = [0, 0];
let valorProduto = [49.99, 64.9];
let quantidadeItem = [0, 0];

function addItem(itemIndex) {
  let quantidade = document.getElementById('quantidade' + itemIndex);
  let custoTotalPorItem = document.getElementById('total' + itemIndex);

  quantidadeItem[itemIndex] += 1;
  valorTotal[itemIndex] =
    Number.parseFloat(valorProduto[itemIndex]) * quantidadeItem[itemIndex];

  quantidade.innerHTML = quantidadeItem[itemIndex];
  custoTotalPorItem.innerHTML = valorTotal[itemIndex].toFixed(2);
}

function removeItem(itemIndex) {
  let quantidade = document.getElementById('quantidade' + itemIndex);
  let custoTotalPorItem = document.getElementById('total' + itemIndex);

  if (quantidadeItem[itemIndex] > 0) {
    quantidadeItem[itemIndex] -= 1;
    valorTotal[itemIndex] =
      Number.parseFloat(valorProduto[itemIndex]) * quantidadeItem[itemIndex];

    quantidade.innerHTML = quantidadeItem[itemIndex];
    custoTotalPorItem.innerHTML = valorTotal[itemIndex].toFixed(2);
  }
}
