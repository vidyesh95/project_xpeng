document
  .getElementById("registerform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var uname = document.getElementById("email-1").value;
    var upass = document.getElementById("password-2").value;
    console.log(uname, upass);
    localStorage.setItem("uname", uname);
    localStorage.setItem("upass", upass);
    window.location.href = "../login/login.html";
  });
