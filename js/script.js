document.getElementById("submit").addEventListener("click", formValidate);

function formValidate(e) {
  let genderMale = document.getElementById("laki-laki").value;
  let genderFemale = document.getElementById("perempuan").value;
  let weight = document.getElementById("weight").value;
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value / 100;

  let bmi = weight / (height * height);
  let resultBMI = bmi.toFixed(1);
  document.getElementById("result-bmi").innerHTML = resultBMI;

  if ((genderMale || genderFemale) && age > 0 && weight > 0 && height > 0) {
    e.preventDefault();
    if (bmi < 18.5) {
        document.getElementById("category").innerHTML = "Kekurangan Berat Badan";
        document.getElementById("explanation").innerHTML = "BMI Anda kurang dari 18.5. Anda berada dalam kategori kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("category").innerHTML = "Normal (ideal)";
        document.getElementById("explanation").innerHTML = "BMI Anda antara 18.5 - 24.9. Berat badan Anda berada dalam kategori normal.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        document.getElementById("category").innerHTML = "Kelebihan Berat Badan";
        document.getElementById("explanation").innerHTML =  "BMI Anda antara 25.0 - 29.9. Berat badan Anda berada dalam kategori kelebihan berat badan.";
    } else {
        document.getElementById("category").innerHTML = "Kegemukan (obesitas)";
        document.getElementById("explanation").innerHTML = "BMI Anda di atas 30.0. Berat badan Anda berada dalam kategori kegemukan.";
    }
  } else {
        document.getElementById("resultBMI").innerHTML = "";
        document.getElementById("category").innerHTML = "";
        document.getElementById("explanation").innerHTML = "";
  }
}