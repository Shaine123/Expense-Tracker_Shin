const balance = document.getElementById("balance");
const incomeElmt = document.getElementById("income");
const expensesElmt = document.getElementById("expenses");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const form = document.getElementById("submit-form");

form.addEventListener("submit", addTransactions);

const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

console.log(transactions);

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

  localStorage.setItem("transaction", transactions);

  updateIncomeSummary();
}

function updateIncomeSummary() {
  const balanceVal = transactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const income = transactions.reduce((acc, curr) => {
    if (curr.amount > 0) {
      return acc + curr.amount;
    } else {
      return acc - curr.amount;
    }
  }, 0);

  const expenses = transactions
    .filter((transaction) => {
      if (transaction.amount < 0) {
        return transaction;
      }
    })
    .reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

  balance.textContent = formatAmount(balanceVal);
  incomeElmt.textContent = formatAmount(income);
  expensesElmt.textContent = formatAmount(expenses);
}

function formatAmount(val) {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);

  return usd;
}

updateIncomeSummary();
