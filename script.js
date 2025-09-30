const modals = document.querySelectorAll(".modal")
const openButtons = document.querySelectorAll(".open-modal")
const closeButtons = document.querySelectorAll(".close")

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal")
    document.getElementById(modalId).style.display = "flex"
  })
})

closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none"
  })
})

window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
})

const tabButtons = document.querySelectorAll(".tab-button")
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.closest(".modal-content")
    const tabId = button.getAttribute("data-tab")
    parent.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"))
    parent.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"))
    button.classList.add("active")
    parent.querySelector(`#${tabId}`).classList.add("active")
  })
})
