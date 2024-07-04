var msg = document.getElementById("msg");
var storeduname = localStorage.getItem("uname");
msg.innerHTML = "Hi, " + storeduname;

const form = document.getElementById("calculate");
form.addEventListener("submit", function () {
    event.preventDefault();
    const fromcurrency = "USD";
    const tocurrency = "INR";
    const amount = Number(40000);
    const result = document.getElementById("result");
    let rate;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromcurrency}`)
        .then((response) => response.json())
        .then((data) => {
            rate = data.rates[tocurrency];
            const answer = amount * rate;
            result.innerHTML =
                amount +
                " " +
                fromcurrency +
                " is equal to " +
                answer +
                " " +
                tocurrency;
            //console.log(answer);
        });
});
