// var typed=new typed(".text",{
//     strings:["frontend developer","software developer","learing"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loo:true
// })


// document.querySelectorAll('.circle').forEach(circle=>{
//     let percent = circle.getAttribute('data-percent');
//     let degree = percent * 3.6;
//     circle.style.background =
//         `conic-gradient(#00f7ff ${degree}deg, #000 ${degree}deg)`;
// });

/* =========================
   Typing Animation (Home)
========================= */
const typed = new Typed("h4", {
    strings: ["Web Developer Intern", "Frontend Developer", "Java Learner"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


/* =========================
   Skill Circle Animation
========================= */
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const degree = percent * 3.6;

    circle.style.background = 
        `conic-gradient(#00f7ff ${degree}deg, #000 ${degree}deg)`;
});


/* =========================
   Smooth Scroll (Navbar)
========================= */
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


/* =========================
   Contact Button Scroll
========================= */
document.querySelector(".btn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


/* =========================
   Contact Form Validation
========================= */
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


