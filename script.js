let backTop = document.getElementById('backTop');
let unorderList = document.getElementById('unorder');
let humberger = document.getElementById('bars');
let htmlCssButton = document.getElementById('htmlCssProjects');
let jsButton = document.getElementById('jsProjects');
let singelProject = document.querySelectorAll('.singel-project');
let allProjects = document.getElementById('allProjects');
let navLinks = document.querySelectorAll('.nav-link');
let loginForm = document.getElementById('login-form');

// LoginForm
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let scriptUrl = 'https://script.google.com/macros/s/AKfycbynDvg3C-TPihKd5Umqdz19fKljxeuiYrYUFWkmNQwN4hrvWcZrUe-L83F8Q8NHG3UqvQ/exec'
    let formData = new FormData(loginForm);

    fetch(scriptUrl, {
        method: "POST",
        body: formData
    })
        .then(response => alert("Form Submitted!", response))
        .catch(err => alert("Form Faild"))

    loginForm.reset();
})



// Job Experinace 
document.addEventListener("DOMContentLoaded", () => {
    const experinces = [
        { id: 'years', max: 3, speed: 200 },
        { id: 'projects', max: 50, speed: 60 }
    ]

    experinces.forEach(({ id, max, speed }) => {
        let count = 1;
        let el = document.getElementById(id)

        let timer = setInterval(() => {
            el.innerText = count;
            count++;
            if (count > max) {
                clearInterval(timer);
            }
        }, speed)
    })
});


humberger.addEventListener('click', navIcon)
function navIcon() {
    humberger.classList.toggle('fa-xmark')
    unorderList.classList.toggle('ul-active');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            unorderList.classList.remove('ul-active')
            humberger.classList.remove('fa-xmark')
        })
    })

    document.body.classList.toggle('no-scroll');
}

window.addEventListener('scroll', () => {
    if (scrollY > 800) {
        backTop.style.display = 'block';

    }
    else {
        backTop.style.display = 'none';
    }
})

backTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

navLinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        navLinks.forEach(nav => {
            nav.classList.remove('active');

        });
        navlink.classList.add('active')
    })
})


allProjects.addEventListener('click', (e) => {
    e.preventDefault();

    allProjects.classList.add('active');
    htmlCssButton.classList.remove('active');
    jsButton.classList.remove('active');

    singelProject.forEach((project) => {
        project.style.display = 'block'
    });

})


// HTML Buttons
htmlCssButton.addEventListener('click', (e) => {
    e.preventDefault();
    htmlCssButton.classList.add('active');
    allProjects.classList.remove('active');
    jsButton.classList.remove('active');
    singelProject.forEach((project) => {
        if (project.classList.contains("html")) {
            project.style.display = 'block'
        }

        else {
            project.style.display = "none";

        }
    })

})

// Js Buttons
jsButton.addEventListener('click', (e) => {
    e.preventDefault();
    jsButton.classList.add('active')
    htmlCssButton.classList.remove('active')
    allProjects.classList.remove('active')
    singelProject.forEach((project) => {
        if (project.classList.contains("js")) {
            project.style.display = 'block'
        }

        else {
            project.style.display = "none";

        }
    })
})


// ___________GSAP animation_________________

window.addEventListener('load', () => {

    let tl = gsap.timeline();

    // Navbar Animation
    tl.from('.navbar .logo, ul li, .btn', {
        y: -150,
        duration: 0.5,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.1
    });

    // Image Animation
    tl.from(".image", {
        x: 100,
        opacity: 0,
        ease: "power2.out",
        duration: 0.5
    }, "-=2");

    tl.from(".content", {
        x: -100,
        opacity: 0,
        duration: 1
    }, "-=2")

    // // singel-info
    tl.from(".singel-info", {
        y: 100,
        opacity: 0
    }, "-=2")

    tl.set(".skill-card", { overflow: "hidden " });

    gsap.from(".skill-card", {
        xPercent: 100, //element ko uski apni width ke hisaab se screen ke bahar le jaata hai (right side).
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".skill",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }

    })



    // Project Cards Animation
    let projects = gsap.timeline({
        scrollTrigger: {
            trigger: "#project-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    })
    projects.from(".project-section .heading", {
        y: 50,
        opacity: 0,
        duration: 1
    });

    projects.from('.singel-project', {
        x: (i) => (i % 2 === 0 ? 100 : -100),
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        rotateY: 100,
    });


    // Resume Block
    let resume = gsap.timeline({
        scrollTrigger: {
            trigger: "#resume-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    resume.from("#resume-section .heading", {
        y: 50,
        opacity: 0,
        duration: 1
    });

    resume.from(".resume-block", {
        x: (i) => (i ? 400 : -400),
        opacity: 0,
        stagger: 0.3,
        duration: 1,
    });


    // intro Section
    let aboutMe = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-me",
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
    });


    aboutMe.from(".about-section .heading", {
        y: 50,
        opacity: 0,
        duration: 1
    });

    aboutMe.from('.my-intro, image', {
        x: 300,
        opacity: 0,
        duration: 1,
    });


    let contactUs = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-us",
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    })

    contactUs.from('.contact-us-section .heading', {
        y: 50,
        opacity: 0,
        duration: 1
    })

    contactUs.from(['.info', '.form'], {
        x: (i) => (i % 2 === 0 ? 300 : -300),
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });
});


