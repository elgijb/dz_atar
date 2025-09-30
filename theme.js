let currentTheme = localStorage.getItem("theme") || "light"

function applyTheme() {
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode")
    const btn = document.getElementById("themeBtn")
    if (btn) btn.textContent = "☀️"
  } else {
    document.body.classList.remove("dark-mode")
    const btn = document.getElementById("themeBtn")
    if (btn) btn.textContent = "🌙"
  }
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark"
  localStorage.setItem("theme", currentTheme)
  applyTheme()
}
