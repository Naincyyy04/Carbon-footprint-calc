function calculateCarbonFootprint() {
    var kilometers = parseFloat(document.getElementById('kilometers').value);
    var carbonFootprint = kilometers * 0.184; // assuming an average of 184 grams of CO2 emitted per kilometer driven
    document.getElementById('result').innerText = "Your carbon footprint from driving is approximately " + carbonFootprint.toFixed(2) + " kilograms of CO2 per day.";
}

function redirectToCalculator() {
    window.location.href = "file.html";
}
function nextpage(){
    window.location.href= "intro2.html";
}
function ways(){
    window.location.href="measures.html";
}
