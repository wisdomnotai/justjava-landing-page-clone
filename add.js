/* Alawode Wisdom, JustJava Internship Project */

// 1. Initialize icons
lucide.createIcons();

// 2. Global variables
let currentEditingId = ""; 
let quillInstance = null;

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
        // Hide the textarea
        textarea.style.display = 'none';
        
        // COMPLETELY remove old Quill container if it exists
        let oldQuillContainer = document.getElementById('quill-editor');
        if (oldQuillContainer) {
            oldQuillContainer.remove();
        }
        
        // Create fresh Quill container
        const quillContainer = document.createElement('div');
        quillContainer.id = 'quill-editor';
        quillContainer.className = 'mb-6 bg-white rounded-2xl border border-slate-200';
        textarea.parentNode.insertBefore(quillContainer, textarea);
        
        // Initialize Quill with a nice toolbar
        quillInstance = new Quill('#quill-editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link'],
                    ['clean']
                ]
            },
            placeholder: 'Start typing...'
        });
        
        // Get content and remove quotes if testimonial
        let content = targetElement.innerHTML;
        if (currentEditingId === 'testimonial-text') {
            content = content.replace(/^"|"$/g, ''); // Remove leading/trailing quotes
        }
        
        // Set the content in Quill
        quillInstance.root.innerHTML = content;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        
        // Focus the editor
        setTimeout(() => quillInstance.focus(), 100);
    } else {
        console.log("Omo, I no fit find the ID: " + id);
    }
}

// Function for the Cancel button
function closeModal() {
    const modal = document.getElementById('editModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    
    // Clean up Quill instance
    if (quillInstance) {
        quillInstance = null;
    }
    
    // Remove Quill container completely
    const quillContainer = document.getElementById('quill-editor');
    if (quillContainer) {
        quillContainer.remove();
    }
    
    // Show textarea again (in case needed for debugging)
    const textarea = document.getElementById('modalTextarea');
    if (textarea) {
        textarea.style.display = 'block';
    }
}

// Function for the Save button
function saveModalChanges() {
    const targetElement = document.getElementById(currentEditingId);

    if (quillInstance && targetElement) {
        let htmlContent = quillInstance.root.innerHTML;
        
        // Check if content is not empty (Quill puts <p><br></p> for empty content)
        const textContent = quillInstance.getText().trim();
        
        if (textContent !== "") {
            // Add quotes back if it's the testimonial
            if (currentEditingId === 'testimonial-text') {
                targetElement.innerHTML = `"${htmlContent}"`;
            } else {
                targetElement.innerHTML = htmlContent;
            }
        }
    }
    closeModal();
}

// Optional: Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('editModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});