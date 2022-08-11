function changeActiveItem(links, link) {
    links.forEach((l) => { l.classList.remove('active') })
    link.classList.add('active')
}

function changeActiveNavbarItemOnClick() {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
        link.addEventListener("click", function () {
            changeActiveItem(links, link);
        })
    })
}

function changeActiveNavbarItemOnScroll() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    function activeSection() {
        let len = sections.length;
        while (--len && window.scrollY < sections[len].offsetTop);
        if (len != sections.length - 1) {
            changeActiveItem(links, links[len]);
        }
    }
    activeSection();
    window.addEventListener("scroll", activeSection);
}
function changeProgressBarOnScroll() {
    const progressBars = document.querySelectorAll(".progress-bar");
    const currentSkills = document.getElementById("current-skills");
    function showProgress() {
        progressBars.forEach((pB) => {
            const value = pB.dataset.progress;
            const skill = pB.classList[0];
            pB.style.cssText = "  width: " + value + '%' + ";  animation:" + skill + " 3s;";
        })
    }
    function hideProgress() {
        progressBars.forEach((pB) => {
            const skill = pB.classList[0];
            const value = pB.dataset.progress;

            pB.style.cssText = " width: " + value + '%' + "; animation:" + skill + "Out 3s;";
        })
    }

    window.addEventListener("scroll", (e) => {
        const currentSkillsPosition = currentSkills.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        const butoomSkillsPosition = currentSkills.getBoundingClientRect().bottom;

        if (currentSkillsPosition + 150 < screenPosition && butoomSkillsPosition >= 200) {
            showProgress();
        }
        else {
            hideProgress();
        }
    })


}


function fadeInOut() {
    const fadeSections = document.querySelectorAll(".fadeSection");
    window.addEventListener("scroll", () => {
        fadeSections.forEach(fadeSection => {
            const i_O = fadeSection.querySelectorAll(".fade_in_out");
            function fade_in(io) {
                io.style.cssText = "opacity: 1; transform: translateX(0);";
            }

            function fade_out(io) {
                const value = io.dataset.fade;
                io.style.cssText = "opacity: 0; transform: translateX(" + value + "%);";
            }
            const trigger = window.innerHeight / 6 * 4;
            i_O.forEach(io => {
                const top = io.getBoundingClientRect().top;
                const buttom = io.getBoundingClientRect().buttom;
                if (trigger + 100 > top) {
                    fade_in(io);
                } else {
                    fade_out(io);
                }
            });
        });
    });

}



function styleSwitcherToggle() {

    const styleSwitcher = document.querySelector(".style-switcher");
    const styleSwitcherToggleer = document.querySelector(".switcher-btn")


    styleSwitcherToggleer.addEventListener("click", function () {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");


    })
}



function darkSwitcherToggle() {

    const darkSwitcherToggleer = document.querySelector(".dark-btn")
    darkSwitcherToggleer.addEventListener("click", () => {
        darkSwitcherToggleer.querySelector("i").classList.toggle("fa-moon");
        darkSwitcherToggleer.querySelector("i").classList.toggle("fa-sun");

        if (darkSwitcherToggleer.querySelector("i").classList.contains("fa-sun")) {
            localStorage.setItem("dark", "true");

        }
        else {
            localStorage.setItem("dark", "false");
        }
        themeMode();

    });
    function themeMode() {
        if (localStorage.getItem("dark") === "true") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }

    if (localStorage.getItem("dark") !== null) {
        themeMode();
    }
    if (document.body.classList.contains("dark")) {
        darkSwitcherToggleer.querySelector("i").classList.toggle("fa-moon");
        darkSwitcherToggleer.querySelector("i").classList.toggle("fa-sun");

    }

}


function themeColors() {
    const colorStyle = document.querySelector(".color-style");
    const themeColorContainer = document.querySelector(".theme-colors");
    themeColorContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("theme-color-item")) {
            localStorage.setItem("color", target.dataset.theme_color);
            setColor();

        }
    });


    function setColor() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
        if (document.querySelector(".theme-color-item.active")) {
            document.querySelector(".theme-color-item.active").classList.remove("active")
        }

        document.querySelector("[data-theme_color=" + localStorage.getItem("color") + "]").classList.add("active")

    }

    if (localStorage.getItem("color") !== null) {
        setColor();}
     else {
        const defaultColor = colorStyle.getAttribute("href").split("/")[3].split(".")[0];
        document.querySelector("[data-theme_color=" + defaultColor + "]").classList.add("active")
    }
}

function pageLoadin()
{

    window.addEventListener("load",()=>{
        document.querySelector(".page-loader").classList.add("face-out");
        setTimeout(() => {
            document.querySelector(".page-loader").style.display = "none";
        }, 600);
    })
    
}

/************************* CALL THE FUNCTIONS*************************/
changeProgressBarOnScroll();

changeActiveNavbarItemOnClick();

changeActiveNavbarItemOnScroll();

fadeInOut();

themeColors();

styleSwitcherToggle();

darkSwitcherToggle();

pageLoadin();