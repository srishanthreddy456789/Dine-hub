document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'All fields are required.';
    } else if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        errorMessage.textContent = '';
        // Redirect to a new page or perform other actions
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
