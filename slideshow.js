let slide = document.querySelectorAll('div.slide');

  if(slide.style.display === 'block') {
    document.querySelector('#next').onclick = function() {
      slide.style.display = 'none';
      slide.nextSibling.display = 'block';
    };
    
        document.querySelector('#previous').onclick = function() {
      slide.style.display = 'none';
      slide.previousSibling.display = 'block';
    };
  }
