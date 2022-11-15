console.log('what is up my duddessss');

const mapShaper = document.querySelector('#map-shaper');
const allMapElements = document.getElementsByClassName('square');

console.log(allMapElements);

function changeMapShape() {
  for (let elem of allMapElements) {
    elem.classList.toggle('circle');
  }

  mapShaper.classList.toggle('uncircle');
}

mapShaper.addEventListener('click', changeMapShape);
