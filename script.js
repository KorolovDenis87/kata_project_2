const openButton = document.getElementById("openButton")
const closeButton = document.getElementById("closeButton")
const aside = document.getElementById("myAside")

openButton.addEventListener("click", () => {
  aside.style.display = "block"
})

closeButton.addEventListener("click", () => {
  if (window.innerWidth <= 1120) {
    aside.style.display = "none"
  }
})

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})


const toggleButton = document.querySelector(".brand__show-hide")
const hiddenCards = document.querySelectorAll(".hidden-card")

let isExpanded = false

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded
  if (isExpanded) {
    hiddenCards.forEach((card) => {
      card.style.display = "flex"
    })
    toggleButton.textContent = "Скрыть"
    toggleButton.classList.add("expanded")
  } else {
    hiddenCards.forEach((card) => {
      card.style.display = "none"
    })
    toggleButton.textContent = "Показать все"
    toggleButton.classList.remove("expanded")
  }
})

const asideMenu = document.getElementById("myAside")

if (asideMenu) {
  function checkWindowSize() {
    if (window.innerWidth >= 1120) {
      asideMenu.style.display = "grid"
    } else {
      asideMenu.style.display = "none"
    }
  }

  checkWindowSize()
  window.addEventListener("resize", checkWindowSize)
} else {
  console.error("Элемент с id 'myAside' не найден на странице.")
}


