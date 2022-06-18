let slide = document.querySelectorAll('div.slide');

  if(slide.style.display === 'block') {
    document.querySelector('#next').onclick = function() {
      slide.style.display = 'none';
      slide.nextSibling.visibility = 'block';
    };
  }
