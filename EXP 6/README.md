# Experiment 6: Registration Page — JavaScript Validation (Name & Password)

> **Course:** Web Designing Workshop (BCS-353)  
> **Institution:** G.L. Bajaj Institute of Technology and Management, Greater Noida  

---

## 🌐 Live Demo
🔗 **[Click Here to View Live Experiment 6](https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%206/)**  
*(Direct link: `https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%206/`)*

---

## 🎯 Aim / Objective
To implement client-side **JavaScript validation** on the Registration Form for the following fields:
1. **Name:**
   - Must not be empty.
   - Must contain alphabetic characters only (`/^[A-Za-z]+$/`).
   - Must be at least **6 characters** long.
2. **Password:**
   - Must not be empty.
   - Must be at least **6 characters** long.

### Interactive Features:
- **Real-time Visual Feedback:** Green border (`input.good`) on valid entries; red border (`input.bad`) on invalid entries.
- **Dynamic Error Messages:** Rendered below each input element without reloading the page.
- **Success Notification:** Displays a confirmation banner and popup alert upon successful submission.

---

## 📁 File Structure
```
EXP 6/
├── index.html        # Form structure, styling, and JavaScript validation logic
├── style.css         # Supplementary CSS styling
├── logo.png          # Official GL Bajaj crest logo (transparent)
├── logo.jpg          # Alternate logo format
└── README.md         # Experiment documentation and live link
```

---

## 💻 Validation Implementation
```javascript
function validateName() {
  var name = document.getElementById("name").value;
  var err = document.getElementById("nameError");
  var field = document.getElementById("name");
  var onlyAlphabets = /^[A-Za-z]+$/;
 
  if (name.trim() === "") {
    err.textContent = "Name cannot be empty.";
  } else if (!onlyAlphabets.test(name)) {
    err.textContent = "Name should contain alphabets only.";
  } else if (name.length < 6) {
    err.textContent = "Name must be at least 6 characters long.";
  } else {
    err.textContent = "";
    field.className = "good";
    return true;
  }
  field.className = "bad";
  return false;
}
```

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Krishna040720/HTML-CSS-JAVASCRIPT.DEV.git
   ```
2. Navigate to `EXP 6`:
   ```bash
   cd "HTML-CSS-JAVASCRIPT.DEV/EXP 6"
   ```
3. Open `index.html` in your web browser.
