let slide = document.querySelectorAll('div.slide');

for (let i in slide) {
    document.querySelector('#next').onclick = function() {
      slide[i].nextSibling.display = 'block';
            slide[i].style.display = 'none';
    };
    
        document.querySelector('#previous').onclick = function() {
      slide[i].previousSibling.display = 'block';
                slide[i].style.display = 'none';
    };
}
