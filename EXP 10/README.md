# Experiment 10: Developer Portfolio Website

> **Course:** Web Designing Workshop (BCS-353)  
> **Topic Choice:** Option 1 — Your Own Portfolio  
> **Student:** Krishna (B.Tech CSE - Data Science)  
> **Institution:** G.L. Bajaj Institute of Technology and Management, Greater Noida  

---

## 🌐 Live Demo
🔗 **[Click Here to View Live Experiment 10](https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%2010/)**  
*(Direct link: `https://krishna040720.github.io/HTML-CSS-JAVASCRIPT.DEV/EXP%2010/`)*

---

## 🎯 Aim / Objective
To design and build an end-to-end personal **Developer Portfolio** web application demonstrating comprehensive mastery of **HTML5, CSS3, and JavaScript**:
1. **Semantic HTML5 Structure:** Navigation header, hero section, about me, skills grid, filterable project showcase, interactive contact form, and footer.
2. **Modern Responsive CSS3 Styling:** White, black, and electric blue theme with fluid typography (`clamp()`), flexbox, grid, glassmorphic header, CSS variables, and mobile breakpoints (`1000px`, `760px`, `420px`).
3. **Interactive JavaScript Engine:**
   - Mobile hamburger drawer toggle with ARIA accessibility.
   - Smooth active link state tracking using `IntersectionObserver`.
   - Scroll-triggered reveal animations for skill cards.
   - Client-side project category filtering (`All`, `Web Development`, `Applications`).
   - Contact form validation and dynamic `mailto:` email dispatch.

---

## 📁 File Structure
```
EXP 10/
├── index.html        # Portfolio markup and JavaScript interactions
├── style.css         # Complete stylesheet (responsive layouts, animations, theme)
├── logo.png          # Official GL Bajaj crest logo (transparent)
├── logo.jpg          # Alternate logo format
└── README.md         # Experiment documentation and live link
```

---

## 💻 Key Features & Implementation

### 1. Interactive Project Filtering
```javascript
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projectCards.forEach(card => {
      card.hidden = !(filter === "all" || card.dataset.category === filter);
    });
  });
});
```

### 2. Intersection Observer Active Navigation
```javascript
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
```

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Krishna040720/HTML-CSS-JAVASCRIPT.DEV.git
   ```
2. Navigate to `EXP 10`:
   ```bash
   cd "HTML-CSS-JAVASCRIPT.DEV/EXP 10"
   ```
3. Open `index.html` in your web browser.
