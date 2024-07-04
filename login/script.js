document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var loginuname = document.getElementById("email-1").value;
    var loginupass = document.getElementById("password-2").value;
    var storeduname = localStorage.getItem("uname");
    var storedupass = localStorage.getItem("upass");
    if (loginuname === storeduname && loginupass === storedupass) {
      alert("Login Successfully");
      // window.location.href="bankapp.html"
      window.location.href = "../index.html";
    } else {
      alert("Invalid Credentials");
    }
  });
