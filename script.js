AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: false,
    offset: 80
});

const typingElement = document.getElementById("typing");

const roles = [
    "Artificial Intelligence Engineer",
    "Machine Learning Engineer",
    "Deep Learning Developer",
    "Computer Vision Researcher",
    "Frontend Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1600);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", function(event) {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
});

const profile = document.getElementById("profileImage");
const profileWrapper = document.getElementById("profileWrapper");

profileWrapper.addEventListener("mousemove", function(event) {
    const rect = profileWrapper.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    profile.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
    `;
});

profileWrapper.addEventListener("mouseleave", function() {
    profile.style.transform = "";
});

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (5 + Math.random() * 10) + "s";
    particle.style.opacity = Math.random();
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 15000);
}

setInterval(createParticle, 400);

const themeButton = document.getElementById("themeBtn");
let lightMode = false;

themeButton.addEventListener("click", function() {
    lightMode = !lightMode;

    if (lightMode) {
        document.body.classList.add("light-mode");
        themeButton.innerHTML = '<i class="bi bi-moon-stars"></i>';
    } else {
        document.body.classList.remove("light-mode");
        themeButton.innerHTML = '<i class="bi bi-brightness-high"></i>';
    }
});

document.querySelectorAll(".btn-main, .btn-outline").forEach(button => {
    button.addEventListener("click", function(event) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = event.offsetX + "px";
        ripple.style.top = event.offsetY + "px";
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {
    card.addEventListener("mousemove", function(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `
            perspective(600px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
        `;
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "";
    });
});

console.log(
    "%cWelcome to Kunj Desai's Portfolio 🚀",
    "color:#8b5cf6;font-size:18px;font-weight:bold;"
);

const statNumbers = document.querySelectorAll(".stat-number");
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;

    const statsSection = document.querySelector(".about-stats");
    if (!statsSection) return;

    const sectionPosition = statsSection.getBoundingClientRect();

    if (sectionPosition.top < window.innerHeight * 0.85) {
        statsAnimated = true;

        statNumbers.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            let current = 0;
            const increment = Math.max(1, Math.ceil(target / 60));

            const updateCounter = () => {
                current += increment;

                if (current >= target) {
                    current = target;
                    counter.textContent = current;
                    return;
                }

                counter.textContent = current;
                requestAnimationFrame(updateCounter);
            };

            updateCounter();
        });
    }
}

window.addEventListener("scroll", animateStats);
window.addEventListener("load", animateStats);

const hobbyCards = document.querySelectorAll(".hobby-card");

hobbyCards.forEach(card => {
    card.addEventListener("mousemove", function(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 18;
        const rotateY = (centerX - x) / 18;

        card.style.transform = `
            perspective(700px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.02)
        `;
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "";
    });
});

const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(card => {
    card.addEventListener("mousemove", function(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "";
    });
});

const aboutTags = document.querySelectorAll(".about-tags span");

aboutTags.forEach(tag => {
    tag.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-4px) scale(1.05)";
    });

    tag.addEventListener("mouseleave", function() {
        this.style.transform = "";
    });
});

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("about-visible");
            }
        });
    }, {
        threshold: 0.15
    });

    observer.observe(aboutSection);
}

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const index = [...projectCards].indexOf(card);

            setTimeout(() => {
                card.classList.add("project-visible");
            }, index * 100);

            projectObserver.unobserve(card);
        }
    });
}, {
    threshold: 0.12
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});

projectCards.forEach(card => {
    card.addEventListener("mousemove", function(event) {
        if (window.innerWidth < 768) return;

        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 35;
        const rotateY = (centerX - x) / 35;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-12px)
            scale(1.01)
        `;
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "";
    });
});

const projectImages = document.querySelectorAll(".project-image img");

