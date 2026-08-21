// AI Workplace Productivity Assistant

document.addEventListener("DOMContentLoaded", () => {

    // Sidebar Navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", () => {

            navItems.forEach((nav) => {
                nav.classList.remove("active");
            });

            item.classList.add("active");
        });
    });


    // Smart Email Generator

    const generateEmailButton =
        document.getElementById("generate-email");

    const emailPurpose =
        document.getElementById("email-purpose");

    const emailAudience =
        document.getElementById("email-audience");

    const emailTone =
        document.getElementById("email-tone");

    const emailLoading =
        document.getElementById("email-loading");

    const emailOutput =
        document.getElementById("email-output");


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


            emailLoading.classList.remove("hidden");

            emailOutput.textContent = "";


            setTimeout(() => {

                emailLoading.classList.add("hidden");


                const audienceName =
                    audience.charAt(0).toUpperCase() +
                    audience.slice(1);


                const toneName =
                    tone.charAt(0).toUpperCase() +
                    tone.slice(1);


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


    // Meeting Notes Summarizer

    const summarizeMeetingButton =
        document.getElementById("summarize-meeting");

    const meetingNotes =
        document.getElementById("meeting-notes");

    const meetingLoading =
        document.getElementById("meeting-loading");

    const meetingOutput =
        document.getElementById("meeting-output");


    if (summarizeMeetingButton) {

        summarizeMeetingButton.addEventListener("click", () => {

            const notes = meetingNotes.value.trim();


            if (!notes) {

                meetingOutput.textContent =
                    "Please paste your meeting notes before summarizing.";

                return;
            }


            meetingLoading.classList.remove("hidden");

            meetingOutput.textContent = "";


            setTimeout(() => {

                meetingLoading.classList.add("hidden");


                meetingOutput.textContent =
`Meeting Summary

Key Points:
• The meeting discussion has been reviewed and organised.
• Important topics from the provided notes have been identified.

Decisions:
• Review the decisions recorded in the original meeting notes.

Action Items:
• Follow up on the tasks discussed during the meeting.

Deadlines:
• Check the original meeting notes for specific deadlines.

Note:
This prototype summary is based only on the information provided by the user.`;

            }, 1500);

        });

    }


    // AI Task Planner

    const planTasksButton =
        document.getElementById("plan-tasks");

    const taskInput =
        document.getElementById("task-input");

    const taskLoading =
        document.getElementById("task-loading");

    const taskOutput =
        document.getElementById("task-output");


    if (planTasksButton) {

        planTasksButton.addEventListener("click", () => {

            const tasks = taskInput.value.trim();


            if (!tasks) {

                taskOutput.textContent =
                    "Please enter your tasks before creating a plan.";

                return;
            }


            taskLoading.classList.remove("hidden");

            taskOutput.textContent = "";


            setTimeout(() => {

                taskLoading.classList.add("hidden");


                taskOutput.textContent =
`Task Priority Plan

HIGH PRIORITY
• Complete tasks with approaching deadlines first.
• Address urgent workplace responsibilities.

MEDIUM PRIORITY
• Complete important tasks that do not have immediate deadlines.
• Schedule time for preparation and follow-up work.

LOW PRIORITY
• Complete routine or less urgent tasks after higher-priority work.

Recommended Order:
1. Review all tasks and identify deadlines.
2. Complete the most urgent task.
3. Move to important tasks.
4. Complete routine tasks.

Suggested Schedule:

Morning:
• Focus on high-priority tasks.

Afternoon:
• Complete medium-priority tasks.

End of Day:
• Review progress and complete remaining routine tasks.

Next Action:
Start with the task that has the closest deadline or greatest urgency.

Note:
This prototype plan is based on the tasks provided by the user.`;

            }, 1500);

        });

    }

});
