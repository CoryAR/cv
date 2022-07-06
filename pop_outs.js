let popOut = document.querySelectorAll('#pop-outs a');

for (let i in popOut) {
  popOut[i].onclick = function() {
  document.querySelectorAll('div.popouts').forEach(function(a){
  a.remove()
  });
      
    let pos = popOut[i].getBoundingClientRect();
    let div = document.createElement('div');
    div.className = 'popouts';
    div.innerHTML = 'This is a pop-out.<br><div id="close" style="text-align: right; font-style: italic; cursor: pointer">Close</div>';
    div.style.top = pos.top + window.scrollY + 'px';
    div.style.left = pos.left + 'px';
    div.style.display = 'block';
    document.body.appendChild(div);
    
  document.querySelector('#close').onclick = function() {
   document.querySelector('#close').parentNode.remove();
  };

  };
}
