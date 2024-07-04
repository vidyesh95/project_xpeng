var msg = document.getElementById("msg");
var date = new Date();
var hour = date.getHours();
var storeduname = localStorage.getItem("uname");
if (hour < 12) {
  msg.innerHTML = "Good Morning " + storeduname;
} else if (hour < 18) {
  msg.innerHTML = "Good Afternoon " + storeduname;
} else {
  msg.innerHTML = "Good Evening " + storeduname;
}

let balance = 0;
const accountNumber = 1111;

function bankOperation() {
  const inputBalance = Number(document.getElementById("balance").value);
  const output = document.getElementById("output");
  const selectOption = document.getElementById("bank-option").value;
  if (selectOption === "create-account") {
    if (inputBalance >= 1000) {
      output.innerHTML =
        "Account created successfully and your account number is 1111";
    } else {
      output.innerHTML =
        "Minimum account to open account is greater than or equal to 1000. Please try again";
    }
  } else if (selectOption === "credit-amount") {
  } else {
  }
}
