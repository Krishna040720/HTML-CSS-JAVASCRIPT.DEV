// ==========================================================
// ONLINE STORE - JAVASCRIPT ENGINE
// Combining Experiments 1 to 9 (HTML, CSS & JavaScript)
// ==========================================================

// Global State
const storeData = {
  activeView: 'home',
  activeCategory: 'ALL',
  books: [
    {
      id: 1,
      dept: 'CSE',
      title: 'Data Structures Using C',
      author: 'Reema Thareja',
      publisher: 'Oxford University Press',
      price: 550,
      cover: 'cover1.png'
    },
    {
      id: 2,
      dept: 'ECE',
      title: 'Electronic Devices and Circuits',
      author: 'David A. Bell',
      publisher: 'Oxford University Press',
      price: 620,
      cover: 'cover2.png'
    },
    {
      id: 3,
      dept: 'EEE',
      title: 'Basic Electrical Engineering',
      author: 'D.P. Kothari & I.J. Nagrath',
      publisher: 'McGraw Hill',
      price: 480,
      cover: 'cover3.png'
    },
    {
      id: 4,
      dept: 'CIVIL',
      title: 'Strength of Materials',
      author: 'R.K. Bansal',
      publisher: 'Laxmi Publications',
      price: 450,
      cover: 'cover4.png'
    },
    {
      id: 5,
      dept: 'MECHANICAL',
      title: 'Theory of Machines',
      author: 'S.S. Rattan',
      publisher: 'McGraw Hill',
      price: 620,
      cover: 'cover5.png'
    }
  ],
  cart: [
    { id: 1, dept: 'CSE', title: 'Data Structures Using C', price: 550, qty: 1 },
    { id: 2, dept: 'ECE', title: 'Electronic Devices and Circuits', price: 620, qty: 1 },
    { id: 3, dept: 'EEE', title: 'Basic Electrical Engineering', price: 480, qty: 1 },
    { id: 4, dept: 'CIVIL', title: 'Strength of Materials', price: 450, qty: 1 }
  ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderCatalogue();
  renderCart();
  updateCartBadge();
  setupEventListeners();

  // Handle URL Hash if present
  const hash = window.location.hash.replace('#', '');
  if (['home', 'catalogue', 'cart', 'login', 'registration'].includes(hash)) {
    switchView(hash);
  } else {
    switchView('home');
  }
});

// Switch Active View
function switchView(viewName) {
  storeData.activeView = viewName;
  
  // Hide all panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Activate selected panel
  const targetPanel = document.getElementById(`panel-${viewName}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Update Top Nav Menu Active State
  document.querySelectorAll('.menu-table a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-view') === viewName) {
      link.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Category Filter in Catalogue
function filterCategory(category) {
  storeData.activeCategory = category;
  
  // Update category list UI
  document.querySelectorAll('.category-list a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('data-cat') === category) {
      a.classList.add('active');
    }
  });

  // Switch to catalogue view if not already there
  switchView('catalogue');
  renderCatalogue();
}

// Render Catalogue Table (Exp 3)
function renderCatalogue() {
  const container = document.getElementById('catalogueTableBody');
  if (!container) return;

  const filteredBooks = storeData.activeCategory === 'ALL'
    ? storeData.books
    : storeData.books.filter(b => b.dept === storeData.activeCategory);

  if (filteredBooks.length === 0) {
    container.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 25px; color:#64748b;">No books found in this category.</td></tr>`;
    return;
  }

  container.innerHTML = filteredBooks.map(book => `
    <tr class="book-row">
      <td class="dept-col">${book.dept}</td>
      <td class="cover-col">
        <img class="cover" src="${book.cover}" alt="${book.title}">
      </td>
      <td class="details-col">
        <span class="book-name">Book: ${book.title}</span><br>
        <strong>Author:</strong> ${book.author}<br>
        <strong>Publication:</strong> ${book.publisher}
      </td>
      <td class="price-col">&#8377;${book.price}</td>
      <td class="action-col">
        <button class="cart-btn" onclick="addToCart(${book.id})">Add to cart</button>
      </td>
    </tr>
  `).join('');
}

