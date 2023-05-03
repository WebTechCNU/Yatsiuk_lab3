let products = [
    {
        img : "https://content.rozetka.com.ua/goods/images/big/217523507.jpg",
        name: "Product 1",
        description: "Яскравий та неймовірний поп іт у формі падаючої зірки. Лише у нас ви знайдете такий великий вибір поп іт",
        discount: "10% off",
        category: 1
    },
    {
        img : "https://skidka.ua/upload/resize_cache/iblock/37a/488_416_1/ib5rnm1osms1oeycb1ggpvtcevahe56t.jpeg",
        name: "Product 2",
        description: "Милий та компактний поп іт у формі крокодила. Саме те, що потрібно вашому капризному малюку!",
        discount: "20% off"
    },
    {
        img : "https://moto360.com.ua/wp-content/uploads/2021/06/popit-1.jpg",
        name: "Product 3",
        description: "Чудовий поп іт для великої компанії. Підійде для класної вечірки з друзями, родиною і навіть для бабусь та дідусів!",
        discount: "15 off"
    },
    {
        img : "https://content2.rozetka.com.ua/goods/images/big/185559982.jpg",
        name: "Product 4",
        description: "Чудовий поп іт для великої компанії. Підійде для класної вечірки з друзями, родиною і навіть для бабусь та дідусів!",
        discount: "15 off"
    },
    {
        img : "https://images.prom.ua/3292986067_w640_h640_3292986067.jpg",
        name: "Product 5",
        description: "Чудовий поп іт для великої компанії. Підійде для класної вечірки з друзями, родиною і навіть для бабусь та дідусів!",
        discount: "15 off"
    },
    {
        img : "https://storage.skidka.ua/resize_cache/39532997/2c892186afd397a1143429e31946fa86/iblock/a71/a71bdcb2a4307b067be7bf0bec14fd98/4c31c59fa817144c560ef76f31306043.jpeg",
        name: "Product 6",
        description: "Чудовий поп іт для великої компанії. Підійде для класної вечірки з друзями, родиною і навіть для бабусь та дідусів!",
        discount: "15 off"
    }
]

function getProducts(){
    let container = document.querySelector("#cards-container");
    let output = "<div class='row'>";
    let i = 0;
    products.forEach(Element => {
        output += "<div class='col-sm-4'>";
        output += '<div class="card">';
        output +=  '<img src="'+Element.img+'" alt="'+Element.name+'">';
        output += '<p class="description"> '+Element.description+' </p>';
        output += '<p class="description discount"> '+Element.discount+' </p>';

        // TODO
        output += '</div>';
        output += '</div>';
        if(i % 3 == 2){
            output += "</div><div class='row'>"
        }
        i++;
    })
    output += "</div>"
    container.innerHTML = output;

}

function getCategory(){
    let filters = document.querySelector("#filters");
}

function getCategoryOne() {
    // отримати всі карточки продуктів
    let products = document.querySelectorAll('.card');
    // перебрати всі карточки продуктів
    products.forEach(function(product) {
      if (product.classList.contains('category-1')) {
        // показати продукт
        product.style.display = 'block';
      } else {
        // приховати продукт
        product.style.display = 'none';
      }
    });
  }

  // обрати картки продуктів, які відносяться до категорії 1, та додати їм клас "category-1"
let categoryOneProducts = document.querySelectorAll('.category-1');
categoryOneProducts.forEach(function(product) {
  product.classList.add('category-1');
});



  setTimeout(function () {
    let modal = document.getElementById("subcribe");
    let span = document.getElementById("close-sub");
    let sub_span = document.getElementById("sub-span");
    let reject_span = document.getElementById("reject-span");
    let close_span = document.getElementById("close-sub");
  
    if (localStorage.getItem("subscribed") === "true") {
      return;
    }
  
    modal.style.display = "block";
    span.classList.add("close-hover");
  
    //SUB
    sub_span.onclick = function () {
      localStorage.setItem("subscribed", "true");
      modal.style.display = "none";
      alert("Дякуємо за підписку!");
    };

    reject_span.onclick = function () {
        modal.style.display = "none";
      };

      close_span.onclick = function () {
        modal.style.display = "none";
      };

    function Filter(option) {
        const nodes = document.querySelectorAll(".node");
      
        nodes.forEach((element) => {
          const text = element.textContent;
      
          if (!text.includes(option)) {
            if (element.classList.contains("view")) {
              element.classList.remove("view");
            }
            element.classList.add("hide");
            return;
          }
      
          element.classList.remove("hide");
          element.classList.add("view");
        });
      }}, 3000);

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
