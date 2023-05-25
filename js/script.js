/* menghitung luas persegi */
function hitungLuas() {
  var sisiLuas = document.getElementById("sisi-luas").value;

  if (sisiLuas.trim() !== "") {
    var luas = sisiLuas * sisiLuas;
    document.getElementById("output-luas").innerHTML = luas;
    document.getElementById("perhitungan-luas").innerHTML =
      "L = " + sisiLuas + " x " + sisiLuas;
    /* untuk menampilkan hasil */
    var resultElements = document.getElementsByClassName("result-luas");
    for (var i = 0; i < resultElements.length; i++) {
      resultElements[i].style.display = "block";
    }
  }
}

/* menghitung keliling persegi */
function hitungKeliling() {
  var sisiKeliling = document.getElementById("sisi-keliling").value;

  if (sisiKeliling.trim() !== "") {
    var keliling = 4 * sisiKeliling;
    document.getElementById("output-keliling").innerHTML = keliling;
    document.getElementById("perhitungan-keliling").innerHTML =
      "K = 4 x " + sisiKeliling;
    /* untuk menampilkan hasil */
    var resultElements = document.getElementsByClassName("result-keliling");
    for (var i = 0; i < resultElements.length; i++) {
      resultElements[i].style.display = "block";
    }
  }
}

function resetForm() {
  var inputElements = document.getElementsByTagName("input");
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].value = "";
  }

  var resetButton = event.target;
  var parentDiv = resetButton.parentNode;

  var resultElements = parentDiv.getElementsByClassName("result-luas");
  for (var i = 0; i < resultElements.length; i++) {
    resultElements[i].style.display = "none";
  }

  resultElements = parentDiv.getElementsByClassName("result-keliling");
  for (var i = 0; i < resultElements.length; i++) {
    resultElements[i].style.display = "none";
  }
}