// Add Item to Cart
function addToCart(bookId) {
  const book = storeData.books.find(b => b.id === bookId);
  if (!book) return;

  const existing = storeData.cart.find(item => item.id === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    storeData.cart.push({
      id: book.id,
      dept: book.dept,
      title: book.title,
      price: book.price,
      qty: 1
    });
  }

  renderCart();
  updateCartBadge();
  showToast(`Added "${book.title}" to cart!`);
}

// Render Shopping Cart Table (Exp 4)
function renderCart() {
  const tbody = document.getElementById('cartTableBody');
  const tfoot = document.getElementById('cartTableFoot');
  if (!tbody || !tfoot) return;

  if (storeData.cart.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 30px; color:#64748b; font-size:16px;">Your shopping cart is currently empty.</td></tr>`;
    tfoot.innerHTML = '';
    return;
  }

  let grandTotal = 0;

  tbody.innerHTML = storeData.cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;

    return `
      <tr class="cart-row">
        <td class="dept-cell">${item.dept}</td>
        <td><strong>${item.title}</strong></td>
        <td class="center">&#8377;${item.price}</td>
        <td class="center">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">&minus;</button>
          <span style="display:inline-block; width: 26px; font-weight:bold;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">&plus;</button>
        </td>
        <td class="center">&#8377;${itemTotal}</td>
        <td class="center">
          <button class="remove-btn" onclick="removeFromCart(${item.id})">&times; Remove</button>
        </td>
      </tr>
    `;
  }).join('');

  tfoot.innerHTML = `
    <tr class="cart-row total-row">
      <td></td>
      <td style="font-weight: bold; font-size: 16px;">Total amount</td>
      <td class="center" style="font-weight: bold; font-size: 16px; color: #b91c1c;">- &#8377;${grandTotal}</td>
      <td colspan="3" style="text-align:right; padding-right: 15px;">
        <button class="reset-btn" style="padding: 5px 10px; font-size: 12px; margin-right: 5px;" onclick="clearCart()">Clear Cart</button>
      </td>
    </tr>
  `;
}

// Change Quantity
function changeQty(id, delta) {
  const item = storeData.cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    storeData.cart = storeData.cart.filter(i => i.id !== id);
  }

  renderCart();
  updateCartBadge();
}

// Remove from Cart
function removeFromCart(id) {
  storeData.cart = storeData.cart.filter(i => i.id !== id);
  renderCart();
  updateCartBadge();
  showToast('Item removed from cart.');
}

// Clear Cart
function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    storeData.cart = [];
    renderCart();
    updateCartBadge();
    showToast('Shopping cart cleared.');
  }
}

// Update Cart Badge Count
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = storeData.cart.reduce((sum, item) => sum + item.qty, 0);
  badge.textContent = count;
}

// Setup Event Listeners
function setupEventListeners() {
  // Menu navigation links
  document.querySelectorAll('.menu-table a[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.getAttribute('data-view');
      switchView(view);
      history.pushState(null, '', `#${view}`);
    });
  });

  // Sidebar Category Links
  document.querySelectorAll('.category-list a[data-cat]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.getAttribute('data-cat');
      filterCategory(cat);
    });
  });

  // Modal Open & Close
  const modal = document.getElementById('labModal');
  const openBtn = document.getElementById('openLabBtn');
  const closeBtn = document.getElementById('closeLabBtn');

  if (openBtn && modal) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
}

// ---------- JavaScript Form Validations (Exp 6 & Exp 7) ----------

