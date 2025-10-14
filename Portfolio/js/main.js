// Main JS for interactions

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
}));

// Dynamic Year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();

// Example: Dynamically add more projects (you can edit the array)
const projects = [
  {
    title: 'Blockchain Voting System',
    desc: 'Secure online voting prototype leveraging blockchain principles for transparency and tamper resistance.',
    stack: 'HTML, CSS, JS, (Conceptual Blockchain Logic)',
    tags: 'Web • Blockchain',
    github: 'https://github.com/Ariyan9907/Block-chain-based-online-voting-system',
    
  },
  {
    title: 'Fire Detection (CV)',
    desc: 'Image-based fire detection leveraging deep learning to flag hazardous frames early.',
    stack: 'Python, TensorFlow, OpenCV',
    tags: 'AI • Vision',
    github: 'https://github.com/Ariyan9907/fire-detection',
    
  },
  {
    title: 'News Web App',
    desc: 'Responsive news aggregation site showcasing dynamic content and clean UI.',
    stack: 'HTML, CSS, JavaScript',
    tags: 'Web • UI',
    github: 'https://github.com/Ariyan9907/news-site',

  },
  {
    title: 'News Portal (Alt)',
    desc: 'Alternative news web implementation focusing on layout experimentation and performance.',
    stack: 'HTML, CSS, JavaScript',
    tags: 'Web • Frontend',
    github: 'https://github.com/Ariyan9907/news_web',
  }
];

const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-tags">${p.tags}</div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <p class="tech-used"><strong>Stack:</strong> ${p.stack}</p>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" class="btn small" target="_blank" rel="noopener">GitHub</a>` : ''}
        ${p.demo ? `<a href="${p.demo}" class="btn small outline" target="_blank" rel="noopener">Live Demo</a>` : ''}
      </div>`;
    projectsGrid.appendChild(card);
  });
}

// Contact Form with Web3Forms
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) return;

    formStatus.textContent = 'Sending...';

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.style.color = '#10b981'; // Green color
        contactForm.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      formStatus.textContent = 'Failed to send message. Please try again.';
      formStatus.style.color = '#ef4444'; // Red color
    }
  });
}

// Optional: Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(sec => observer.observe(sec));
