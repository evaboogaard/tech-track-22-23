const mapShaper = document.querySelector('#map-shaper');
const allMapElements = document.getElementsByClassName('square');
const artistElement = document.querySelector('#artists');

function changeMapShape() {
  for (let elem of allMapElements) {
    elem.classList.toggle('circle');
  }

  artistElement.classList.toggle('curve');
  mapShaper.classList.toggle('uncircle');
}

mapShaper.addEventListener('click', changeMapShape);
