document.addEventListener('DOMContentLoaded', function () {
    // Sections
    const homeSection = document.getElementById('home');
    const signInSection = document.getElementById('sign-in');
    const createAccountSection = document.getElementById('create-account');
    const forgotPasswordSection = document.getElementById('forgot-password');
    const plantListSection = document.getElementById('plant-list-container');
    const communitySection = document.getElementById('community');

    // Buttons
    const homeButton = document.getElementById('home-button');
    const signInButton = document.getElementById('sign-in-button');
    const plantButton = document.getElementById('plant-button');
    const createAccountLink = document.getElementById('create-account-link');
    const SignInLink = document.getElementById('log-in-link');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const communityLink = document.getElementById('community-button');


    // Parallax elements
    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');

    

    const joinBtn=document.getElementById('join_btn');
joinBtn.addEventListener('click',()=>{
    showSection(signInSection);
});

    // Parallax scrolling effect
    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    });

    // Functions to show/hide sections
    function showSection(section) {
        const sections = [homeSection, signInSection, createAccountSection, forgotPasswordSection, plantListSection,communitySection];
        sections.forEach(sec => sec.classList.remove('active'));
        section.classList.add('active');

        // Update active link
        const navLinks = document.querySelectorAll('.navigation a');
        navLinks.forEach(link => {
            if (link.getAttribute('id') === `${section.id}-button`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Event listeners for navigation
    homeButton.addEventListener('click', () => {
        showSection(homeSection);
    });

    signInButton.addEventListener('click', () => {
        showSection(signInSection);
    });

    plantButton.addEventListener('click', () => {
        showSection(plantListSection);
    });

    createAccountLink.addEventListener('click', () => {
        showSection(createAccountSection);
    });

    SignInLink.addEventListener('click', () => {
        showSection(signInSection);
    });

    forgotPasswordLink.addEventListener('click', () => {
        showSection(forgotPasswordSection);
    });

    communityLink.addEventListener('clcik',()=>{
        showSection(communitySection);
    });

    // Initial load
    showSection(homeSection);

    // Display plant details
const plantLinks = document.querySelectorAll('.plant-link');

plantLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const plantName = this.getAttribute('data-name');
        const plantDesc = this.getAttribute('data-desc');
        const plantImg = this.getAttribute('data-img');
        const plantVid = this.getAttribute('data-vid');
        const vidTitle = this.getAttribute('vid-title');
        const plantUrl = this.getAttribute('data-url');

        document.getElementById('plant-name').textContent = plantName;
        document.getElementById('plant-img').src = plantImg;
        document.getElementById('plant-img').alt = plantName;
        document.getElementById('plant-video').src = plantVid;
        document.getElementById('video-title').textContent = vidTitle;
        document.getElementById('plant-desc').textContent = plantDesc;
        document.getElementById('plant-url').href = plantUrl;
        document.getElementById('plant-url').textContent = `Buy ${plantName}`;

        // Show the plant details section
        document.querySelector('.plant-details').style.display = 'block';
        
        // Scroll to the plant details section
        document.querySelector('.plant-details').scrollIntoView({ behavior: 'smooth' });
    });
});


    // Handle sign-in form submission
    document.getElementById('sign-in-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform sign-in logic (e.g., authentication with a server)
        console.log('Username:', username);
        console.log('Password:', password);

        alert('Sign-in form submitted!'); // Replace with actual sign-in logic
    });
});



function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update navigation active state
    var navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Set the clicked link to active
    var activeLink = document.querySelector('.navigation a[href="#' + sectionId + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Add event listeners for other buttons
document.getElementById('home-button').addEventListener('click', function() {
    showSection('home');
});

document.getElementById('sign-in-button').addEventListener('click', function() {
    showSection('sign-in');
});

document.getElementById('plant-button').addEventListener('click', function() {
    showSection('plant-list-container');
});

document.getElementById('community-button').addEventListener('click', function() {
    showSection('community');
});

// Handle form submission
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted!"); // Debugging statement
    // Redirect to another page
    const name = document.getElementById('name');
        const rate = document.getElementById('rating');
        const review = document.getElementById('review');
        name.value="";
        review.value="";
        rate.value="";
   alert("your review have been set successfully");
});



