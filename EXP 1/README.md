# Experiment 1: Online Book Store — Homepage with Frames

> **Course:** Web Designing Workshop (BCS-353)  
> **Institution:** G.L. Bajaj Institute of Technology and Management, Greater Noida  

---

## 🌐 Live Demo
🔗 **[Click Here to View Live Experiment 1](https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%201/)**  
*(Direct link: `https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%201/`)*

---

## 🎯 Aim / Objective
To design the static homepage required for an online book store website using HTML framesets (`<frameset>` and `<frame>`) and CSS.

### Requirements:
1. The static homepage consists of **three frames**:
   - **Top Frame (`top.html`):** Displays the college logo, website name (*ONLINE BOOK STORE*), institute name (*GL BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT*), and navigation links (*Homepage, Login, Registration, Catalogue, Cart*).
   - **Left Frame (`left.html`):** Displays book category links (*CSE, ECE, EEE, CIVIL, MECHANICAL*).
   - **Right Frame (`welcome.html`):** Serves as the target frame (`target="rightFrame"`) where page descriptions or departmental book catalogues are dynamically loaded upon clicking category links.
2. Styling using external CSS (`style.css`).

---

## 📁 File Structure
```
EXP 1/
├── index.html        # Main frameset container (top, left, and right frames)
├── top.html          # Top navigation frame with logo, titles, and menu links
├── left.html         # Left frame with department categories
├── welcome.html      # Default landing content loaded in the right frame
├── cse.html          # Catalogue page for CSE department
├── ece.html          # Catalogue page for ECE department
├── eee.html          # Catalogue page for EEE department
├── civil.html        # Catalogue page for Civil department
├── mechanical.html   # Catalogue page for Mechanical department
├── login.html        # Target page for Login navigation
├── registration.html # Target page for Registration navigation
├── catalogue.html    # Target page for Catalogue navigation
├── cart.html         # Target page for Cart navigation
├── style.css         # CSS stylesheet for frame styling and layout
├── logo.jpg          # Institute emblem logo
├── logo.png          # High-resolution PNG logo
└── README.md         # Experiment documentation and live link
```

---

## 💻 Core Code Snippets

### 1. `index.html` (Frameset Layout)
```html
<!DOCTYPE html>
<html>
<head>
 <title>Online Book Store</title>
</head>
<frameset rows="130,*" frameborder="1" border="1">
 <frame src="top.html" name="topFrame" scrolling="no">
 <frameset cols="220,*" frameborder="1" border="1">
 <frame src="left.html" name="leftFrame">
 <frame src="welcome.html" name="rightFrame">
 </frameset>
</frameset>
</html>
```

### 2. `top.html` (Header & Navigation)
```html
<!DOCTYPE html>
<html>
<head>
 <title>Top Frame</title>
 <link rel="stylesheet" href="style.css">
</head>
<body class="top">
 <div class="header">
 <img src="logo.jpg" class="logo" alt="GL Bajaj Logo">
 <div>
 <div class="store-name">ONLINE BOOK STORE</div>
 <div class="college-name">
 GL BAJAJ INSTITUTE OF TECHNOLOGY AND MANAGEMENT
 </div>
 </div>
 </div>
 <div class="links">
 <a href="welcome.html" target="rightFrame">Homepage</a>
 <a href="login.html" target="rightFrame">Login</a>
 <a href="registration.html" target="rightFrame">Registration</a>
 <a href="catalogue.html" target="rightFrame">Catalogue</a>
 <a href="cart.html" target="rightFrame">Cart</a>
 </div>
</body>
</html>
```

### 3. `left.html` (Categories with Target)
```html
<!DOCTYPE html>
<html>
<head>
 <title>Left Frame</title>
 <link rel="stylesheet" href="style.css">
</head>
<body class="left">
 <h3>BOOK CATEGORIES</h3>
 <a href="cse.html" target="rightFrame">CSE</a>
 <a href="ece.html" target="rightFrame">ECE</a>
 <a href="eee.html" target="rightFrame">EEE</a>
 <a href="civil.html" target="rightFrame">CIVIL</a>
 <a href="mechanical.html" target="rightFrame">MECHANICAL</a>
</body>
</html>
```

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Krishna040720/HTML-CSS-JAVASCRIPT.DEV.git
   ```
2. Navigate to the `EXP 1` directory:
   ```bash
   cd "HTML-CSS-JAVASCRIPT.DEV/EXP 1"
   ```
3. Open `index.html` in any web browser (Google Chrome, Microsoft Edge, Firefox).
