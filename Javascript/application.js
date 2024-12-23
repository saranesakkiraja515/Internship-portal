document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Capture form data
    const formData = new FormData(this);
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Retrieve the input values
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const college = formData.get("college");
    const position = formData.get("position");
    const coverLetter = formData.get("coverLetter") ? formData.get("coverLetter") : 'No cover letter provided';
    const resumeFile = formData.get("resume");

    // Create a URL for the uploaded resume file
    const resumeURL = URL.createObjectURL(resumeFile);

    // Create confirmation message with user input and downloadable resume
    confirmationMessage.innerHTML = `
        <h2>Form Successfully Submitted</h2>
        <div>Thank you for applying, <strong>${name}</strong>!</div>
        <div><strong>Email:</strong> ${email}</div>
        <div><strong>Phone:</strong> ${phone}</div>
        <div><strong>College/University:</strong> ${college}</div>
        <div><strong>Position Applied For:</strong> ${position}</div>
        <div><strong>Resume:</strong> <a href="${resumeURL}" download="${resumeFile.name}" id="downloadResume">${resumeFile.name}</a></div>
        <div><strong>Cover Letter:</strong> ${coverLetter}</div>
        <p>We will get back to you shortly at the provided email address.</p>
        <button id="homeButton">Home</button>
    `;

    // Simulate form submission delay
    setTimeout(() => {
        // Hide the form after submission
        this.style.display = 'none';

        // Display the confirmation message
        confirmationMessage.classList.remove('hidden');

        // Add event listener to the Home button to navigate back to the home page
        document.getElementById('homeButton').addEventListener('click', function() {
            window.location.href = 'homepage.html';  // Redirect to home page
        });
    }, 1000); // 1-second delay
});