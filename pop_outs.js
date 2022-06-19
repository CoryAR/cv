let popOut = document.querySelectorAll('#pop-outs a');

for (let i in popOut) {
  popOut[i].onclick = function() {
    let removePopouts = document.querySelectorAll('div.popouts');
    
    for (let x in removePopouts) {
      removePopouts[x].remove();
    }
    
    let pos = popOut[i].getBoundingClientRect();
    let div = document.createElement('div');
    div.className = 'popouts';
    div.innerHTML = 'This is a pop-out.';
    div.style.top = pos.top;
    div.style.left = pos.left;
    document.body.appendChild(div);
  };
}
