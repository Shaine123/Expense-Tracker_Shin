const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expenses = document.getElementById("expenses");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const form = document.getElementById("submit-form");

form.addEventListener("submit", addTransactions);

const transactions = [];

function addTransactions(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const description = formData.get("description");
  const amount = formData.get("amount");

  transactions.push({
    id: Date.now(),
    description,
    amount,
  });

  updateIncomeSummary();
}

function updateIncomeSummary() {
  const balanceVal = transactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  balance.textContent = parseInt(balanceVal);
}
