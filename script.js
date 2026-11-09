
// =====================================
// 1. APPLICATION VARIABLES
// =====================================

// Store budgeting information.
let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


// =====================================
// 2. REUSABLE FUNCTIONS
// =====================================

// Calculate the remaining balance.
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// Format numbers as Kenyan Shillings.
function formatCurrency(amount) {
    return "KES " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


// Display the results in the browser console.
function displayResults(budget, expenses, balance) {
    console.clear();

    console.log("===== SPENDWISE BUDGET REPORT =====");
    console.log("Monthly Budget: " + formatCurrency(budget));
    console.log("Total Expenses: " + formatCurrency(expenses));
    console.log("Remaining Balance: " + formatCurrency(balance));

    if (balance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("===================================");
}


// Update the dashboard with calculated information.
function updateDashboard() {
    document.getElementById("monthly-budget").textContent =
        formatCurrency(monthlyBudget);

    document.getElementById("total-expenses").textContent =
        formatCurrency(totalExpenses);

    document.getElementById("remaining-balance").textContent =
        formatCurrency(remainingBalance);

    const message = document.getElementById("result-message");

    if (remainingBalance >= 0) {
        message.textContent =
            "You have " + formatCurrency(remainingBalance) +
            " remaining. You are within your budget.";
    } else {
        message.textContent =
            "You have exceeded your budget by " +
            formatCurrency(Math.abs(remainingBalance)) + ".";
    }
}


// =====================================
// 3. COLLECT USER INPUT
// =====================================

function collectBudgetData() {

    // Ask the user for their monthly budget.
    const budgetInput = prompt(
        "Enter your monthly budget in KES:"
    );

    // Stop if the user cancels.
    if (budgetInput === null) {
        console.log("Budget entry cancelled.");
        return;
    }

    // Convert the budget input from text to a number.
    const budget = Number(budgetInput);

    // Validate the budget.
    if (budgetInput.trim() === "" ||
        !Number.isFinite(budget) ||
        budget <= 0) {

        alert("Please enter a valid budget greater than zero.");
        return;
    }


    // Ask the user for total expenses.
    const expensesInput = prompt(
        "Enter your total expenses in KES:"
    );

    // Stop if the user cancels.
    if (expensesInput === null) {
        console.log("Expense entry cancelled.");
        return;
    }

    // Convert expense input from text to a number.
    const expenses = Number(expensesInput);

    // Validate the expenses.
    if (expensesInput.trim() === "" ||
        !Number.isFinite(expenses) ||
        expenses < 0) {

        alert("Please enter valid expenses. Expenses cannot be negative.");
        return;
    }


    // =====================================
    // 4. STORE DATA AND PERFORM CALCULATIONS
    // =====================================

    monthlyBudget = budget;
    totalExpenses = expenses;

    remainingBalance = calculateRemainingBalance(
        monthlyBudget,
        totalExpenses
    );


    // =====================================
    // 5. DISPLAY RESULTS
    // =====================================

    updateDashboard();

    displayResults(
        monthlyBudget,
        totalExpenses,
        remainingBalance
    );

    alert("Your SpendWise budget calculation is complete!");
}


// =====================================
// 6. CONNECT THE BUTTON TO THE FUNCTION
// =====================================

document.getElementById("budget-button").addEventListener(
    "click",
    collectBudgetData
);