projectImages.forEach(image => {
    image.addEventListener("mousemove", function(event) {
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const moveX = (x / rect.width - 0.5) * 10;
        const moveY = (y / rect.height - 0.5) * 10;

        image.style.transform = `
            scale(1.08)
            translate(${moveX}px, ${moveY}px)
        `;
    });

    image.addEventListener("mouseleave", function() {
        image.style.transform = "";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".rk-gallery");
    const galleryBg = document.querySelector(".rk-gallery-bg img");
    const galleryContent = document.querySelector(".rk-gallery-content");
    const particleContainer = document.querySelector(".rk-gallery-particles");

    if (particleContainer) {
        const particleCount = window.innerWidth < 600 ? 20 : 45;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("span");
            particle.classList.add("rk-gallery-particle");
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = 30 + Math.random() * 70 + "%";
            particle.style.animationDuration = 5 + Math.random() * 8 + "s";
            particle.style.animationDelay = Math.random() * -10 + "s";

            const size = 1 + Math.random() * 3;
            particle.style.width = size + "px";
            particle.style.height = size + "px";

            particleContainer.appendChild(particle);
        }
    }

    if (gallery) {
        gallery.addEventListener("mousemove", function(event) {
            const rect = gallery.getBoundingClientRect();

            const mouseX =
                (event.clientX - rect.left) / rect.width - 0.5;

            const mouseY =
                (event.clientY - rect.top) / rect.height - 0.5;

            if (galleryBg) {
                galleryBg.style.transform = `
                    scale(1.08)
                    translate(
                        ${mouseX * -18}px,
                        ${mouseY * -18}px
                    )
                `;
            }

            if (galleryContent) {
                galleryContent.style.transform = `
                    perspective(1200px)
                    rotateX(${mouseY * -2}deg)
                    rotateY(${mouseX * 2}deg)
                `;
            }

            const leftPhoto = document.querySelector(".rk-photo-left");

            if (leftPhoto) {
                leftPhoto.style.marginLeft = mouseX * -15 + "px";
                leftPhoto.style.marginTop = mouseY * -15 + "px";
            }

            const rightPhoto = document.querySelector(".rk-photo-right");

            if (rightPhoto) {
                rightPhoto.style.marginRight = mouseX * 15 + "px";
                rightPhoto.style.marginTop = mouseY * 15 + "px";
            }
        });

        gallery.addEventListener("mouseleave", function() {
            if (galleryBg) {
                galleryBg.style.transform = "scale(1.08) translate(0,0)";
            }

            if (galleryContent) {
                galleryContent.style.transform =
                    "perspective(1200px) rotateX(0) rotateY(0)";
            }
        });
    }

    const galleryButton = document.querySelector(".rk-gallery-btn");

    if (galleryButton) {
        galleryButton.addEventListener("mousemove", function(event) {
            const rect = galleryButton.getBoundingClientRect();

            const x =
                event.clientX - (rect.left + rect.width / 2);

            const y =
                event.clientY - (rect.top + rect.height / 2);

            galleryButton.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.04)`;
        });

        galleryButton.addEventListener("mouseleave", function() {
            galleryButton.style.transform = "";
        });
    }

    const exploreButton =
        document.querySelector('.rk-gallery-btn[href="#gallery-showcase"]');

    if (exploreButton) {
        exploreButton.addEventListener("click", function(event) {
            event.preventDefault();

            const target = document.querySelector("#gallery-showcase");

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    const cards = document.querySelectorAll(".rk-gallery-card");

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("rk-card-visible");
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(function(card) {
        cardObserver.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.querySelector(".rk-skills-section");

    if (!skillsSection) return;

    const progressBars =
        skillsSection.querySelectorAll(".rk-progress-fill");

    const percentages =
        skillsSection.querySelectorAll(".rk-skill-info strong");

    let skillsAnimated = false;

    function animateSkills() {
        if (skillsAnimated) return;

        skillsAnimated = true;

        progressBars.forEach((bar, index) => {
            const width = bar.getAttribute("data-width");

            setTimeout(() => {
                bar.style.width = width;
            }, index * 100);
        });

        percentages.forEach((percentage, index) => {
            const target =
                parseInt(percentage.getAttribute("data-percent"));

            let current = 0;
            const duration = 1200;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;

                const progress = Math.min(
                    elapsed / duration,
                    1
                );

                const ease =
                    1 - Math.pow(1 - progress, 3);

                current = Math.round(target * ease);
                percentage.textContent = current + "%";

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            setTimeout(() => {
                requestAnimationFrame(updateCounter);
            }, index * 70);
        });
    }

    const skillObserver = new IntersectionObserver(
        function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    skillObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        }
    );

    skillObserver.observe(skillsSection);

    const skillCards =
        skillsSection.querySelectorAll(".rk-skill-card");

    skillCards.forEach(card => {
        card.addEventListener("mousemove", function(event) {
            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -3;

            const rotateY =
                ((x / rect.width) - 0.5) * 3;

            card.style.transform = `
                translateY(-10px)
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;
        });

        card.addEventListener("mouseleave", function() {
            card.style.transform = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const resumeSection =
        document.querySelector(".rk-resume-section");

    if (!resumeSection) return;

    const resumeCard =
        resumeSection.querySelector(".rk-resume-card");

    const paper =
        resumeSection.querySelector(".rk-paper");

    if (resumeCard && paper) {
        resumeCard.addEventListener("mousemove", e => {
            const rect = resumeCard.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 80;
            const rotateY = (x - centerX) / 80;

            paper.style.transform = `
                rotateX(${-rotateX}deg)
                rotateY(${rotateY}deg)
                rotateZ(1deg)
                translateY(-8px)
                scale(1.03)
            `;
        });

        resumeCard.addEventListener("mouseleave", () => {
            paper.style.transform = "";
        });
    }

    const downloadButton =
        resumeSection.querySelector(".rk-download-btn");

    if (downloadButton) {
        downloadButton.addEventListener("click", () => {
            downloadButton.classList.add("rk-download-clicked");

            setTimeout(() => {
                downloadButton.classList.remove("rk-download-clicked");
            }, 700);
        });
    }

    const resumeCardObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("rk-resume-visible");

                    resumeCardObserver.unobserve(
                        entry.target
                    );
                }
            });
        }, {
            threshold: 0.15
        }
    );

    if (resumeCard) {
        resumeCardObserver.observe(resumeCard);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const blogCards =
        document.querySelectorAll(".rk-blog-card");

    const readButtons =
        document.querySelectorAll(".rk-read-more");

    const modal =
        document.getElementById("rkBlogModal");

    const modalClose =
        document.getElementById("rkModalClose");

    const modalTitle =
        document.getElementById("rkModalTitle");

    const modalCategory =
        document.getElementById("rkModalCategory");

    const modalText =
        document.getElementById("rkModalText");

    const blogData = {
        ai: {
            category: "AI • MACHINE LEARNING",
            title: "Why I Love Building AI Projects",
            text: `
                <p>
                    Artificial Intelligence is one of the fields
                    that constantly motivates me to learn and build.
                    What makes AI interesting to me is the ability
                    to take an idea and turn it into a system that
                    can actually solve a problem.
                </p>
                <p>
                    While working with Machine Learning and Deep
                    Learning, I have learned that building a model
                    is only one part of the journey. Understanding
                    the data, preprocessing it, evaluating the model
                    and improving the results are equally important.
                </p>
                <p>
                    Every AI project gives me a new challenge.
                    Sometimes the model works perfectly, and
                    sometimes it doesn't. But both situations teach
                    me something valuable.
                </p>
                <p>
                    <strong>
                        My goal is not just to learn AI.
                        My goal is to use AI to build things that
                        are useful in the real world.
                    </strong>
                </p>
            `
        },

        coding: {
            category: "PROGRAMMING",
            title: "Coding Is More Than Writing Code",
            text: `
                <p>
                    Programming is often seen as writing lines of
                    code, but I believe coding starts before the
                    first line is written.
                </p>
                <p>
                    The most important part is understanding the
                    problem. Once the problem is clear, it becomes
                    easier to break it into smaller parts and think
                    about possible solutions.
                </p>
                <p>
                    Good programming is also about writing code that
                    another person can understand. Clean structure,
                    meaningful names and simple logic can make a
                    huge difference.
                </p>
                <p>
                    <strong>
                        Code should not only work.
                        It should communicate your thinking.
                    </strong>
                </p>
            `
        },

        learning: {
            category: "LEARNING",
            title: "Learning One Concept Every Day",
            text: `
                <p>
                    Technology changes quickly, especially in areas
                    like AI, Machine Learning and software
                    development. Trying to learn everything at once
                    can feel overwhelming.
                </p>
                <p>
                    I prefer to focus on one concept at a time.
                    It could be a Python concept, a Machine Learning
                    algorithm, a new framework or even a debugging
                    technique.
                </p>
                <p>
                    Small improvements may not look significant
                    every day, but after months they create a strong
                    foundation.
                </p>
                <p>
                    <strong>
                        You don't have to become an expert in one day.
                        Just become better than yesterday.
                    </strong>
                </p>
            `
        },

        debugging: {
            category: "PROBLEM SOLVING",
            title: "Every Error Has Something to Teach",
            text: `
                <p>
                    Errors are probably one of the most common
                    parts of programming. A missing variable, wrong
                    data type or unexpected output can completely
                    change the result.
                </p>
                <p>
                    Earlier, errors could feel frustrating. But
                    debugging taught me to look at errors differently.
                    An error is often a clue telling you where your
                    thinking or implementation needs improvement.
                </p>
                <p>
                    Reading error messages carefully and testing
                    small parts of the program can turn a confusing
                    problem into a solvable one.
                </p>
                <p>
                    <strong>
                        Don't be afraid of errors.
                        Learn how to understand them.
                    </strong>
                </p>
            `
        },

        build: {
            category: "MOTIVATION",
            title: "Build Before You Feel Ready",
            text: `
                <p>
                    One of the biggest lessons I have learned is
                    that you rarely feel completely ready before
                    starting something new.
                </p>
                <p>
                    You can watch tutorials, read documentation and
                    learn theory for a long time. But eventually,
                    you need to build something.
                </p>
                <p>
                    Projects expose the gaps in your knowledge.
                    They show you what you actually understand and
                    what you still need to learn.
                </p>
                <p>
                    <strong>
                        Don't wait until you know everything.
                        Start building and learn along the way.
                    </strong>
                </p>
            `
        },

        developer: {
            category: "DEVELOPER LIFE",
            title: "From Beginner to Developer",
            text: `
                <p>
                    Becoming a developer is not a single
                    achievement. It is a continuous journey.
                </p>
                <p>
                    There will be days when the code works perfectly
                    and days when a simple bug takes hours to solve.
                    Both are part of the process.
                </p>
                <p>
                    Curiosity, consistency and the willingness to
                    keep learning are more important than knowing
                    everything from the beginning.
                </p>
                <p>
                    <strong>
                        Keep experimenting.
                        Keep learning.
                        Keep building.
                    </strong>
                </p>
            `
        }
    };

    readButtons.forEach(button => {
        button.addEventListener("click", () => {
            const blogId = button.dataset.blog;
            const blog = blogData[blogId];

            if (!blog) return;

            modalCategory.textContent = blog.category;
            modalTitle.textContent = blog.title;
            modalText.innerHTML = blog.text;

            modal.classList.add("rk-modal-open");
            document.body.style.overflow = "hidden";
        });
    });

    function closeBlog() {
        modal.classList.remove("rk-modal-open");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeBlog);

    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeBlog();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeBlog();
        }
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(
                            "rk-blog-visible"
                        );
                    }, index * 120);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        }
    );

    blogCards.forEach(card => {
        observer.observe(card);
    });
});

