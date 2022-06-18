let slide = document.querySelectorAll('div.slide');

for (let i in slide) {
  if(slide[i].style.display === 'block') {
    document.querySelector('#next').onclick = function() {
      slide[i].style.display = 'none';
      slide[i].nextSibling.visibility = 'block';
    };
  }
}
