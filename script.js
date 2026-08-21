// AI Workplace Productivity Assistant
// Main application JavaScript

document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll(".nav-item");

    // Sidebar navigation
    navItems.forEach((item) => {
        item.addEventListener("click", () => {

            navItems.forEach((nav) => {
                nav.classList.remove("active");
            });

            item.classList.add("active");
        });
    });


    // Smart Email Generator
    const generateEmailButton = document.getElementById("generate-email");
    const emailPurpose = document.getElementById("email-purpose");
    const emailAudience = document.getElementById("email-audience");
    const emailTone = document.getElementById("email-tone");
    const emailLoading = document.getElementById("email-loading");
    const emailOutput = document.getElementById("email-output");


    if (generateEmailButton) {

        generateEmailButton.addEventListener("click", () => {

            const purpose = emailPurpose.value.trim();
            const audience = emailAudience.value;
            const tone = emailTone.value;


            if (!purpose) {
                emailOutput.textContent =
                    "Please enter what you would like the email to be about.";
                return;
            }


            // Show loading state
            emailLoading.classList.remove("hidden");
            emailOutput.textContent = "";


            // Prototype response
            setTimeout(() => {

                emailLoading.classList.add("hidden");

                const audienceName =
                    audience.charAt(0).toUpperCase() + audience.slice(1);

                const toneName =
                    tone.charAt(0).toUpperCase() + tone.slice(1);


                emailOutput.textContent =
`Subject: Request Regarding Your Work

Dear ${audienceName},

I hope you are doing well.

I am writing to discuss the following matter:

${purpose}

I would appreciate the opportunity to discuss this further and determine the appropriate next steps.

Thank you for your time and consideration.

Kind regards,
[Your Name]

Tone: ${toneName}`;

            }, 1500);

        });

    }

});
            
