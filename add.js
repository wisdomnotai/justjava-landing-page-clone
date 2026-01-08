/* Alawode Wisdom, JustJava Internship Project */

// Initializing the icons
lucide.createIcons();

// Drafting the logic for the hero text edit
function editHeroText() {
    const descriptionPara = document.getElementById('hero-description');
    const newText = prompt("Update the hero description:", descriptionPara.innerText);
    
    if (newText !== null && newText.trim() !== "") {
        descriptionPara.innerText = newText;
    }
}

// Implementing the logic for the testimonial text edit
function editTestimonialText() {
    // Targeting the testimonial paragraph element
    const testimonialPara = document.getElementById('testimonial-text');
    
    // Prompting for the new testimonial content
    const newQuote = prompt("Update the testimonial quote:", testimonialPara.innerText);
    
    // Checking if the user provided input before updating the DOM
    if (newQuote !== null && newQuote.trim() !== "") {
        // Adding quotes back if the user forgot them
        const formattedQuote = newQuote.startsWith('"') ? newQuote : `"${newQuote}"`;
        testimonialPara.innerText = formattedQuote;
        
        // Refreshing icons in case the edit triggers a layout shift
        lucide.createIcons();
    }
}