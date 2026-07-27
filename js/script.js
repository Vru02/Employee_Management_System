// Employee Management System
// script.js

// Welcome Message
window.addEventListener("load", function () {
    console.log("Employee Management System Loaded Successfully");
});

// Logout Confirmation
function logout() {
    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "../index.html";
    }
}

// Card Hover Animation
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Current Date
const dateElement = document.getElementById("currentDate");

if (dateElement) {
    const today = new Date();

    dateElement.innerHTML =
        today.toDateString();
}