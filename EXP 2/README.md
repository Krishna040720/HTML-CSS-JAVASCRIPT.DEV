# Experiment 2: Clean Login Page

> **Course:** Web Designing Workshop (BCS-353)  
> **Institution:** G.L. Bajaj Institute of Technology and Management, Greater Noida  

---

## 🌐 Live Demo
🔗 **[Click Here to View Live Experiment 2](https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%202/)**  
*(Direct link: `https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%202/`)*

---

## 🎯 Aim / Objective
To design and implement a clean, tabbed Login Page for an Online Book Store using HTML tables, CSS layout, and the CSS `:target` pseudo-class for seamless client-side page switching without JavaScript.

### Key Requirements:
1. Outer container with title `LOGINPAGE:` and solid border.
2. Structured table layout with defined column widths (`colgroup`).
3. **Row 1:** GL Bajaj logo and website title (*GL Bajaj Online Book Store*) with background `#f4bd88`.
4. **Row 2:** Navigation bar (*Home, Login, Registration, Catalogue, Cart*) with background `#f7e3d1`.
5. **Row 3:** Two-column split layout:
   - **Left column:** Department links (*CSE, ECE, EEE, CIVIL*).
   - **Right column:** Dynamic page content using the pure CSS `:target` technique (Login shown by default; Registration, Catalogue, and Cart swap into view when clicked).

---

## 📁 File Structure
```
EXP 2/
├── index.html        # Clean login page layout and interactive tab structure
├── style.css         # Styling, fixed dimensions, and CSS :target tab rules
├── logo.png          # GL Bajaj crest logo
├── logo.jpg          # Alternate logo format
└── README.md         # Experiment documentation and live link
```

---

## 💡 Technical Highlight: CSS `:target` Navigation
This implementation uses pure CSS to switch views without needing JavaScript or page reloads:
```css
/* All sub-pages hidden by default */
.page {
  display: none;
}

/* Display active page matching the URL hash */
.page:target {
  display: block;
}

/* Login is default */
#login {
  display: block;
}

/* Hide default login when another target is active */
#home:target ~ #login,
#registration:target ~ #login,
#catalogue:target ~ #login,
#cart:target ~ #login {
  display: none;
}
```

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Krishna040720/HTML-CSS-JAVASCRIPT.DEV.git
   ```
2. Navigate to the `EXP 2` directory:
   ```bash
   cd "HTML-CSS-JAVASCRIPT.DEV/EXP 2"
   ```
3. Open `index.html` in your browser.
