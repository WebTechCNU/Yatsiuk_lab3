// Отримуємо всі кнопки "Додати до кошика"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cartArr = [];

// Цикл для додавання обробників подій до кожної кнопки
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Функція, яка додає товар до кошика
function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  let id = Number(product.querySelector('.product-name').id);
  const productName = product.querySelector('.product-name').innerText;
  const productPrice = product.querySelector('.product-price').innerText;
  
  // Створюємо новий рядок у таблиці кошика з інформацією про товар
  const cartRow = document.createElement('tr');
  cartRow.innerHTML = `
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>1</td>
    <td><button class="remove-item">Видалити</button></td>
  `;

  cartArr.push({id, productName, productPrice});
  
  const cartItems = document.querySelector('#cart-items');
  cartItems.append(cartRow);

  updateCart();
  
  // Додаємо обробник події для кнопки "Видалити" в рядку кошика
  const removeButton = cartRow.querySelector('.remove-item');
  removeButton.addEventListener('click', removeFromCart);
}

// Функція, яка видаляє товар з кошика
function removeFromCart(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
}

function updateCart() {

    let barColors = [
        "rgba(0,0,255,0.5)",
        "rgba(255,0,255,0.5)",
        "rgba(255,0,0,0.5)",
    ];

    let xValues = cartArr.map(el => el.productName);
    let yValues = [cartArr.filter(el => el.id == 0).length,
    cartArr.filter(el => el.id == 1).length,
    cartArr.filter(el => el.id == 2).length];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Cart"
            }
        }
    });
}