# Create the README content for Dark Calculator as a string
calculator_readme = """
Dark Calculator

A sleek, dark-themed simple calculator built with HTML, CSS, and JavaScript.

---

Features

- Basic arithmetic operations including addition (+), subtraction (−), multiplication (×), division (÷), parentheses, and percentage (%).
- Clear (AC) button to reset the current input.
- Real-time expression display.
- Error handling for invalid expressions.
- Responsive grid layout for buttons with hover effects.
- Modern dark UI with subtle shadows and color highlights.

---

How It Works

HTML

- A main container with a display screen to show the current expression or result.
- Calculator buttons organized in a 4-column grid.
- Buttons include digits, operations, parentheses, clear (AC), and equals (=).

CSS

- Dark-themed design with purple and gray shades.
- Rounded buttons with hover highlights.
- Responsive layout using CSS grid.
- Display section styled for clear readability.

JavaScript

- Captures button clicks and builds a mathematical expression string.
- On pressing =, evaluates the expression safely (with basic error catching).
- Converts special characters (×, ÷) to JavaScript operators (*, /) before evaluation.
- Clears display on AC.
- Displays "Error" for invalid input or evaluation errors.

---

Project Structure

/dark-calculator
├── index.html       # Calculator UI markup
├── style.css        # Styling and layout
└── script.js        # Calculator logic and event handling

---

Usage Instructions

1. Open index.html in a modern web browser.
2. Use the buttons to build your arithmetic expression.
3. Press = to calculate the result.
4. Press AC to clear the input and start over.

---

Technologies Used

- HTML5  
- CSS3 (Grid, transitions, hover effects)  
- Vanilla JavaScript (DOM manipulation, event listeners, eval for calculations)

---

License

This project is free and open source.

---

If you want, I can help you package this into a .zip or add more advanced features!
"""

# Save to a .txt file
file_path_calculator = "/mnt/data/DarkCalculator_README.txt"
with open(file_path_calculator, "w") as f:
    f.write(calculator_readme)

file_path_calculator
