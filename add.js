// Initializing the icons from the Lucide library
lucide.createIcons();

// Drafting the logic to handle the text edit dynamically
function editHeroText() {
    // Locating the description element by its unique ID
    const descriptionPara = document.getElementById('hero-description');
    
    // Capturing the current text to show in the prompt
    const currentText = descriptionPara.innerText;
    
    // Prompting the user for new content
    const newText = prompt("Update the hero description:", currentText);
    
    // Updating the text only if the user didn't cancel and the text isn't empty
    if (newText !== null && newText.trim() !== "") {
        descriptionPara.innerText = newText;
        console.log("Updating hero text to:", newText);
    }
}