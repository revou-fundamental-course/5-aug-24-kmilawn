function formValidate() {
    let genderMale = document.getElementById('laki-laki').checked;
    let genderFemale = document.getElementById('perempuan').checked;
    let weight = parseFloat(document.getElementById('weight').value);
    let age = parseInt(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value) / 100;

    if ((genderMale || genderFemale) && age > 0 && weight > 0 && height > 0 ){
        let bmi = weight / (height * height);
        let resultBMI = bmi.toFixed(1);

        let kategoriBMI, saran;

        if (bmi < 18.5) {
            kategoriBMI = "Kekurangan Berat Badan";
            desc = "BMI Anda kurang dari 18.5. Anda berada dalam kategori kekurangan berat badan."
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            kategoriBMI = "Normal (ideal)";
            desc = "BMI Anda antara 18.5 - 24.9. Berat badan Anda berada dalam kategori normal."
        } else if (bmi >= 25.0 && bmi <= 29.9){
            kategoriBMI = "Kelebihan Berat Badan";
            desc = "BMI Anda antara 25.0 - 29.9. Berat badan Anda berada dalam kategori kelebihan berat badan."
        } else {
            kategoriBMI = "Kegemukan (obesitas)";
            desc = "BMI Anda di atas 30.0. Berat badan Anda berada dalam kategori kegemukan."
        }

        document.getElementById('result-bmi').textContent= resultBMI;
        document.getElementById('category').textContent= kategoriBMI;
        document.getElementById('explanation').textContent= desc;
        document.getElementById('result').textContent= 'block';
    } else {
        alert("Mohon untuk melengkapi semua data");
    }
}

function resetForm() {
    document.getElementById('bmi-form').reset();
    document.getElementById ('result').style.display= 'none';
    document.getElementById('result-bmi').textContent= '';
    document.getElementById('category').textContent= '';
    document.getElementById('explanation').textContent= '';

}

