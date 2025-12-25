// Welcome alert on page load
window.onload = function () {
    alert("Welcome to Aadarsh Durga Utsav - Ward No. 15");
};

// Button click action
document.querySelector(".btn").addEventListener("click", function () {
    alert("Events section coming soon!");
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.8)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.4)";
    }
});
