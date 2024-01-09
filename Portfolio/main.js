//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

//Services section - Modal
const internalModals = document.querySelectorAll(".international-model");
const btnModals = document.querySelectorAll(".show-more-btn");
const closeModals = document.querySelectorAll(".modal-close-btn");
const skillModals = document.querySelectorAll(".international-model-1");
const btnModals_1 = document.querySelectorAll(".show-more-btn-skill");
const closeModals_1 = document.querySelectorAll(".modal-close-btn-skill");
const achievementModal = document.querySelectorAll(".achievement-modal");
const showachievement = document.querySelectorAll(".click-more-btn");
const achievementclose = document.querySelectorAll(".modal-close-btn");
const projectmodal = document.querySelectorAll(".project-modal");
const projectcard = document.querySelectorAll(".project-card");
const projectclose = document.querySelectorAll(".project-close-btn");

var modal = function(modalClick){
    internalModals[modalClick].classList.add("active");
}

var modal_1 = function(modalClick){
    skillModals[modalClick].classList.add("active");
}

var modal_2 = function(modalClick){
    achievementModal[modalClick].classList.add("active");
}

var modal_3 = function(modalClick){
    projectmodal[modalClick].classList.add("active");
}


btnModals.forEach((showmoreBtn, i) => {
    showmoreBtn.addEventListener("click", () =>{
        modal(i);
    });
});

btnModals_1.forEach((showmorebtnskills, i) => {
    showmorebtnskills.addEventListener("click", () =>{
        modal_1(i);
    });
});

showachievement.forEach((achievementshowbtn, i) => {
    achievementshowbtn.addEventListener("click", () =>{
        modal_2(i);
    });
});

projectcard.forEach((projectshowbtn, i) => {
    projectshowbtn.addEventListener("click", () =>{
        modal_3(i);
    });
});


closeModals.forEach((modalcloseBtn) =>{
    modalcloseBtn.addEventListener("click", () =>{
        internalModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

closeModals_1.forEach((modalcloseBtnskill) =>{
    modalcloseBtnskill.addEventListener("click", () =>{
        skillModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

achievementclose.forEach((modalcloseBtnachievement) =>{
    modalcloseBtnachievement.addEventListener("click", () =>{
        achievementModal.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

projectclose.forEach((modalcloseBtnproject) =>{
    modalcloseBtnproject.addEventListener("click", () =>{
        projectmodal.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

const scrollToBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToBtn.classList.toggle("active", window.scrollY > 500);
});

scrollToBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll(".nav-items a[href*=" + id + "]").classList.add("active");
        }

        else{
            document.querySelectorAll(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });

});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-theme", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedThem === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

