# Experiment 7: Registration Page — JavaScript Validation (Email & Phone)

> **Course:** Web Designing Workshop (BCS-353)  
> **Institution:** G.L. Bajaj Institute of Technology and Management, Greater Noida  

---

## 🌐 Live Demo
🔗 **[Click Here to View Live Experiment 7](https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%207/)**  
*(Direct link: `https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%207/`)*

---

## 🎯 Aim / Objective
To implement client-side **JavaScript regex validation** on the Registration Form for the following fields:
1. **E-mail ID:**
   - Must not be empty.
   - Must follow standard format `name@domain.com` validated via regular expression (`/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/`).
2. **Phone Number:**
   - Must not be empty.
   - Must contain numeric digits only (`/^[0-9]+$/`).
   - Must contain exactly **10 digits** (`phone.length === 10`).

### Interactive Features:
- Real-time border state classes (`.good` and `.bad`).
- Dynamic error message reporting per input field.
- Visual confirmation dialog upon passing all validation checks.

---

## 📁 File Structure
```
EXP 7/
├── index.html        # Form structure, styling, and JavaScript validation logic
├── style.css         # Supplementary CSS styling
├── logo.png          # Official GL Bajaj crest logo (transparent)
├── logo.jpg          # Alternate logo format
└── README.md         # Experiment documentation and live link
```

---

## 💻 Validation Implementation
```javascript
function validateEmail() {
  var email = document.getElementById("email").value;
  var err = document.getElementById("emailError");
  var field = document.getElementById("email");
  var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;
 
  if (email.trim() === "") {
    err.textContent = "E-mail ID cannot be empty.";
  } else if (!pattern.test(email)) {
    err.textContent = "Invalid E-mail ID. Use the format name@domain.com";
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
2. Navigate to `EXP 7`:
   ```bash
   cd "HTML-CSS-JAVASCRIPT.DEV/EXP 7"
   ```
3. Open `index.html` in your web browser.
