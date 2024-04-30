document.addEventListener("DOMContentLoaded", function () {
    const mealPlanForm = document.getElementById('mealPlanForm');
    const clearBtn = document.getElementById('clearBtn');

    mealPlanForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const goal = document.getElementById('goal').value;

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const mealPlan = {
            name: name,
            email: email,
            goal: goal
        };

        // Iterations for each day of the week
        const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        daysOfWeek.forEach(function (day) {
            mealPlan[day] = {
                breakfast: document.getElementById(`${day}Breakfast`).value,
                snack1: document.getElementById(`${day}Snack1`).value,
                lunch: document.getElementById(`${day}Lunch`).value,
                snack2: document.getElementById(`${day}Snack2`).value,
                dinner: document.getElementById(`${day}Dinner`).value
            };
        });

        generateMealPlanPage(mealPlan);

        // Add a class to the body element after form submission
        document.body.classList.add('form-submitted');
    });

    clearBtn.addEventListener('click', function () {
        mealPlanForm.reset();
        // Remove the 'form-submitted' class from the body element
        document.body.classList.remove('form-submitted');
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function generateMealPlanPage(mealPlan) {
    const newPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meal Plan</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    background-color: #FFFFED;
                    margin: 0;
                    padding: 0;
                }
                .meal-plan {
                    padding: 20px;
                }
                /* Add more styles as needed */
            </style>
        </head>
        <body>
            <div class="meal-plan">
                <h1>Weekly Meal Plan</h1>
                <div class="user-details">
                    <p><strong>Name:</strong> ${mealPlan.name}</p>
                    <p><strong>Email:</strong> ${mealPlan.email}</p>
                    <p><strong>Weekly Goal:</strong> ${mealPlan.goal}</p>
                </div>
                <div class="days">
                    <!-- Iterations for each day of the week -->
                    ${Object.keys(mealPlan).map(day => {
                        if (typeof mealPlan[day] === 'object') {
                            return `
                                <h2>${day.charAt(0).toUpperCase() + day.slice(1)}</h2>
                                <ul>
                                    <li><strong>Breakfast:</strong> ${mealPlan[day].breakfast}</li>
                                    <li><strong>Snack:</strong> ${mealPlan[day].snack1}</li>
                                    <li><strong>Lunch:</strong> ${mealPlan[day].lunch}</li>
                                    <li><strong>Snack:</strong> ${mealPlan[day].snack2}</li>
                                    <li><strong>Dinner:</strong> ${mealPlan[day].dinner}</li>
                                </ul>
                            `;
                        }
                        return '';
                    }).join('')}
                </div>
            </div>
            <!-- Add print and download buttons -->
            <div class="top-right-buttons">
                <button class="print-btn">Print Planner</button>
                <button class="download-btn">Download Planner</button>
            </div>
            <script>
                // Print button functionality
                document.querySelector('.print-btn').addEventListener('click', function () {
                    window.print();
                });

                // Download button functionality
                document.querySelector('.download-btn').addEventListener('click', function () {
                    const mealPlanContent = document.documentElement.outerHTML;
                    const blob = new Blob([mealPlanContent], { type: 'text/html' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'meal_plan.html';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                });
            </script>
        </body>
        </html>
    `;

    const newPage = window.open();
    newPage.document.write(newPageContent);
}
