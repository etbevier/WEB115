document.addEventListener("DOMContentLoaded", function() {
    const mealPlanForm = document.getElementById('mealPlanForm');

    mealPlanForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const monday = {
            breakfast: document.getElementById('mondayBreakfast').value,
            snack1: document.getElementById('mondaySnack1').value,
            lunch: document.getElementById('mondayLunch').value,
            snack2: document.getElementById('mondaySnack2').value,
            dinner: document.getElementById('mondayDinner').value
        };

        const tuesday = {
            breakfast: document.getElementById('tuesdayBreakfast').value,
            snack1: document.getElementById('tuesdaySnack1').value,
            lunch: document.getElementById('tuesdayLunch').value,
            snack2: document.getElementById('tuesdaySnack2').value,
            dinner: document.getElementById('tuesdayDinner').value
        };

        const wednesday = {
            breakfast: document.getElementById('wednesdayBreakfast').value,
            snack1: document.getElementById('wednesdaySnack1').value,
            lunch: document.getElementById('wednesdayLunch').value,
            snack2: document.getElementById('wednesdaySnack2').value,
            dinner: document.getElementById('wednesdayDinner').value
        };
		const thursday = {
            breakfast: document.getElementById('thursdayBreakfast').value,
            snack1: document.getElementById('thursdaySnack1').value,
            lunch: document.getElementById('thursdayLunch').value,
            snack2: document.getElementById('thursdaySnack2').value,
            dinner: document.getElementById('thursdayDinner').value
        };
		const friday = {
            breakfast: document.getElementById('fridayBreakfast').value,
            snack1: document.getElementById('fridaySnack1').value,
            lunch: document.getElementById('fridayLunch').value,
            snack2: document.getElementById('fridaySnack2').value,
            dinner: document.getElementById('fridayDinner').value
        };
		const saturday = {
            breakfast: document.getElementById('saturdayyBreakfast').value,
            snack1: document.getElementById('saturdaySnack1').value,
            lunch: document.getElementById('saturdayLunch').value,
            snack2: document.getElementById('saturdaySnack2').value,
            dinner: document.getElementById('saturdayDinner').value
        };
		const sunday = {
            breakfast: document.getElementById('sundayBreakfast').value,
            snack1: document.getElementById('sundaySnack1').value,
            lunch: document.getElementById('sundayLunch').value,
            snack2: document.getElementById('sundaySnack2').value,
            dinner: document.getElementById('sundayDinner').value
        };


        displayMealPlan(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    });
});

function displayMealPlan(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
    const mealPlanDisplay = document.getElementById('mealPlanDisplay');
    mealPlanDisplay.innerHTML = '';

    const days = ['Monday', 'Tuesday', 'Wednesday' 'Thursday' 'Friday' 'Saturday' 'Sunday'];

    days.forEach(day => {
        const mealPlanItem = document.createElement('div');
        mealPlanItem.innerHTML = `<h3>${day}</h3>
                                  <p>Breakfast: ${day === 'Monday' ? monday.breakfast : ''}</p>
                                  <p>Snack: ${day === 'Monday' ? monday.snack1 : ''}</p>
                                  <p>Lunch: ${day === 'Monday' ? monday.lunch : ''}</p>
                                  <p>Snack: ${day === 'Monday' ? monday.snack2 : ''}</p>
                                  <p>Dinner: ${day === 'Monday' ? monday.dinner : ''}</p>`;
                                 

        mealPlanDisplay.appendChild(mealPlanItem);
    });
}
