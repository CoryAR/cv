let popOut = document.querySelectorAll('#pop-outs a');

for (let i in popOut) {
  popOut[i].onclick = function() {
  document.querySelectorAll('div.popouts').forEach(function(a){
  a.remove()
  });
      
    let pos = popOut[i].getBoundingClientRect();
    let div = document.createElement('div');
    div.className = 'popouts';
    div.innerHTML = 'This is a pop-out.<br><div id="close" style="text-align: right; font-style: italic">Close</div>';
    div.style.top = pos.top + popOut[i].offsetHeight + 'px';
    div.style.left = pos.left + 'px';
    div.style.display = 'block';
    div.style.maxHeight = '100px';'
    div.style.transition = 'max-height 0.25s ease-in';
    document.body.appendChild(div);
  };
}

  document.querySelector('#close').forEach(function(a){
  a.parentNode.remove()
  });
