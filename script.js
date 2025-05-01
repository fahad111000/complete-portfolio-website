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




//

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
        duration: 1
    }, "-=2");

    tl.from(".content", {
        x: -100,
        opacity: 0,
        duration: 1
    }, "-=1")

    // // singel-info
    tl.from(".singel-info", {
        y: 100,
        opacity: 0
    })

    tl.set(".skill-card", { overflow: "hidden " })
    tl.from(".skill-card", {
        xPercent: 100, //element ko uski apni width ke hisaab se screen ke bahar le jaata hai (right side).
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.3
    })
});


