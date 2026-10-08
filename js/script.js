/**
 * PORTFOLIO CLIENT-SIDE INTERACTIVITY
 * Owner: BSc Engr. Md Sajid Chowdhury
 * Software Engineer & Lecturer | Founder @ NEXORA LMS
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypingEffect();
  initMobileNav();
  initScrollSpy();
  initStatsCounter();
  initSkillFilters();
  initTerminal();
  initContactForm();
  initScrollToTop();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const storedTheme = localStorage.getItem("sajid-portfolio-theme") || "dark";

  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("sajid-portfolio-theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "light") {
      themeIcon.className = "fa-solid fa-moon";
    } else {
      themeIcon.className = "fa-solid fa-sun";
    }
  }
}

/* ==========================================================================
   2. DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const typedTarget = document.getElementById("typed-text");
  if (!typedTarget) return;

  const roles = [
    "Software Engineer & Lecturer",
    "Founder @ NEXORA LMS",
    "Python & FastAPI Specialist",
    "C# & ASP.NET Core Developer",
    "Database & API Architect",
    "Full-Stack Web Engineer"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const waitBetween = 1800;

  function type() {
    const current = roles[roleIdx];

    if (isDeleting) {
      typedTarget.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typedTarget.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === current.length) {
      delay = waitBetween;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   3. MOBILE NAVBAR
   ========================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const icon = hamburger.querySelector("i");
    if (icon) {
      icon.className = navMenu.classList.contains("active") ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = hamburger.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
    });
  });
}

/* ==========================================================================
   4. SCROLL SPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   5. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        let count = 0;
        const duration = 1200;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = `${target}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${Math.floor(count)}${suffix}`;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

/* ==========================================================================
   6. SKILL FILTERING
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll(".skill-filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      skillCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat.includes(category)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE DEVELOPER TERMINAL
   ========================================================================== */
function initTerminal() {
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  const chips = document.querySelectorAll(".terminal-chip");

  if (!input || !output) return;

  const commands = {
    help: `Available commands:
• about     : Learn about Engr. Md Sajid Chowdhury
• skills    : List core engineering skills & tools
• nexora    : Details on the NEXORA LMS project
• contact   : Direct contact and social links
• clear     : Clear terminal output`,

    about: `Engr. Md Sajid Chowdhury is a Software Engineer & Lecturer.
Founder & Creator of NEXORA — Modern Recorded Software Engineering LMS.
Focus: Practical software development, backend APIs, scalable databases, clean code, and education.`,

    skills: `Core Technical Stack:
- Backend  : Python (FastAPI), C# (ASP.NET Core), REST APIs
- Database : PostgreSQL, SQLAlchemy 2.0, Alembic, SQLite
- Frontend : Next.js 14, React, TypeScript, Tailwind CSS, Bootstrap 5
- Security : Argon2 Hashing, JWT HS256, Session Security, Video Defense
- Tools    : Git & GitHub, Docker, Postman, Linux`,

    nexora: `NEXORA LMS Overview:
- Flagship EdTech platform engineered for recorded Software Engineering education.
- Architecture: Decoupled FastAPI backend + Next.js App Router frontend.
- Security: Multi-device session enforcement, dynamic video watermarks.
- Course: Practical Software Engineering Flagship Track (৳10,000 BDT).`,

    contact: `Direct Contact Channels:
- Email    : mdsajidchowdhury99@gmail.com
- GitHub   : https://github.com/SAJID-C
- LinkedIn : https://www.linkedin.com/in/md-sajid-chowdhury-b91790340/
- Location : Bangladesh (Available worldwide for remote/hybrid roles)`
  };

  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    
    if (cleanCmd === "clear") {
      output.textContent = "";
      return;
    }

    let response = commands[cleanCmd];
    if (!response) {
      response = `Command not recognized: '${cleanCmd}'. Type 'help' to see available commands.`;
    }

    const currentText = output.textContent;
    output.textContent = `${currentText ? currentText + "\n\n" : ""}> ${cmd}\n${response}`;
    
    // Auto-scroll to bottom of terminal
    const terminalBody = document.querySelector(".terminal-body");
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value;
      if (val.trim()) {
        executeCommand(val);
        input.value = "";
      }
    }
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });
}

/* ==========================================================================
   8. CONTACT FORM HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const formStatus = document.getElementById("form-status-msg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = "Please fill out all required fields.";
        formStatus.style.color = "#ef4444";
        formStatus.style.display = "block";
      }
      return;
    }

    // Prepare mailto link with encoded parameters
    const mailtoUrl = `mailto:mdsajidchowdhury99@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(`Hi Engr. Md Sajid Chowdhury,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.open(mailtoUrl, "_blank");

    if (formStatus) {
      formStatus.textContent = "Thank you! Opening your email client to send your message directly to Md Sajid Chowdhury.";
      formStatus.style.color = "#34d399";
      formStatus.style.display = "block";
    }

    form.reset();
  });
}

/* ==========================================================================
   9. SCROLL TO TOP
   ========================================================================== */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  if (!scrollTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
