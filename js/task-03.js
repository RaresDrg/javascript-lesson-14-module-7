/* Task 3 - Cost calculator: 

  Create a product cost calculator depending on the price. When working with events,
use delegation. Render all markup via JS.
  When the data variable is entered in input #1 or #2, the total cost should be
automatically recalculated.
  The currency - USD should always be displayed.
  The total amount is displayed with pennies (2 decimal places).
  In the signature of the second input, there should be a color hint of how many
pounds the user selected on the second input.
  The color tooltip should change its value when the slider is dragged.
  In input No. 2, set min and max threshold by yourself.
  When loading the page, the script should automatically calculate the cost based
on the default data that you set in the markup.
*/

const formEl = document.querySelector("#form");
const priceEl = document.querySelector("#price");
const quantityEl = document.querySelector("#quantity");
const amountEl = document.querySelector("#amount");
const totalEl = document.querySelector("#total");

const priceInitialValue = priceEl.value;

// print total //
const printTotalEl = () => {
  const total = (priceEl.value * quantityEl.value).toFixed(2);
  totalEl.textContent = total;
};
printTotalEl();


// generate color //
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


// handle submit //
const handleChange = (e) => {
  const { target } = e;

  if (target === priceEl) {
    if (!Number(target.value)) {
      alert("Not a number. Only digits allowed, not letters");
      target.value = priceInitialValue;
    };
  };

  if (target === quantityEl) {
    const color = getRandomHexColor();
    quantityEl.style.accentColor = color;
    amountEl.style.backgroundColor = color;
    amountEl.textContent = target.value;
  };

  printTotalEl();
};


formEl.addEventListener("change", handleChange);
formEl.addEventListener("submit", (e) => {   // asta este pentru input, cand dau enter //
  e.preventDefault()
});