const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("contactSubject").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();

        if (!name || !email || !subject || !message) {
            contactStatus.textContent =
                "Please fill in all fields.";

            contactStatus.style.color = "#f87171";
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            contactStatus.textContent =
                "Please enter a valid email address.";

            contactStatus.style.color = "#f87171";
            return;
        }

        contactStatus.textContent =
            "✓ Message ready to send!";

        contactStatus.style.color = "#a78bfa";

        const button =
            contactForm.querySelector(".contact-btn");

        const originalText = button.innerHTML;

        button.innerHTML = "✓ Message Sent";

        button.style.background =
            "linear-gradient(90deg, #16a34a, #059669)";

        setTimeout(() => {
            contactForm.reset();
            button.innerHTML = originalText;

            button.style.background =
                "linear-gradient(90deg, #7c3aed, #4f46e5)";

            contactStatus.textContent = "";
        }, 2500);
    });
}

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function() {
    const certificateButtons =
        document.querySelectorAll(".view-certificate-btn");

    const certificateModal =
        document.getElementById("certificateModal");

    const certificateModalImage =
        document.getElementById("certificateModalImage");

    const certificateModalTitle =
        document.getElementById("certificateModalTitle");

    const certificateModalClose =
        document.getElementById("certificateModalClose");

    certificateButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const certificateImage =
                button.getAttribute("data-certificate");

            const certificateTitle =
                button.getAttribute("data-title");

            certificateModalImage.src = certificateImage;
            certificateModalImage.alt = certificateTitle;
            certificateModalTitle.textContent = certificateTitle;

            certificateModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeCertificateModal() {
        certificateModal.classList.remove("active");
        document.body.style.overflow = "";

        setTimeout(function() {
            certificateModalImage.src = "";
        }, 300);
    }

    if (certificateModalClose) {
        certificateModalClose.addEventListener(
            "click",
            closeCertificateModal
        );
    }

    certificateModal.addEventListener(
        "click",
        function(event) {
            if (event.target === certificateModal) {
                closeCertificateModal();
            }
        }
    );

    document.addEventListener(
        "keydown",
        function(event) {
            if (
                event.key === "Escape" &&
                certificateModal.classList.contains("active")
            ) {
                closeCertificateModal();
            }
        }
    );
});