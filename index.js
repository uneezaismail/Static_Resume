"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let toggleButton = document.getElementById("toggle");
function toggleSkillDiv() {
    const skillDiv = document.getElementById("skill-div");
    if (skillDiv) {
        if (skillDiv.style.display === "none" ||
            window.getComputedStyle(skillDiv).display === "none") {
            skillDiv.style.display = "block";
            toggleButton.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
        }
        else {
            skillDiv.style.display = "none";
            toggleButton.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
        }
    }
}
