$('.header-browse-dropdown').hover(function () {
    $(this).find('.header-drop-nav').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $(this).find('.header-drop-nav').slideUp(400);
    $(this).removeClass("opened");
});
$('.header-sub-dropdown').hover(function () {
    $(this).find('.sub-dropdown').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $(this).find('.sub-dropdown').slideUp(400);
    $(this).removeClass("opened");
});
$('.header-free-dropdown').hover(function () {
    $(this).find('.header-drop-nav').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $(this).find('.header-drop-nav').slideUp(400);
    $(this).removeClass("opened");
});
$('.header-about-dropdown').hover(function () {
    $(this).find('.header-drop-nav').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $(this).find('.header-drop-nav').slideUp(400);
    $(this).removeClass("opened");
});
$('.header-pros-dropdown').hover(function () {
    $(this).find('.header-drop-nav').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $(this).find('.header-drop-nav').slideUp(400);
    $(this).removeClass("opened");
});

const selected_hamburger = document.querySelector(".hamburger");
const sidebar_section = document.querySelector(".side-bar");
selected_hamburger.addEventListener("click", () => {
    sidebar_section.classList.toggle("activate");
    selected_hamburger.classList.toggle("activate");
});
const selected = document.querySelector(".selection-input-area");
const optionsContainer = document.querySelector(".hero-options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("header").removeClass("active");
    }
});