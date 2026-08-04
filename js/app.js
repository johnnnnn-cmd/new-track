// JavaScript basics reminder
const name = "Alex";
let clickCount = 0;

function greet() {
  clickCount += 1;
  const heading = document.getElementById("title");
  heading.textContent = `Hello ${name}! Clicks: ${clickCount}`;
}

const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num));

if (clickCount === 0) {
  console.log("The button has not been clicked yet.");
}
