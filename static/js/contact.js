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

        // Send email using EmailJS REST API
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_id: 'EMAILJS_SERVICE_ID_PLACEHOLDER',
                template_id: 'EMAILJS_TEMPLATE_ID_PLACEHOLDER',
                user_id: 'EMAILJS_USER_ID_PLACEHOLDER',
                template_params: {
                    name: name,
                    email: email,
                    message: message
                }
            })
        }).then(function (response) {
            if (response.ok) {
                console.log('SUCCESS!', response.statusText);
                successMessage.classList.remove('hidden');
                errorMessage.classList.add('hidden');
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 2000); form.reset();
            } else {
                return response.json().then(function (error) {
                    console.log('FAILED...', error);
                    successMessage.classList.add('hidden');
                    errorMessage.classList.remove('hidden');
                });
            }
        }).catch(function (error) {
            console.log('FAILED...', error);
            successMessage.classList.add('hidden');
            errorMessage.classList.remove('hidden');
        });
    });
});


