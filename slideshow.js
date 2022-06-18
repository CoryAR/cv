let slide = document.querySelectorAll('div.slide');

for (let i in slide) {
  if(slide[i].style.visibility === 'visible') {
    document.querySelector('#next').onclick = function() {
      slide[i].style.visibility = 'hiddden';
      slide[i].nextSibling.visibility = 'visible';
    };
  }
}
