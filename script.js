document.addEventListener("DOMContentLoaded", function () {

    // Smart Email Generator
    const emailButton = document.getElementById("generate-email");

    if (emailButton) {
        emailButton.addEventListener("click", function () {

            const purpose = document.getElementById("email-purpose").value.trim();
            const audience = document.getElementById("email-audience").value;
            const tone = document.getElementById("email-tone").value;

            const loading = document.getElementById("email-loading");
            const output = document.getElementById("email-output");

            if (!purpose) {
                output.textContent = "Please enter what you would like the email to be about.";
                return;
            }

            loading.classList.remove("hidden");
            output.textContent = "";

            setTimeout(function () {

                loading.classList.add("hidden");

                output.textContent =
                    "Subject: Request Regarding Your Work " +
                    "Dear " + audience + ", " +
                    "I hope you are doing well. " +
                    purpose + " " +
                    "I would appreciate the opportunity to discuss this further. " +
                    "Thank you for your time and consideration. " +
                    "Kind regards, " +
                    "[Your Name] " +
                    "Tone: " + tone;

            }, 1500);
        });
    }


    // Meeting Notes Summarizer
    const meetingButton = document.getElementById("summarize-meeting");

    if (meetingButton) {
        meetingButton.addEventListener("click", function () {

            const notes = document.getElementById("meeting-notes").value.trim();

            const loading = document.getElementById("meeting-loading");
            const output = document.getElementById("meeting-output");

            if (!notes) {
                output.textContent = "Please paste your meeting notes before summarizing.";
                return;
            }

            loading.classList.remove("hidden");
            output.textContent = "";

            setTimeout(function () {

                loading.classList.add("hidden");

                output.textContent =
                    "Meeting Summary " +
                    "Key Points: " +
                    "• Important topics from the meeting have been identified. " +
                    "Decisions: " +
                    "• Review the decisions recorded in the meeting notes. " +
                    "Action Items: " +
                    "• Follow up on the tasks discussed. " +
                    "Deadlines: " +
                    "• Review the original notes for specific deadlines. " +
                    "This prototype summary is based on the information provided.";

            }, 1500);
        });
    }


    // AI Task Planner
    const taskButton = document.getElementById("plan-tasks");

    if (taskButton) {
        taskButton.addEventListener("click", function () {

            const tasks = document.getElementById("task-input").value.trim();

            const loading = document.getElementById("task-loading");
            const output = document.getElementById("task-output");

            if (!tasks) {
                output.textContent = "Please enter your tasks before creating a plan.";
                return;
            }

            loading.classList.remove("hidden");
            output.textContent = "";

            setTimeout(function () {

                loading.classList.add("hidden");

                output.textContent =
                    "Task Priority Plan " +
                    "HIGH PRIORITY " +
                    "• Complete tasks with approaching deadlines first. " +
                    "MEDIUM PRIORITY " +
                    "• Complete important tasks without immediate deadlines. " +
                    "LOW PRIORITY " +
                    "• Complete routine tasks after higher-priority work. " +
                    "Recommended Order: " +
                    "1. Review deadlines. " +
                    "2. Complete the most urgent task. " +
                    "3. Complete important tasks. " +
                    "4. Complete routine tasks. " +
                    "Next Action: " +
                    "Start with the task that has the closest deadline or greatest urgency. " +
                    "This prototype plan is based on the tasks provided.";

            }, 1500);
        });
    }

});
