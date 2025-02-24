document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add immediate visibility to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
    heroContent.style.transition = 'none';

    // Text Portrait Animation
    const portraitText = document.querySelector('.portrait-text');
    if (portraitText) {
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
            
            portraitText.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });
    }

    // Add smooth transition for project images
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transition = 'filter 0.5s ease';
        });
    });

    // Handle videos in project cards
    document.querySelectorAll('.project-image video').forEach(video => {
        // Set initial state
        video.muted = true;
        video.playsInline = true;
        
        // Play video immediately when loaded
        video.addEventListener('loadeddata', () => {
            if (video.readyState >= 3) {
                video.play();
                video.style.opacity = 1;
            }
        });

        // Ensure video plays if it was paused for any reason
        video.addEventListener('pause', () => {
            video.play();
        });
    });

    const designSkills = [
        'UI/UX Design',
        'Usability Testing',
        'User Research',
        'Design Thinking',
        'Wireframing',
        'Prototyping',
        'Mapping',
        'A/B Testing',
        'Accessibility'
    ];

    const techSkills = [
        'REACT',
        'TAILWIND',
        'CSS',
        'HTML',
        'JAVASCRIPT',
        'PYTHON',
        'GIT',
        'GITHUB',
        'R',
        'SQL'
    ];

    function createDesignSkillsTrack() {
        const container = document.getElementById('skills-track');
        const separator = '<span class="separator">●</span>';
        
        // Create double the content for seamless loop
        let skillsHTML = '';
        for (let i = 0; i < 4; i++) {  // Increased repetitions
            designSkills.forEach((skill) => {
                skillsHTML += `<span class="skill-item">${skill}</span>${separator}`;
            });
        }
        
        container.innerHTML = skillsHTML;
        const contentWidth = container.scrollWidth / 2;
        
        let position = 0;
        const speed = -1;
        
        function animate() {
            position += speed;
            if (Math.abs(position) >= contentWidth) {
                position = 0;
            }
            container.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    function createTechSkillsTrack() {
        const container = document.getElementById('skills-track-reverse');
        const separator = '<span class="separator">●</span>';
        
        // Create double the content for seamless loop
        let skillsHTML = '';
        for (let i = 0; i < 4; i++) {  // Increased repetitions
            techSkills.forEach((skill) => {
                skillsHTML += `<span class="skill-item">${skill}</span>${separator}`;
            });
        }
        
        container.innerHTML = skillsHTML;
        const contentWidth = container.scrollWidth / 2;
        
        let position = -contentWidth / 2;  // Start from middle
        const speed = 1;
        
        function animate() {
            position += speed;
            if (position >= 0) {
                position = -contentWidth / 2;
            }
            container.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    function initializeTracks() {
        createDesignSkillsTrack();
        createTechSkillsTrack();
    }

    // Initial creation
    initializeTracks();

    // Recreate on window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(initializeTracks, 250);
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
