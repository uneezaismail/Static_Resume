const toggleButton = document.querySelector('.toggle-btn') as HTMLButtonElement; 
const toggleSection = document.querySelector('.toggle-section') as HTMLElement | null;

if (toggleButton && toggleSection) {
    toggleButton.addEventListener('click', () => {
        toggleSection.classList.toggle('show-skills');
    });
}

