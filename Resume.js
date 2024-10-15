"use strict";
let toggleButton = document.getElementById("toggle");
function toggleSkillDiv() {
    const skillDiv = document.getElementById("skill-div");
    if (skillDiv) {
        if (skillDiv.style.display === "none" || window.getComputedStyle(skillDiv).display === "none") {
            skillDiv.style.display = "block";
            toggleButton.innerHTML = '<i class="fa-solid fa-angle-up"></i>'; // Change to up arrow when showing
        }
        else {
            skillDiv.style.display = "none";
            toggleButton.innerHTML = '<i class="fa-solid fa-angle-down"></i>'; // Change to down arrow when hidden
        }
    }
}
