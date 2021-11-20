function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subTotalPrice = price * quantity;
  const total = product.querySelector(".subtotal span").innerText = subTotalPrice;
  //return total;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const all = document.getElementsByClassName("product");
  let total = 0;
  for(i = 0; i < all.length; i++){
    total += updateSubtotal(all[i])
  }

  // ITERATION 3
  let calculateTotal = document.querySelector("#total-value span");
  console.log(total)
  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
