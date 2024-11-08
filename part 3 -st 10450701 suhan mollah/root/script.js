// Clear the placeholder text on focus and restore it if the field is empty on blur
function clearField(field) {
    if (field.value === field.defaultValue) {
        field.value = "";
        field.classList.remove("placeholder");
    }
}

function restoreField(field) {
    if (field.value === "") {
        field.value = field.defaultValue;
        field.classList.add("placeholder");
    }
}

// Form validation for email format and non-empty fields
function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const enquiry = document.getElementById("enquiry");

    // Regular expression for a simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if any fields are empty
    if (!name.value.trim()) {
        alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert("Please enter your email address.");
        email.focus();
        return false;
    } else if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }

    if (!enquiry.value.trim()) {
        alert("Please enter your enquiry.");
        enquiry.focus();
        return false;
    }

    // All fields are valid
    return true;
}

// Apply clearField and restoreField functionality on load
document.addEventListener("DOMContentLoaded", function () {
    const fields = [document.getElementById("name"), document.getElementById("email"), document.getElementById("enquiry")];
    
    fields.forEach(field => {
        field.addEventListener("focus", function() { clearField(field); });
        field.addEventListener("blur", function() { restoreField(field); });
    });
});
