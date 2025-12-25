
const typed = new Typed("h4", {
    strings: ["Web Developer Intern", "Frontend Developer", "Java Learner"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const degree = percent * 3.6;

    circle.style.background = 
        `conic-gradient(#00f7ff ${degree}deg, #000 ${degree}deg)`;
});



document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.textContent.toLowerCase();
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



document.querySelector(".btn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});



const form = document.querySelector(".contact-form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "none";
        }
    });

    if (valid) {
        alert("Message sent successfully 🚀");
        form.reset();
    }
});


