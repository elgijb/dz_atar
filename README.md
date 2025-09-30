# 📖 Travel World Website

A multilingual travel website built with **HTML, CSS, and JavaScript**.
It features:

* 🌍 **Three languages support** (Hebrew, Russian, English)
* 📰 **Newspaper-like design** with elegant fonts
* 🌓 **Light/Dark theme toggle** (saves preference)
* 👤 **User system** with registration, login, and account saving in browser
* 📄 **Multiple pages** (Home, Blog, Contacts, Account)
* 🖼️ **Travel articles** with real Wikipedia content and images
* 📱 **Responsive layout** (works on desktop & mobile)

---

## 🚀 Features

* **Home Page** – Intro + articles about Jerusalem & Tel Aviv
* **Blog** – Extended articles about Rome, Barcelona, and Kyoto
* **Contacts** – Contact form with multilingual placeholders
* **Account Page** – Registration and login with email, password, and phone number
* **Language Switcher** – Instantly changes texts and placeholders
* **Theme Switcher** – Light/Dark mode saved in localStorage
* **Fonts** – Uses *Merriweather* (headings) and *Noto Serif* (body), supporting all 3 languages

---

## 📂 Project Structure

```
/travel-site
  ├── index.html       # Home page
  ├── blog.html        # Blog with travel articles
  ├── contacts.html    # Contact form
  ├── account.html     # Registration/Login page
  ├── style.css        # Styling (dark/light themes, fonts)
  ├── lang.js          # Multilingual texts
  ├── theme.js         # Theme switching logic
  ├── script.js        # Page scripts (menus, modals, etc.)
  └── README.md        # Project documentation
```

---

## 🛠️ Installation & Run

You don’t need any server — this project runs locally in any browser.

### Option 1 – Open directly

1. Download the project folder
2. Open `index.html` in your browser

### Option 2 – Live Server (VS Code)

1. Install **[VS Code](https://code.visualstudio.com/)**
2. Add the extension **Live Server**
3. Open the folder in VS Code
4. Right-click `index.html` → **Open with Live Server**

### Option 3 – Python Local Server

```bash
cd travel-site
python3 -m http.server
```

Then visit: `http://localhost:8000`

---

## 🌐 Demo Content Sources

* [Jerusalem on Wikipedia](https://en.wikipedia.org/wiki/Jerusalem)
* [Tel Aviv on Wikipedia](https://en.wikipedia.org/wiki/Tel_Aviv)
* [Rome on Wikipedia](https://en.wikipedia.org/wiki/Rome)
* [Barcelona on Wikipedia](https://en.wikipedia.org/wiki/Barcelona)
* [Kyoto on Wikipedia](https://en.wikipedia.org/wiki/Kyoto)

Images are also taken from **Wikimedia Commons**.
