// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Breadcrumb Update
const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
breadcrumbLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        breadcrumbLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.id = 'backToTop';
document.body.appendChild(backToTopBtn);

// Style Back to Top Button
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px';
backToTopBtn.style.backgroundColor = '#5fbae9';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.display = 'none'; // Initially hidden

// Show/Hide Back to Top Button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Team Member Modal
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const content = 
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${this.querySelector('h4').textContent}</h2>
                <p>${this.querySelector('p').textContent}</p>
            </div>
            modal.innerHTML = content;
        document.body.appendChild(modal);

        // Style the modal
        document.querySelector('.modal').style.position = 'fixed';
        document.querySelector('.modal').style.top = '50%';
        document.querySelector('.modal').style.left = '50%';
        document.querySelector('.modal').style.transform = 'translate(-50%, -50%)';
        document.querySelector('.modal').style.backgroundColor = '#fff';
        document.querySelector('.modal').style.padding = '20px';
        document.querySelector('.modal').style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        document.querySelector('.modal').style.zIndex = '1000';

        // Close modal when clicking the close button
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
