function myFunction(id) {
    var x = document.getElementById(id).innerText;
    var y = document.createElement("textarea");
    document.body.appendChild(y);
    y.value = x;
    y.select();
    document.execCommand("copy");
    document.body.removeChild(y);
}
