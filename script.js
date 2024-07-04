var msg = document.getElementById("msg");
var storeduname = localStorage.getItem("uname");
msg.innerHTML = "Hi, " + storeduname;
