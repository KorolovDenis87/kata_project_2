import '../scss/style.scss'

console.log('Works!')

const openButton = document.getElementById('openButton')
const closeButton = document.getElementById('closeButton')
const aside = document.getElementById('myAside')
const overlay = document.getElementById('overlay')

if (openButton && aside && overlay) {
  openButton.addEventListener('click', () => {
    aside.style.display = 'grid'
    overlay.style.display = 'block'
  })
}

if (closeButton && aside && overlay) {
  closeButton.addEventListener('click', () => {
    if (window.innerWidth < 1120) {
      aside.style.display = 'none'
      overlay.style.display = 'none'
    }
  })
}

if (overlay && aside) {
  overlay.addEventListener('click', () => {
    if (window.innerWidth < 1120) {
      aside.style.display = 'none'
      overlay.style.display = 'none'
    }
  })
}

const brandSwiper = new Swiper('.brand__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.brand__pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.brand__button-next',
    prevEl: '.brand__button-prev'
  }
})

const techniqueSwiper = new Swiper('.technique__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.technique__pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.technique__button-next',
    prevEl: '.technique__button-prev'
  }
})

const priceSwiper = new Swiper('.price__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.price__pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.price__button-next',
    prevEl: '.price__button-prev'
  }
})

const toggleButton = document.querySelector('.brand__show-hide')
const hiddenCards = document.querySelectorAll('.hidden-card')

let isExpanded = false

toggleButton.addEventListener('click', () => {
  isExpanded = !isExpanded
  if (isExpanded) {
    hiddenCards.forEach((card) => {
      card.style.display = 'flex'
    })
    toggleButton.textContent = 'Скрыть'
    toggleButton.classList.add('expanded')
  } else {
    hiddenCards.forEach((card) => {
      card.style.display = 'none'
    })
    toggleButton.textContent = 'Показать все'
    toggleButton.classList.remove('expanded')
  }
})

const asideMenu = document.getElementById('myAside')

if (asideMenu && overlay) {
  function checkWindowSize() {
    if (window.innerWidth >= 1120) {
      asideMenu.style.display = 'grid'
      overlay.style.display = 'none'
    } else {
      asideMenu.style.display = 'none'
      overlay.style.display = 'none'
    }
  }

  checkWindowSize()
  window.addEventListener('resize', checkWindowSize)
} else {
  console.error("Элемент с id 'myAside' не найден на странице.")
}

const techniqueButton = document.querySelector('.technique__show-hide')
const hiddenTechniqueCards = document.querySelectorAll(
  '.technique__card--hidden'
)

let isTechniqueExpanded = false

if (techniqueButton) {
  techniqueButton.addEventListener('click', () => {
    isTechniqueExpanded = !isTechniqueExpanded

    hiddenTechniqueCards.forEach((card) => {
      card.classList.toggle('technique__card--opened', isTechniqueExpanded)
    })

    if (isTechniqueExpanded) {
      techniqueButton.textContent = 'Скрыть'
      techniqueButton.classList.add('expanded')
    } else {
      techniqueButton.textContent = 'Показать все'
      techniqueButton.classList.remove('expanded')
    }
  })
}
