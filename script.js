// AI Workplace Productivity Assistant
// Main application JavaScript

document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll(".nav-item");
    const featureButtons = document.querySelectorAll(".feature-button");

    // Sidebar navigation
    navItems.forEach((item) => {
        item.addEventListener("click", () => {

            navItems.forEach((nav) => {
                nav.classList.remove("active");
            });

            item.classList.add("active");

            console.log(`Selected tool: ${item.textContent}`);
        });
    });

    // Feature card buttons
    featureButtons.forEach((button) => {
        button.addEventListener("click", () => {

            const featureCard = button.closest(".feature-card");
            const featureName = featureCard.querySelector("h3").textContent;

            console.log(`Opening: ${featureName}`);

            alert(`${featureName} will be available soon.`);
        });
    });

});

