let slide = document.querySelectorAll('div.slide');

    if (slide.style.display === 'block') {
    document.querySelector('#next').onclick = function() {
      slide.nextSibling.style.display = 'block';
            slide.style.display = 'none';
    };
    
        document.querySelector('#previous').onclick = function() {
      slide.previousSibling.style.display = 'block';
      slide.style.display = 'none';
    };
    }
