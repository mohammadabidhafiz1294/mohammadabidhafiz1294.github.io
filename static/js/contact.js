document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate email
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if name and message are not empty
        if (name === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Show success message
        successMessage.style.display = "block";

        // Hide success message after 2 seconds
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 2000);

        // Clear the form
        form.reset(); // Resets the form fields
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
