let subpages = {}
let buttons = {}

window.onload = () => {
    subpages.aboutMe = document.getElementById("about-me-page")
    subpages.contact = document.getElementById("contact-page")
    subpages.portfolio = document.getElementById("portfolio-page")

    buttons.aboutMe = document.getElementById("about-me-button")
    buttons.contact = document.getElementById("contact-button")
    buttons.portfolio = document.getElementById("portfolio-button")

    buttons.aboutMe.onclick = viewAboutMe
    buttons.contact.onclick = viewContact
    buttons.portfolio.onclick = viewPortfolio
}

let viewAboutMe = () => {
    subpages.aboutMe.classList.remove("invisible")
    subpages.contact.classList.add("invisible")
    subpages.portfolio.classList.add("invisible")
}

let viewContact = () => {
    subpages.aboutMe.classList.add("invisible")
    subpages.contact.classList.remove("invisible")
    subpages.portfolio.classList.add("invisible")
}

let viewPortfolio = () => {
    subpages.aboutMe.classList.add("invisible")
    subpages.contact.classList.add("invisible")
    subpages.portfolio.classList.remove("invisible")
}