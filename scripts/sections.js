// Ophalen van alle elementen met de class animate
const allSections = document.querySelectorAll('.animate');

// De Requirements om de class er uiteindelijk op te laten zetten:
// rootMargin -> vanaf 20px gaat JS checken
// treshold -> de hoeveelheid van het item dat in beeld moet zijn om getriggerd te worden
const options = {
  rootMargin: '20px',
  treshold: 0.5,
};

// callback functie wordt uitgevoerd wanneer het element in of uit beeld gaat
function callbackFunction(entries) {
  // over alle elementen heenlopen
  entries.forEach((entry) => {
    // checken of het element in beeld is
    if (entry.intersectionRatio > 0) {
      // class toevoegen zodra deze in beeld is
      entry.target.classList.add('fade');
    }
  });
}

const observer = new IntersectionObserver(callbackFunction, options);

// over alle elementen heenlopen
allSections.forEach((item) => {
  // het element observeren
  observer.observe(item);
});