// Name Validation (Exp 6)
function validateName() {
  const nameField = document.getElementById("regName");
  const err = document.getElementById("regNameError");
  const val = nameField.value;
  const onlyAlphabets = /^[A-Za-z ]+$/;

  if (val.trim() === "") {
    err.textContent = "Name cannot be empty.";
    nameField.className = "bad";
    return false;
  } else if (!onlyAlphabets.test(val)) {
    err.textContent = "Name should contain alphabets only.";
    nameField.className = "bad";
    return false;
  } else if (val.trim().length < 6) {
    err.textContent = "Name must be at least 6 characters long.";
    nameField.className = "bad";
    return false;
  } else {
    err.textContent = "";
    nameField.className = "good";
    return true;
  }
}

// Password Validation (Exp 6)
function validatePassword() {
  const passField = document.getElementById("regPassword");
  const err = document.getElementById("regPassError");
  const val = passField.value;

  if (val === "") {
    err.textContent = "Password cannot be empty.";
    passField.className = "bad";
    return false;
  } else if (val.length < 6) {
    err.textContent = "Password must be at least 6 characters long.";
    passField.className = "bad";
    return false;
  } else {
    err.textContent = "";
    passField.className = "good";
    return true;
  }
}

// Email Validation (Exp 7)
function validateEmail() {
  const emailField = document.getElementById("regEmail");
  const err = document.getElementById("regEmailError");
  const val = emailField.value;
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;

  if (val.trim() === "") {
    err.textContent = "E-mail ID cannot be empty.";
    emailField.className = "bad";
    return false;
  } else if (!pattern.test(val)) {
    err.textContent = "Invalid E-mail ID. Use the format name@domain.com";
    emailField.className = "bad";
    return false;
  } else {
    err.textContent = "";
    emailField.className = "good";
    return true;
  }
}

// Phone Validation (Exp 7)
function validatePhone() {
  const phoneField = document.getElementById("regPhone");
  const err = document.getElementById("regPhoneError");
  const val = phoneField.value;
  const digitsOnly = /^[0-9]+$/;

  if (val.trim() === "") {
    err.textContent = "Phone number cannot be empty.";
    phoneField.className = "bad";
    return false;
  } else if (!digitsOnly.test(val)) {
    err.textContent = "Phone number should contain digits only.";
    phoneField.className = "bad";
    return false;
  } else if (val.length !== 10) {
    err.textContent = "Phone number must contain exactly 10 digits.";
    phoneField.className = "bad";
    return false;
  } else {
    err.textContent = "";
    phoneField.className = "good";
    return true;
  }
}

// Handle Registration Submit
function handleRegistrationSubmit(e) {
  e.preventDefault();

  const isNameOk = validateName();
  const isPassOk = validatePassword();
  const isEmailOk = validateEmail();
  const isPhoneOk = validatePhone();

  if (isNameOk && isPassOk && isEmailOk && isPhoneOk) {
    const nameVal = document.getElementById("regName").value;
    alert(`Registration Successful for ${nameVal}!\nYou can now log in.`);
    showToast("Registration Successful! Welcome to Online Store.");
    
    // Switch to login page
    document.getElementById("loginUsername").value = nameVal;
    switchView('login');
    return true;
  }
  return false;
}

// Handle Login Submit
function handleLoginSubmit(e) {
  e.preventDefault();
  const user = document.getElementById("loginUsername").value.trim();
  const pass = document.getElementById("loginPassword").value;

  if (!user || !pass) {
    alert("Please enter both User Name and Password.");
    return false;
  }

  alert(`Welcome back, ${user}! You have successfully logged in to Online Store.`);
  showToast(`Logged in as ${user}`);
  switchView('catalogue');
  return true;
}

// Handle Checkout
function proceedToCheckout() {
  if (storeData.cart.length === 0) {
    alert("Your cart is empty! Add books from the catalogue first.");
    return;
  }
  const total = storeData.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  alert(`Thank you for choosing GL Bajaj Online Store!\n\nYour order total is: ₹${total}\nOrder confirmed for instant dispatch.`);
  storeData.cart = [];
  renderCart();
  updateCartBadge();
  switchView('home');
}

// Show Toast Notification
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.textContent = message;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 2800);
}
