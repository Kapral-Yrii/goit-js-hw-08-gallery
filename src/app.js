const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const refs = {
  galleryList: document.querySelector(".gallery"),
  lightbox: document.querySelector(".lightbox"),
  lightboxOverlay: document.querySelector(".lightbox__overlay"),
  lightboxImage: document.querySelector(".lightbox__image"),
  btnClose: document.querySelector(".lightbox__button")
}


function createGallery() {
  const markup = galleryItems.reduce((string, e) =>
    string + `<li class="gallery__item">
                <a class="gallery__link" href="${e.original}">
                  <img class="gallery__image" src="${e.preview}" data-source="${e.original}" alt="${e.description}"/>
                </a>
              </li> `, ""
  );
  refs.galleryList.innerHTML = markup
}
createGallery()

function modalClose() {
  refs.lightbox.classList.remove("is-open")
  refs.lightboxImage.src = ""
  refs.lightboxImage.alt = ""
}

refs.galleryList.addEventListener('click', () => {
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  refs.lightbox.classList.add("is-open")
  refs.lightboxImage.src = event.target.dataset.source
  refs.lightboxImage.alt = event.target.alt
})

refs.btnClose.addEventListener('click', modalClose)

refs.lightboxOverlay.addEventListener('click', (event) => { 
  if (event.target === event.currentTarget) {
    modalClose()
  }
})

refs.galleryItems = document.querySelectorAll(".gallery__item")

window.addEventListener('keydown', (event) => {
  let index = 0
  if (event.key === "Escape") {
    modalClose()
  } else {
    galleryItems.forEach((e) => {
      if (e.original === refs.lightboxImage.src) {
        index = galleryItems.indexOf(e)
      }
    })
    if (event.key === "ArrowRight") {
      refs.lightboxImage.src = galleryItems[index + 1].original
      refs.lightboxImage.alt = galleryItems[index + 1].description
    } if (event.key === "ArrowLeft") {
      refs.lightboxImage.src = galleryItems[index - 1].original
      refs.lightboxImage.alt = galleryItems[index - 1].description
    }
  }
})

