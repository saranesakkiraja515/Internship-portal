function login() {
    // Hardcoded credentials (you can change this)
    const validUsername = 'intern';
    const validPassword = 'password123';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Error message element
    const errorElement = document.getElementById('error');

    // Check if credentials are correct
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to dashboard or other pages (example URL)
        window.location.href = "dashboard.html";
    } else {
        errorElement.textContent = 'Invalid username or password. Please try again.';
    }
    
}
