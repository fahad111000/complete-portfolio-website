let unorderList = document.getElementById('unorder');
let humberger = document.getElementById('bars');
let htmlCssButton = document.getElementById('htmlCssProjects');
let jsButton = document.getElementById('jsProjects');
let singelProject = document.querySelectorAll('.singel-project');
let allProjects = document.getElementById('allProjects');
let navLinks = document.querySelectorAll('.nav-link');

humberger.addEventListener('click', navIcon)



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

//

// ___________GSAP animation_________________