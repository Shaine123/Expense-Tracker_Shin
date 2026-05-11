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
    amount: parseInt(amount),
  });

  updateIncomeSummary();

  console.log(transactions);
}

function updateIncomeSummary() {
  const balanceVal = transactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const income = transactions
    .filter((trans) => {
      if (trans.amount > 0) {
        return trans;
      }
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  balance.textContent = parseInt(balanceVal);
}
