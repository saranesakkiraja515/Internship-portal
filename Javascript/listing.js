  // Internship data (sample data)
  const internships = [
    {
        title: "Software Engineer Internship",
        company: "XYZ Corp",
        location: "Remote",
        duration: "6 months",
        link: "application.html"
    },
    {
        title: "Marketing Internship",
        company: "ABC Marketing",
        location: "New York",
        duration: "3 months",
        link: "application.html"
    },
    {
        title: "Graphic Design Internship",
        company: "Creative Studio",
        location: "San Francisco",
        duration: "4 months",
        link: "application.html"
    },
    {
        title: "Data Science Internship",
        company: "Data Analytics Corp",
        location: "Boston",
        duration: "6 months",
        link: "application.html"
    },
    
        {
            title: "Human Resources Internship",
            company: "Global HR",
            location: "Chicago",
            duration: "3 months",
            link: "application.html"
        }
    ];

    // Function to display internships
    function displayInternships(internships) {
        const internshipListings = document.getElementById('internshipListings');
        internshipListings.innerHTML = ''; // Clear existing internships

        internships.forEach(internship => {
            const internshipCard = `
                <div class="internship-card">
                    <h3>${internship.title}</h3>
                    <p>Company: ${internship.company}</p>
                    <p>Location: ${internship.location}</p>
                    <p>Duration: ${internship.duration}</p>
                    <a href="${internship.link}" class="btn">Apply Now</a>
                </div>
            `;
            internshipListings.innerHTML += internshipCard;
        });
    }

    // Function to filter internships based on search input
    function filterInternships() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const filteredInternships = internships.filter(internship =>
            internship.title.toLowerCase().includes(searchInput) ||
            internship.company.toLowerCase().includes(searchInput) ||
            internship.location.toLowerCase().includes(searchInput)
        );
        displayInternships(filteredInternships);
    }

    // Display all internships initially
    window.onload = () => {
        displayInternships(internships);
    };

    // Attach event listener to search input
    document.getElementById('searchInput').addEventListener('input', filterInternships);

