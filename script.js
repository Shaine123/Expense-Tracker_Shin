const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expenses = document.getElementById("expenses");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const form = document.getElementById("submit-form");

form.addEventListener("submit", addTransactions);

function addTransactions(e) {
  e.preventDefault();
}
