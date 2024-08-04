document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    const tdee = bmr * activity;
    
    document.getElementById('bmrResult').textContent = `Your Basal Metabolic Rate (BMR) is ${bmr.toFixed(2)} calories/day.`;
    document.getElementById('tdeeResult').textContent = `Your Total Daily Energy Expenditure (TDEE) is ${tdee.toFixed(2)} calories/day.`;
    
    document.getElementById('result').style.display = 'block';
});