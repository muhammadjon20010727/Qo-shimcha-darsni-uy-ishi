setInterval(() => {
  let soat = new Date();
  document.getElementById("soat").innerHTML =
    soat.getHours() + ":" + soat.getMinutes() + ":" + soat.getSeconds() + ":" + soat.getMilliseconds();
}, 1000);