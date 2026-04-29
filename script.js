const products = [
  {name:"Rice", price:50, category:"ration"},
  {name:"Wheat", price:40, category:"ration"},
  {name:"Sugar", price:45, category:"ration"},
  {name:"Salt", price:20, category:"ration"},
  {name:"Oil", price:120, category:"ration"},
  
  {name:"Notebook", price:60, category:"stationery"},
  {name:"Pen", price:10, category:"stationery"},
  {name:"Pencil", price:5, category:"stationery"},
  {name:"Eraser", price:3, category:"stationery"},
  {name:"Scale", price:15, category:"stationery"},
  
  {name:"Chips", price:20, category:"snacks"},
  {name:"Biscuits", price:30, category:"snacks"},
  {name:"Chocolate", price:50, category:"snacks"},
  {name:"Namkeen", price:25, category:"snacks"},
  {name:"Cold Drink", price:40, category:"snacks"},

  {name:"Dal", price:80, category:"ration"},
  {name:"Soap", price:35, category:"ration"},
  {name:"Shampoo", price:90, category:"ration"},
  {name:"Brush", price:25, category:"ration"},
  {name:"Paste", price:55, category:"ration"},

  {name:"Marker", price:20, category:"stationery"},
  {name:"Glue", price:30, category:"stationery"},
  {name:"File", price:50, category:"stationery"},
  {name:"Stapler", price:70, category:"stationery"},
  {name:"Tape", price:25, category:"stationery"}
];

let cart = [];

function displayProducts(list){
  let html = "";
  list.forEach((p,i)=>{
    html += `
      <div class="product">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add</button>
      </div>
    `;
  });
  document.getElementById("products").innerHTML = html;
}

displayProducts(products);

function filterCategory(cat){
  if(cat==="all") return displayProducts(products);
  let filtered = products.filter(p=>p.category===cat);
  displayProducts(filtered);
}

function addToCart(i){
  cart.push(products[i]);
  document.getElementById("cart-count").innerText = cart.length;
  renderCart();
}

function renderCart(){
  let html="";
  cart.forEach(p=>{
    html+=`<li>${p.name} - ₹${p.price}</li>`;
  });
  document.getElementById("cart-items").innerHTML = html;
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("hidden");
}

function placeOrder(){
  let msg="Order:\n";
  cart.forEach(p=>{
    msg+=p.name+" ₹"+p.price+"\n";
  });

  let url = `https://wa.me/917484820713?text=${encodeURIComponent(msg)}`;
  window.open(url);
}

document.getElementById("search").addEventListener("input", function(){
  let val = this.value.toLowerCase();
  let filtered = products.filter(p=>p.name.toLowerCase().includes(val));
  displayProducts(filtered);
});
