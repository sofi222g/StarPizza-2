displayPizza("JSON/pizza-JSON.json");
displayPasta("JSON/pasta-JSON.json");
displaySparkles("JSON/sparkles.JSON");
displaySoftDrinks("JSON/softdrinks.JSON");

async function displayPizza(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("pizza");
    
    let html = "";
    html = createPizza(t.pizza);
    
    e.innerHTML = html;
}
 
function createPizza(element)
{
    return `
      <div class="number">1.</div>
            <div class="name">${element[0].name}</div>
            <div class="ingredients">${element[0].ingredients}</div>
            <div class="imgage">
                <a href="${element[0].bigImage}" target="_blank">
                    <img src="${element[0].smallImage}" alt="Margarita Pizza" title="Margarita Pizza" /></a>
            </div>
            <div class="price">${element[0].price}</div>
            <button onclick="addToCart('${element[0].name}', '${element[0].price}')">Add to Cart</button>

            <div class="number">2.</div>
            <div class="name">${element[1].name}</div>
            <div class="ingredients">${element[1].ingredients}</div>
            <div class="imgage">
                <a href="${element[1].bigImage}" target="_blank">
                    <img src="${element[1].smallImage}" alt="Hawaiian Pizza" title="Hawaiian Pizza" /></a> 
            </div>
            <div class="price">${element[1].price}</div>
            <button onclick="addToCart('${element[1].name}', '${element[1].price}')">Add to Cart</button>

            <div class="number">3.</div>
            <div class="name">${element[2].name}</div>
            <div class="ingredients">${element[2].ingredients}</div>
            <div class="imgage">
                <a href="${element[2].bigImage}" target="_blank">
                    <img src="${element[2].smallImage}" alt="Pepperoni Pizza" title="Pepperoni Pizza" /></a>
            </div>
            <div class="price">${element[2].price}</div>
            <button onclick="addToCart('${element[2].name}', '${element[2].price}')">Add to Cart</button>

            <div class="number">4.</div>
            <div class="name">${element[3].name}</div>
            <div class="ingredients">${element[3].ingredients}</div>
            <div class="imgage">
                <a href="${element[3].bigImage}" target="_blank">
                    <img src="${element[3].smallImage}" alt="Curry Chicken Pizza" title="Curry Chicken Pizza" /></a>
            </div>
            <div class="price">${element[3].price}</div>
            <button onclick="addToCart('${element[3].name}', '${element[3].price}')">Add to Cart</button>

            <div class="number">5.</div>
            <div class="name">${element[4].name}</div>
            <div class="ingredients">${element[4].ingredients}</div>
            <div class="imgage">
                <a href="${element[4].bigImage}" target="_blank">
                    <img src="${element[4].smallImage}" alt="Ranch Chicken Pizza" title="Ranch Chicken Pizza" /></a>
            </div>
            <div class="price">${element[4].price}</div>
            <button onclick="addToCart('${element[4].name}', '${element[4].price}')">Add to Cart</button>

            <div class="number">6.</div>
            <div class="name">${element[5].name}</div>
            <div class="ingredients">${element[5].ingredients}</div>
            <div class="imgage">
                <a href="${element[5].bigImage}" target="_blank">
                    <img src="${element[5].smallImage}" alt="Supreme Pizza" title="Supreme Pizza" /></a> 
            </div>
            <div class="price">${element[5].price}</div>
            <button onclick="addToCart('${element[5].name}', '${element[5].price}')">Add to Cart</button>

            <div class="number">7.</div>
            <div class="name">${element[6].name}</div>
            <div class="ingredients">${element[6].ingredients}</div>
            <div class="imgage">
                <a href="${element[6].bigImage}" target="_blank">
                    <img src="${element[6].smallImage}" alt="Veggie Lovers Pizza" title="Veggie Lovers Pizza" /></a>
            </div>
            <div class="price">${element[6].price}</div>
            <button onclick="addToCart('${element[6].name}', '${element[6].price}')">Add to Cart</button>`;
}

async function displayPasta(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("pasta");
    
    let html = "";
    html = createPasta(t.pasta);
    
    e.innerHTML = html;
}

function createPasta(element)
{
    return `
      <div class="number">8.</div>
            <div class="name">${element[0].name}</div>
            <div class="ingredients">${element[0].ingredients}</div>
            <div class="imgage">
                <a href="${element[0].image}" target="_blank">
                    <img src="${element[0].image}" alt="Creamy Mushroom Pasta" width="150" height="80" title="Creamy Mushroom Pasta" /></a>
            </div>
            <div class="price">${element[0].price}</div>
            <button onclick="addToCart('${element[0].name}', '${element[0].price}')">Add to Cart</button>

            <div class="number">9.</div>
            <div class="name">${element[1].name}</div>
            <div class="ingredients">${element[1].ingredients} </div>
            <div class="imgage">
                <a href="${element[1].image}" target="_blank">
                    <img src="${element[1].image}" alt="Squid Scallop Pasta" width="150" height="80" title="Squid Scallop Pasta" /></a>
            </div>
            <div class="price">${element[1].price}</div>
            <button onclick="addToCart('${element[1].name}', '${element[1].price}')">Add to Cart</button>`;
}

