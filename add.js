/* Alawode Wisdom, JustJava Internship Project */

// 1. Initialize icons
lucide.createIcons();

// 2. Global variable to track what we are editing
let currentEditingId = ""; 

// This matches your HTML: onclick="editHeroText()"
function editHeroText() {
    currentEditingId = 'hero-description'; 
    showModalLogic(currentEditingId);
}

// This matches your HTML: onclick="editTestimonialText()"
function editTestimonialText() {
    currentEditingId = 'testimonial-text';
    showModalLogic(currentEditingId);
}

// Helper function to actually pop the modal open
function showModalLogic(id) {
    const targetElement = document.getElementById(id);
    const modal = document.getElementById('editModal');
    const textarea = document.getElementById('modalTextarea');

    if (targetElement && modal) {
        // Remove quotes if it's the testimonial, otherwise just take the text
        textarea.value = targetElement.innerText.replace(/"/g, ''); 
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    } else {
        console.log("Omo, I no fit find the ID: " + id);
    }
}

// Function for the Cancel button
function closeModal() {
    const modal = document.getElementById('editModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

// Function for the Save button
function saveModalChanges() {
    const textarea = document.getElementById('modalTextarea');
    const targetElement = document.getElementById(currentEditingId);

    if (textarea.value.trim() !== "") {
        let text = textarea.value.trim();
        
        // Add quotes back if it's the testimonial
        if (currentEditingId === 'testimonial-text') {
            text = `"${text}"`;
        }
        
        targetElement.innerText = text;
    }
    closeModal();
}