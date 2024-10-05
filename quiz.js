// TODO 1: Declare statement, optionButtons, and explanation variables
const statement = document.getElementById('statement');
const explanation = document.getElementById('explanation');
const trueBtn = document.getElementById('trueBtn');
const falseBtn = document.getElementById('falseBtn');

// TODO 2: Create a facts object representing one true/false fact
const facts = {
    fact: "JavaScript is a single-threaded programming language.",
    explanation: "True! JavaScript runs on a single thread, handling tasks one at a time."
   
};

// TODO 3: Use the statement element to display the fact
statement.textContent = facts.fact;

// Event listeners for the buttons
truebtn.addEventListener('click', () => {
    explanation.textContent = facts.explanation;
});
falsebtn.addEventListener('click', () => {
    explanation.textContent = "That's not correct. Try again!";
});


