/* Alawode Wisdom, JustJava Internship Project */

// 1. Initialize Icons
lucide.createIcons();

// 2. State Management
let currentEditingId = ""; 

function openModal(id) {
    currentEditingId = id; 
    const targetElement = document.getElementById(id);
    const modal = document.getElementById('editModal');
    const textarea = document.getElementById('modalTextarea');

    if (targetElement && modal) {
        // Remove quotes for the editor box
        textarea.value = targetElement.innerText.replace(/"/g, ''); 
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    const modal = document.getElementById('editModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

function saveModalChanges() {
    const textarea = document.getElementById('modalTextarea');
    const targetElement = document.getElementById(currentEditingId);

    if (textarea.value.trim() !== "") {
        let text = textarea.value.trim();
        // Add quotes back ONLY for testimonials
        if (currentEditingId === 'testimonial-text') {
            text = `"${text}"`;
        }
        targetElement.innerText = text;
    }
    closeModal();
}