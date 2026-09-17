// Store cart items
let cart = [];


// Add item to cart
function addToCart(subject, price) {

    cart.push({
        subject: subject,
        price: price
    });

    displayCart();

    alert(subject + " book added to cart!");
}


// Display cart
function displayCart() {

    let cartItems = document.getElementById("cartItems");

    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let total = 0;


    // Check empty cart
    if (cart.length === 0) {

        cartItems.innerHTML =
            "<li>Your cart is empty.</li>";

        totalPrice.innerText = "0";

        return;
    }


    // Display items
    cart.forEach(function(item, index) {

        let li = document.createElement("li");

        li.innerHTML =
            item.subject +
            " - ₹" +
            item.price +
            " " +
            `<button onclick="removeItem(${index})">
                Remove
            </button>`;

        cartItems.appendChild(li);

        total = total + item.price;
    });


    totalPrice.innerText = total;
}


// Remove item from cart
function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}


// Clear entire cart
function clearCart() {

    cart = [];

    displayCart();

    alert("Cart cleared successfully!");
}


// Scroll to subjects
function scrollToSubjects() {

    document.getElementById("subjects").scrollIntoView({
        behavior: "smooth"
    });
}


// Login function
function loginUser(event) {

    event.preventDefault();


    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;


    let message =
        document.getElementById("loginMessage");


    if (email === "" || password === "") {

        message.innerText =
            "Please fill all fields.";

        message.style.color = "red";

        return;
    }


    message.innerText =
        "Login successful! Welcome to ABC Limited Company.";

    message.style.color = "green";


    // Clear form
    document.getElementById("email").value = "";

    document.getElementById("password").value = "";
}


// Payment function
function makePayment(event) {

    event.preventDefault();


    let name =
        document.getElementById("paymentName").value;

    let method =
        document.getElementById("paymentMethod").value;


    let message =
        document.getElementById("paymentMessage");


    if (cart.length === 0) {

        message.innerText =
            "Please add at least one book to your cart.";

        message.style.color = "red";

        return;
    }


    let total = 0;


    cart.forEach(function(item) {

        total = total + item.price;

    });


    message.innerText =
        "Thank you " +
        name +
        "! Payment of ₹" +
        total +
        " using " +
        method +
        " is successful.";

    message.style.color = "green";


    // Clear cart after payment
    cart = [];

    displayCart();


    // Reset form
    document.getElementById("paymentName").value = "";

    document.getElementById("paymentMethod").value = "";
}