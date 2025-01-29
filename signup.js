document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (!fullName || !email || !phone || !address || !password) {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage.textContent = 'Invalid email format.';
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        errorMessage.textContent = 'Phone number must be 10 digits.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    errorMessage.textContent = '';
    alert('Sign-up successful! Welcome to the delivery service.');
    // Redirect or handle the successful sign-up
});
