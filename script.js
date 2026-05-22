javascript
let total = 0;
const button =
document.queryselectorAll(".add-to-cart");

const cartItems =
document.getElementById("cart-items");

const totalDisplay =
document.getElementById("total");

button. forEach(button=>{
button.addEventlistener("click",()=>
{
const name =
button.getAttribute("data-name");

const price=
Number(button.getAttribute("data-price"));
const li =
document.createElement("li");
li.textcontent =name +"-$"+ price

cartItems.appendChild(li);
total += price
totalDisplay. textcontent = total;
});
});
const search =
document.getElementById("search");
search.addEventlistener("keyup"'()=>{
const valve=
search. valve.tolowercase();
const books =
document.queryselectorAll(".Book");
books .forEach(book => {
const text =
book . textcontent.tolowerCase();
if(text.includes(valve)){
book. style. display= "block";
}
else{
book. style. display= "none";
}
});
});
