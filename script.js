function clicar() {
  var n01 = document.querySelector(".n01").value;
  var n02 = document.querySelector(".n02").value;
  var n03 = document.querySelector(".n03").value;
  var n04 = document.querySelector(".n04").value;

  var media =
    (parseFloat(n01) + parseFloat(n02) + parseFloat(n03) + parseFloat(n04)) / 4;
  document.querySelector(".media").innerHTML = media;

  if (media > 6) {
    alert("Aprovado!");

    document.body.style.background = "#81E077";
  } else {
    alert("Reprovado!");

    document.body.style.background = "#FA5644";
  }
}
