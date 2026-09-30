// ================= MOBILE MENU =================

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= BACK TO TOP =================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


function goTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}