// document.getElementById("details").style.color = "blue";

// meathod1
// var details;
// details = document.getElementById("details");

// meathod2
// var details = document.getElementById("details")
// details.style.color = "blue";

// details.innerHTML = "Amresh"

// var foo = "Hello ProGrad Jr";

// foo = "ProGRad Jr, where kids fall in love with coding";
// document.write(foo);

// cart
// cartValue
// totalCost
// totalValue
// console.log(book1.name);

var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

//  var book1Add = document.getElementById("book1");
//  var book2Add = document.getElementById("book2");
//  var book3Add = document.getElementById("book3");
//  var book4Add = document.getElementById("book4");
//  var book5Add = document.getElementById("book5");
//  var book6Add = document.getElementById("book6");

//  var game1Add = document.getElementById("game1");
//  var game2Add = document.getElementById("game2");
//  var game3Add = document.getElementById("game3");
//  var game4Add = document.getElementById("game4");

//  var craft1Add = document.getElementById("craft1");
//  var craft2Add = document.getElementById("craft2");
//  var craft3Add = document.getElementById("craft3");
//  var craft4Add = document.getElementById("craft4");

var addButtons = document.getElementsByClassName("button")

console.log(addButtons[0]);

var items = [
  {
  name: "Autonomous Vehicle",
  quantity: 0,
  dollars: 95105,
  cents: 50,
},
{
  name: "Paper Bag",
  quantity: 0,
  dollars: 2,
  cents: 72,
},
{
  name: "Organic Towels",
  quantity: 0,
  dollars: 10,
  cents: 87,
},
{
  name: "Wool Footwear",
  quantity: 0,
  dollars: 16,
  cents: 30,
},
{
  name: "Ballpoint Pens",
  quantity: 0,
  dollars: 2,
  cents: 72,
},
{
  name: "Stainless Steel Drink Bottles",
  quantity: 0,
  dollars: 13,
  cents: 59,
},
 {
  name: "Biodegradable Garden Pots",
  quantity: 0,
  dollars: 5,
  cents: 43,
},
 {
  name: "Compostable Party Plates",
  quantity: 0,
  dollars: 2,
  cents: 72,
},
 {
  name: "The BRELLI — Eco Friendly Umbrella",
  quantity: 0,
  dollars: 13,
  cents: 32,
},
 {
  name: "Travel Pouch",
  quantity: 0,
  dollars: 8,
  cents: 15,
},
{
  name: "Reusable Bulk Food Bags",
  quantity: 0,
  dollars: 6,
  cents: 79,
},
{
  name: "Compostable Bin Liners",
  quantity: 0,
  dollars: 20,
  cents: 38,
},
{
  name: "Eco Friendly Decking",
  quantity: 0,
  dollars: 9,
  cents: 10,
},
{
  name: "Aluminium Foil",
  quantity: 0,
  dollars: 3,
  cents: 53,
},
{
  name: "Compostable Bowls",
  quantity: 0,
  dollars: 5,
  cents: 71,
},
{
  name: "Reusable Shopping Bags",
  quantity: 0,
  dollars: 9,
  cents: 24,
},
{
  name: "Vortex’s Rechargeable Crank Flashlight",
  quantity: 0,
  dollars: 7,
  cents: 47,
},
{
  name: "Reusable Baby Food Pouch",
  quantity: 0,
  dollars: 13,
  cents: 59,
},
];

function updateCart() {
 let cart = 0;
 for (index = 0; index < items.length; index++){
   cart = cart + items[index].quantity;
 }
 cartValue.innerHTML = cart;
}

// function updateCart() {
//   cart =
//     book1.quantity +
//     book2.quantity +
//     book3.quantity +
//     book4.quantity +
//     book5.quantity +
//     book6.quantity +
//     game1.quantity +
//     game2.quantity +
//     game3.quantity +
//     game4.quantity +
//     craft1.quantity +
//     craft2.quantity +
//     craft3.quantity +
//     craft4.quantity;
//   cartValue.innerHTML = cart;
// }

for (let i = 0; i < addButtons.length; i++) {
 addButtons[i].onclick = (e) => {
   items[i].quantity++;
    updateCart();
  };
}

// book1Add.onclick = (e) => {
//   book1.quantity++;
//   updateCart();
// };
// book2Add.onclick = (e) => {
//   book2.quantity++;
//   updateCart();
// };
// book3Add.onclick = (e) => {
//   book3.quantity++;
//   updateCart();
// };
// book4Add.onclick = (e) => {
//   book4.quantity++;
//   updateCart();
// };
// book5Add.onclick = (e) => {
//   book5.quantity++;
//   updateCart();
// };
// book6Add.onclick = (e) => {
//   book6.quantity++;
//   updateCart();
// };

// game1Add.onclick = (e) => {
//   game1.quantity++;
//   updateCart();
// };
// game2Add.onclick = (e) => {
//   game2.quantity++;
//   updateCart();
// };
// game3Add.onclick = (e) => {
//   game3.quantity++;
//   updateCart();
// };
// game4Add.onclick = (e) => {
//   game4.quantity++;
//   updateCart();
// };

// craft1Add.onclick = (e) => {
//   craft1.quantity++;
//   updateCart();
// };
// craft2Add.onclick = (e) => {
//   craft2.quantity++;
//   updateCart();
// };

// craft3Add.onclick = (e) => {
//   craft3.quantity++;
//   updateCart();
// };

