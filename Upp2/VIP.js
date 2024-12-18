let vip = false;
let age = 17;
const ageInput = document.getElementById("ageInput");
const vipCheckbox = document.getElementById("vipCheckbox");
const enterBtn = document.getElementById("enterBtn");
enterBtn.addEventListener("click", function() {
    age = parseInt(ageInput.value);  
    vip = vipCheckbox.checked;
    if (vip) {
        alert("Welcome in my best VIP customer :)");
    } else {
        if (age >= 18) {
            alert("Access granted");
        } else {
            alert("Access denied");
        }
    }
});