const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

// Connecting html/css with javascript and selecting differnt elements
const inputPizza = document.querySelector(".pizza");
const inputAmount = document.querySelector(".amount");
const button = document.querySelector(".submit");
const popUp = document.querySelector("h2");
const receipt = document.querySelector("h3");

function checkOrderName(orderName) {
  if (
    orderName.toLowerCase() == vegetarian.toLowerCase() ||
    orderName.toLowerCase() == hawaiian.toLowerCase() ||
    orderName.toLowerCase() == pepperoni.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

let timeTocook;
function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity < 3) {
    timeTocook = "The pizzas will take 10 minutes to make";
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    timeTocook = "The pizzas will take 15 minutes to make";
  } else if (orderQuantity > 6) {
    timeTocook = "The pizzas will take 20 minutes to make";
  }
}

function resetInput() {
  inputPizza.value = "";
  inputAmount.value = "";
}

button.addEventListener("click", function () {
  let inputName = inputPizza.value;
  let amount = inputAmount.value;
  console.log(typeof amount);

  cookingTime(amount);

  if (!inputName == "" && !amount == "") {
    if (checkOrderName(inputName)) {
      resetInput();
      popUp.classList.remove("toggle");

      receipt.textContent = `receipt: ${amount} ${inputName} ${timeTocook} Totaltcost: ${
        amount * 80
      }kr`;
    } else {
      resetInput();
      receipt.textContent = "";
      if (popUp.classList.contains("toggle")) {
        popUp.classList.add("toggle");
      } else {
        popUp.classList.add("toggle");
      }
    }
  }
});
