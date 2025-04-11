var unorderList = document.getElementById('unorder');
var humberger = document.getElementById('bars');

let htmlCssButton = document.getElementById('htmlCssProjects');
let jsButton = document.getElementById('jsProjects');
let singelProject = document.querySelectorAll('.singel-project');
let allProjects = document.getElementById('allProjects');

allProjects.addEventListener('click', (e) => {
    e.preventDefault();
    singelProject.forEach((project) => {
        project.style.display = 'block'
    });

})


htmlCssButton.addEventListener('click', (e) => {
    e.preventDefault();
    singelProject.forEach((project) => {
        if (project.classList.contains("html")) {
            project.style.display = 'block'
        }

        else {
            project.style.display = "none";

        }
    })
    // jsButton.classList.add("disabled");

})

jsButton.addEventListener('click', (e) => {
    e.preventDefault();
    singelProject.forEach((project) => {
        if (project.classList.contains("js")) {
            project.style.display = 'block'
        }

        else {
            project.style.display = "none";

        }
    })
    // htmlBtn.classList.add("disabled");
})




function navIcon() {
    console.log("Button Works!");
    unorderList.classList.toggle('ul-active')
    humberger.classList.toggle('fa-xmark')
}


//

// ___________GSAP animation_________________