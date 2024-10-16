"use strict";
// let toggleButton = document.getElementById("toggle") as HTMLButtonElement;
// function toggleSkillDiv(): void {
//   const skillDiv = document.getElementById("skill-div");
//   if (skillDiv) {
//     if (
//       skillDiv.style.display === "none" ||
//       window.getComputedStyle(skillDiv).display === "none"
//     ) {
//       skillDiv.style.display = "block";
//       toggleButton.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
//     } else {
//       skillDiv.style.display = "none";
//       toggleButton.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
//     }
//   }
// }
const toggleBtn = document.getElementById('toggle-btn');
const toggleSection = document.querySelector('.toggle-section');
toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener('click', () => {
    if (toggleSection === null || toggleSection === void 0 ? void 0 : toggleSection.classList.contains('show-skills')) {
        toggleSection.classList.remove('show-skills'); // Hide skills section
    }
    else {
        toggleSection === null || toggleSection === void 0 ? void 0 : toggleSection.classList.add('show-skills'); // Show skills section
    }
});
