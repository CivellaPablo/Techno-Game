var menuBtn = document.getElementById("menuBtn");
var mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", function () {
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
});

function closeMobileNav() {
    mobileNav.style.display = "none";
}

var contactForm = document.getElementById("contactForm");
var successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    successMessage.style.display = "block";

    contactForm.reset();

    setTimeout(function () {
        successMessage.style.display = "none";
    }, 4000);
});

var gameDescriptions = {
    "Cyber Combat": "A high-octane action shooter set in a cyberpunk world. Blast your way through enemy factions in intense 5v5 matches. Features 20+ weapons and customizable characters.",
    "Neon Quest": "An open-world RPG adventure where every choice matters. Explore neon-lit cities, dark dungeons, and ancient ruins. Your story, your way.",
    "Logic Wars": "A real-time strategy game that tests your mind. Build your base, manage resources, and command your army to defeat rivals from around the world.",
    "Turbo Dash": "A futuristic racing game with 30+ tracks and insane speed boosts. Unlock new vehicles and race online against players worldwide."
};

function showGameInfo(gameName) {
    var title = document.getElementById("popupTitle");
    var desc = document.getElementById("popupDesc");
    var overlay = document.getElementById("popupOverlay");

    title.textContent = gameName;
    desc.textContent = gameDescriptions[gameName];

    overlay.style.display = "flex";
}

function closePopup() {
    var overlay = document.getElementById("popupOverlay");
    overlay.style.display = "none";
}

document.getElementById("popupOverlay").addEventListener("click", function (event) {
    if (event.target === this) {
        closePopup();
    }
});

var navLinks = document.querySelectorAll("a[href^='#']");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        var targetId = this.getAttribute("href");
        var targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
