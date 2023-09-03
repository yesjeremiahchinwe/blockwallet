const headerGroupOne = document.querySelector(".header_one")
const headerGroupTwo = document.querySelector(".header_two")
const headerGroupThree = document.querySelector(".header_three")
const groupOne = document.querySelector(".group_one")
const groupTwo = document.querySelector(".group_two")
const groupThree = document.querySelector(".group_three")
const groupFour = document.querySelector(".group_four")
const featuresUl = document.querySelector(".features_ul")
const resourceUl = document.querySelector(".resource_ul")
const compareUl = document.querySelector(".compare_ul")
const mobileNav = document.querySelector(".header_nav_mobile")
const menuIcon = document.querySelector(".hamburger_menu")
const closeMenuIcon = document.querySelector(".close_menu")
const overLay = document.querySelector(".overlay")
const features = document.querySelector(".features")
const resource = document.querySelector(".resource")
const compare = document.querySelector(".compare")
const chevronIconOne = document.querySelector(".features span i")
const chevronIconTwo = document.querySelector(".resource span i")
const chevronIconThree = document.querySelector(".compare span i")
const mobileFeaturesContainer = document.querySelector(".mobile_features_container")
const mobileResourceContainer = document.querySelector(".mobile_resource_container")
const mobileCompareContainer = document.querySelector(".mobile_compare_container")


/* ---------------------------- Navbar for Desktop View --------------------------- */
/* ------------- Features Nav ----------------------- */
groupOne.addEventListener("mouseover", () => {
    headerGroupTwo.classList.remove("header_group_two")
    resourceUl.classList.remove("show_resource_ul")
    headerGroupOne.classList.add("header_group_one")
    featuresUl.classList.add("show_features_ul")
})

featuresUl.addEventListener("mouseleave", () => {
    headerGroupOne.classList.remove("header_group_one")
    featuresUl.classList.remove("show_features_ul")
})

/* ---------------- Resource Nav --------------------- */
groupTwo.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    featuresUl.classList.remove("show_features_ul")
    headerGroupThree.classList.remove("header_group_three")
    compareUl.classList.remove("show_compare_ul")
    headerGroupTwo.classList.add("header_group_two")
    resourceUl.classList.add("show_resource_ul")
})

resourceUl.addEventListener("mouseleave", () => {
    headerGroupTwo.classList.remove("header_group_two")
    resourceUl.classList.remove("show_resource_ul")
})

/* ----------------- Compare Nav --------------------- */
groupThree.addEventListener("mouseover", () => {
    headerGroupTwo.classList.remove("header_group_two")
    resourceUl.classList.remove("show_resource_ul")
    headerGroupThree.classList.add("header_group_three")
    compareUl.classList.add("show_compare_ul")
})

compareUl.addEventListener("mouseleave", () => {
    headerGroupThree.classList.remove("header_group_three")
    compareUl.classList.remove("show_compare_ul")
})

/* ------------- Token Nav --------------- */
groupFour.addEventListener("mouseover", () => {
    headerGroupOne.classList.remove("header_group_one")
    featuresUl.classList.remove("show_features_ul")
    headerGroupTwo.classList.remove("header_group_two")
    resourceUl.classList.remove("show_resource_ul")
    headerGroupThree.classList.remove("header_group_three")
    compareUl.classList.remove("show_compare_ul")
})
/*  ----------------------------- End of Desktop Nav -------------------------------- */



/* ----------------------------- Navbar for Mobile View -------------------------------  */
menuIcon.addEventListener("click", () => {
    mobileNav.classList.add("show_nav")
    overLay.classList.add("show_overlay")
})

closeMenuIcon.addEventListener("click", () => {
    mobileNav.classList.remove("show_nav")
    overLay.classList.remove("show_overlay")
})

features.addEventListener("click", () => {
    mobileFeaturesContainer.classList.toggle("show_mobile_features_container")
    chevronIconOne.classList.toggle("rotate_one")
})

resource.addEventListener("click", () => {
    mobileResourceContainer.classList.toggle("show_mobile_resource_container")
    chevronIconTwo.classList.toggle("rotate_two")
})

compare.addEventListener("click", () => {
    mobileCompareContainer.classList.toggle("show_mobile_compare_container")
    chevronIconThree.classList.toggle("rotate_three")
})
/*  ---------------------------- End of Mobile Nav ------------------------------ */