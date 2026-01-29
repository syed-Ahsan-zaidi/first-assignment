function openModal(title, text) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalBody").innerText = text;
    document.getElementById("caseStudyModal").style.display = "block";
}

function closeModal() {
    document.getElementById("caseStudyModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    let modal = document.getElementById("caseStudyModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}