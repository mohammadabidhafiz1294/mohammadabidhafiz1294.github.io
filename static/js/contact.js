document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate email
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(String(email).toLowerCase());
        }

        // Check if name and message are not empty
        if (name === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }
        // Send the form data to the Google Apps Script Web App using Fetch API
        fetch("https://script.google.com/macros/s/AKfycbxskssTXn6Vft3gugjciDxrLMmy6sloPBzzXCuKZbguxFiI4_e3OEhkGm_ZXjNRoph03A/exec", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
            .then(data => {
                if (data.status === 0) {
                    successMessage.style.display = "block";
                    setTimeout(function () {
                        successMessage.style.display = "none";
                    }, 2000);
                    form.reset();
                } else {
                    throw new Error('Failed to submit the form');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                if (errorMessage) {
                    errorMessage.style.display = "block";
                    setTimeout(function () {
                        errorMessage.style.display = "none";
                    }, 2000);
                } else {
                    alert("An error occurred: " + error.message);
                }
            });
    });
});