async function displaySparkles(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("spar");
    
    let html = "";
    html = createSoftDrinks(t.sparkles);
    
    e.innerHTML = html;
}

function createSparkles(element)
{
    return `
     <div class="num">10.</div>
            <div clas="nam">${element[0].name}</div>
            <div class="price">${element[0].price}</div>
            <button onclick="addToCart('${element[0].name}', '${element[0].price}')">Add to Cart</button>
    <div class="num">11.</div>
            <div clas="nam">${element[1].name}</div>
            <div class="price">${element[1].price}</div>
            <button onclick="addToCart('${element[1].name}', '${element[1].price}')">Add to Cart</button>
    <div class="num">12.</div>
            <div clas="nam">${element[2].name}</div>
            <div class="price">${element[2].price}</div>
            <button onclick="addToCart('${element[2].name}', '${element[2].price}')">Add to Cart</button>
    <div class="num">13.</div>
            <div clas="nam">${element[3].name}</div>
            <div class="price">${element[3].price}</div>
            <button onclick="addToCart('${element[3].name}', '${element[3].price}')">Add to Cart</button>
    <div class="num">14.</div>
            <div clas="nam">${element[4].name}</div>
            <div class="price">${element[4].price}</div>
            <button onclick="addToCart('${element[4].name}', '${element[4].price}')">Add to Cart</button>`;
}

async function displaySoftDrinks(file)
{
    let o = await fetch(file);
    let t = await o.json();   
    e = document.getElementById("soft");
    
    let html = "";
    html = createSoftDrinks(t.softdrinks);
    
    e.innerHTML = html;
}

function createSoftDrinks(element)
{
    return `
    <div class="num">15.</div>
        <div class="name">${element[0].name}</div>
        <div class="price">${element[0].price}</div>
        <button onclick="addToCart('${element[0].name}', '${element[0].price}')">Add to Cart</button>
    <div class="num">16.</div>
        <div class="name">${element[1].name}</div>
        <div class="price">${element[1].price}</div>
        <button onclick="addToCart('${element[1].name}', '${element[1].price}')">Add to Cart</button>
    <div class="num">17.</div>
        <div class="name">${element[2].name}</div>
        <div class="price">${element[2].price}</div>
        <button onclick="addToCart('${element[2].name}', '${element[2].price}')">Add to Cart</button>
    <div class="num">18.</div>
        <div class="name">${element[3].name}</div>
        <div class="price">${element[3].price}</div>
        <button onclick="addToCart('${element[3].name}', '${element[3].price}')">Add to Cart</button>
    <div class="num">19.</div>
        <div class="name">${element[4].name}</div>
        <div class="price">${element[4].price}</div>
        <button onclick="addToCart('${element[4].name}', '${element[4].price}')">Add to Cart</button>`;
}

let cart = [];

function addToCart(name, price) {

    price = parseFloat(price); // Convert price to a number
    // Check if the item already exists in the cart
    let existingElement = cart.find(element => element.name === name);
    if (existingElement) {
        existingElement.quantity++; // Increment quantity if item exists
    } else {
        // Add new item to the cart
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCart(); // Update the cart display
    console.log(cart); // Debugging: Log the cart to the console
}


function removeFromCart(name) {
    cart = cart.filter(element => element.name !== name);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(element => {
        const li = document.createElement('li');
        li.textContent = `${element.name} - ${element.price} x ${element.quantity}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(element.name);
        li.appendChild(removeButton);
        cartItems.appendChild(li);

        total += element.price * element.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2); // Display total with 2 decimal places
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}
window.onload = loadCart;

window.addEventListener("scroll", function () {
    const cart = document.getElementById("cart");
    const placeholder = document.getElementById("cart-placeholder");
    const footer = document.querySelector("footer");
    const placeholderTop = placeholder.getBoundingClientRect().top;
    const footerTop = footer.getBoundingClientRect().top;
    const cartHeight = cart.offsetHeight;
    const gap = 20;

    if (placeholderTop <= window.innerHeight - cartHeight - gap) {
        // Stop the cart at its final position
        cart.style.position = "absolute";
        cart.style.bottom = "auto";
        cart.style.top = `${window.scrollY + placeholderTop - cartHeight}px`;
    } else if (footerTop <= window.innerHeight + gap) {
        // Stop the cart when it overlaps with the footer
        cart.style.position = "absolute";
        cart.style.bottom = "auto";
        cart.style.top = `${window.scrollY + footerTop - cartHeight - gap}px`;
    } else {
        // Make the cart sticky at the bottom
        cart.style.position = "sticky";
        cart.style.bottom = `${gap}px`;
        cart.style.top = "auto";
    }
});

console.log("End of script");
console.log("End of script");
