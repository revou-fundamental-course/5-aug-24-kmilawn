document.getElementById("submit").addEventListener("click", calculate);

function calculate(e) {
  var man = document.getElementById("selection-man").value;
  var woman = document.getElementById("selection-woman").value;
  var bb = document.getElementById("input-berat-badan").value;
  var age = document.getElementById("input-usia").value;
  var tb = document.getElementById("input-tinggi-badan").value;
  
  var bmi = bb / (((tb / 100) * tb) / 100);
  var result = bmi.toFixed(2);
  document.getElementById("result").innerHTML = result;

  if (bb >= 1 && tb >= 1) {
    e.preventDefault();
    if (bmi <= 18.5) {
      document.getElementById("category").innerHTML =
        "Underweight";
      document.getElementById("explanation").innerHTML =
        "Your BMI is less than 18.5. You are in the underweight category. The best way to gain weight is to make sure the food you consume is rich in nutrients. Focus on foods that contain carbohydrates, protein, and healthy fats."
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.getElementById("category").innerHTML = 
      "Normal (Ideal)";
      document.getElementById("explanation").innerHTML =
      "Your BMI is between 18.5 – 24.9. You are in the normal or ideal category."
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      document.getElementById("category").innerHTML =
        "Overweight";
      document.getElementById("explanation").innerHTML =
        "Your BMI is between 25.0 – 29.9. You are in the overweight or overweight category. The best way to lose weight is to regulate the calories of food consumed and exercise. If your BMI falls within this category then you are recommended to lose weight to normal limits."
    } else {
      document.getElementById("result").innerHTML = "";
      document.getElementById("comment").innerHTML = "";
      document.getElementById("category").innerHTML = "";
    } 
  }
}

function resetForm() {
  document.getElementById("bmi-form").reset();
  document.getElementById ("result").textContent= '';
  document.getElementById("category").textContent= '';
  document.getElementById("explanation").textContent= '';
}