// craft4Add.onclick = (e) => {
//   craft4.quantity++;
//   updateCart();
// };

var finalDollers = 0;
var finalCents = 0;

function updatePrice() {
 let totalPriceInCents = 0;

 for(index = 0; index < items.length; index++) {
   totalPriceInCents = totalPriceInCents +
    items[index].quantity* (items[index].dollars*100 + items[index].cents)
 }
     finalDollers = Math.floor(totalPriceInCents / 100);
     finalCents = totalPriceInCents % 100;
}

// function updatePrice() {
//    var book1CostInCents =
//      book1.quantity * book1.dollars * 100 + book1.quantity * book1.cents;
//     var book2CostInCents =
//      book2.quantity * book2.dollars * 100 + book2.quantity * book2.cents;
//     var book3CostInCents =
//      book3.quantity * book3.dollars * 100 + book3.quantity * book3.cents;
//     var book4CostInCents =
//      book4.quantity * book4.dollars * 100 + book4.quantity * book4.cents;
//     var book5CostInCents =
//      book5.quantity * book5.dollars * 100 + book5.quantity * book5.cents;
//     var book6CostInCents =
//      book6.quantity * book6.dollars * 100 + book6.quantity * book6.cents;

//     var game1CostInCents=
//      game1.quantity*game1.dollars*100+game1.quantity*game1.cents;
//     var game2CostInCents=
//      game2.quantity*game2.dollars*100+game2.quantity*game2.cents;
//     var game3CostInCents=
//      game3.quantity*game3.dollars*100+game3.quantity*game3.cents;
//     var game4CostInCents=
//      game4.quantity*game4.dollars*100+game4.quantity*game4.cents;

//     var craft1CostInCents=
//      craft1.quantity*craft1.dollars*100+craft1.quantity*craft1.cents;
//     var craft2CostInCents=
//      craft2.quantity*craft2.dollars*100+craft2.quantity*craft2.cents;
//     var craft3CostInCents=
//      craft3.quantity*craft3.dollars*100+craft3.quantity*craft3.cents;
//     var craft4CostInCents=
//      craft4.quantity*craft4.dollars*100+craft4.quantity*craft4.cents;

//      totalPriceInCents = 
//      book1CostInCents +
//      book2CostInCents +
//      book3CostInCents +
//      book4CostInCents +
//      book5CostInCents +
//      book6CostInCents +

//      game1CostInCents +
//      game2CostInCents +
//      game3CostInCents +
//      game4CostInCents +

//      craft1CostInCents +
//      craft2CostInCents +
//      craft3CostInCents +
//      craft4CostInCents;

//      finalDollers = Math.floor(totalPriceInCents / 100);
//      finalCents = totalPriceInCents % 100;

// }


var whatsappLink = "https://api.whatsapp.com/send?phone=9632546777&text=Order%20details";

function updatewhatsappLink () {
 for (let index = 0; index < items.length; index++) {
   if(items[index].quantity != 0) {
     whatsappLink+="%0A" + items[index].name+"%20" + items[index].quantity;
 } 
}
whatsappLink += 
"%0A"+"Total%20Price:%20$"+finalDollers+"%20"+finalCents+"c"
}

// function updatewhatsappLink() {
//   if(book1.quantity != 0) {
//     whatsappLink+="%0A" +book1.name+"%20"+book1.quantity;
//   }
//   if(book2.quantity != 0) {
//     whatsappLink+="%0A" +book2.name+"%20"+book2.quantity;
//   }
//   if(book3.quantity != 0) {
//     whatsappLink+="%0A" +book3.name+"%20"+book3.quantity;
//   }
//   if(book4.quantity != 0) {
//     whatsappLink+="%0A" +book4.name+"%20"+book4.quantity;
//   }
//   if(book5.quantity != 0) {
//     whatsappLink+="%0A" +book5.name+"%20"+book5.quantity;
//   }
//   if(book6.quantity != 0) {
//     whatsappLink+="%0A" +book6.name+"%20"+book6.quantity;
//   }

//   if(game1.quantity != 0) {
//     whatsappLink+="%0A" +game1.name+"%20"+game1.quantity;
//   }
//   if(game2.quantity != 0) {
//     whatsappLink+="%0A" +game2.name+"%20"+game2.quantity;
//   }
//   if(game3.quantity != 0) {
//     whatsappLink+="%0A" +game3.name+"%20"+game3.quantity;
//   }
//   if(game4.quantity != 0) {
//     whatsappLink+="%0A" +game4.name+"%20"+game4.quantity;
//   }
 
//   if(craft1.quantity != 0) {
//     whatsappLink+="%0A" +craft1.name+"%20"+craft1.quantity;
//   }
//   if(craft2.quantity != 0) {
//     whatsappLink+="%0A" +craft2.name+"%20"+craft2.quantity;
//   }
//   if(craft3.quantity != 0) {
//     whatsappLink+="%0A" +craft3.name+"%20"+craft3.quantity;
//   }
//   if(craft4.quantity != 0) {
//     whatsappLink+="%0A" +craft4.name+"%20"+craft4.quantity;
//   }

//   whatsappLink+="%0A"+"Total%20Price:%20$"+finalDollers+"%20"+finalCents+"c"
// }


cartButton.onclick = () => {
updatePrice();
 updatewhatsappLink();
 window.open(whatsappLink, "_blank");
}