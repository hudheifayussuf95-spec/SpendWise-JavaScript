
# SpendWise - JavaScript Budget Tracker

## Project Description

SpendWise is a personal budget dashboard that helps users
understand their monthly budget, total expenses, and remaining
balance.

The project uses HTML, CSS, and JavaScript to create an
interactive budgeting application.

Users can enter their monthly budget and total expenses.
The application calculates the remaining balance and displays
the results on the dashboard and in the browser console.

## Project Files

- `index.html` - Creates the structure of the SpendWise dashboard.
- `style.css` - Controls the design, layout, colors, and responsive appearance.
- `script.js` - Handles user input, variables, calculations, and functions.
- `README.md` - Explains the project and how it works.

## JavaScript Concepts Implemented

### 1. Variables

The project uses JavaScript variables to store budgeting information.

Examples:

- `monthlyBudget` stores the user's monthly budget.
- `totalExpenses` stores the user's total expenses.
- `remainingBalance` stores the calculated remaining money.

The project uses `let` for values that can change and `const`
for values that should not be reassigned.

### 2. Data Types

The project uses different JavaScript data types:

- Number: Stores budget and expense amounts.
- String: Stores user input and messages.
- Null: Checks when a user cancels an input prompt.

### 3. User Input

The application collects information using the JavaScript
`prompt()` function.

Users enter their monthly budget and total expenses.

The `Number()` function converts the input from text into
numbers so that calculations can be performed.

### 4. Budget Calculations

The application calculates the remaining balance by subtracting
total expenses from the monthly budget.

Formula:

Remaining Balance = Monthly Budget - Total Expenses

Example:

Monthly Budget = KES 10,000

Total Expenses = KES 6,000

Remaining Balance = KES 4,000

### 5. Functions

Functions organize the JavaScript code and make it reusable.

The project includes:

- `calculateRemainingBalance()` - Calculates the remaining balance.
- `formatCurrency()` - Formats amounts as Kenyan Shillings.
- `displayResults()` - Displays labeled results in the browser console.
- `updateDashboard()` - Updates the dashboard with the calculated values.
- `collectBudgetData()` - Collects and validates user input and processes the budget.

### 6. Displaying Results

The application displays the monthly budget, total expenses,
and remaining balance on the dashboard.

It also uses `console.log()` to display a clearly labeled
budget report in the browser console.

## How to Run the Project

1. Download or clone the GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser.
4. Click the "Enter Budget Information" button.
5. Enter your monthly budget.
6. Enter your total expenses.
7. View the calculated results on the dashboard.
8. Open the browser Developer Tools and select Console
   to view the budget report.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Author

SpendWise Student Project
