document.addEventListener("DOMContentLoaded", function () {
    // Select the form
    const form = document.querySelector("form");

    // Select the success message element or create one dynamically
    const successMessage = document.createElement("p");
    successMessage.textContent = "Thank you! Your message has been sent.";
    successMessage.style.color = "black";
    successMessage.style.display = "none"; // Hide by default
    form.parentNode.insertBefore(successMessage, form.nextSibling); // Insert after the form

    // Add event listener for form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Reset form fields
        form.reset();

        // Show success message
        successMessage.style.display = "block";

        // Hide success message after 3 seconds
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 3000);
    });
});
