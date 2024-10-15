let toggleButton = document.getElementById("toggle") as HTMLButtonElement;
function toggleSkillDiv(): void {
  const skillDiv = document.getElementById("skill-div");

  if (skillDiv) {
    if (
      skillDiv.style.display === "none" ||
      window.getComputedStyle(skillDiv).display === "none"
    ) {
      skillDiv.style.display = "block";
      toggleButton.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else {
      skillDiv.style.display = "none";
      toggleButton.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }

  }
}
// #CF9893
// #CFD2B2
// #616163
// #BA5624
// #DAF5FF