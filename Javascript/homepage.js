// Simple JavaScript for dynamic functionality
document.addEventListener('DOMContentLoaded', function () {
  // You can add more JavaScript functionalities here if needed
  console.log("Internship Portal Home Page Loaded");
});

// Function to toggle chatbot window when icon is clicked
document.getElementById('chatbot-icon').addEventListener('click', function() {
  const chatbotWindow = document.querySelector('df-messenger');
  chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'block' : 'none';
});

// Initially hide chatbot window
document.querySelector('df-messenger').style.display = 'none';
