let add_to_do = document.querySelector('#add-to-do');

add_to_do.onclick = function() {
    let to_do_prompt = prompt('Name of Your To-Do');

    if (to_do_prompt !== null || undefined || '') {
        let to_do_div = document.createElement('div');
        to_do_div.className = 'to-do-div';
        to_do_div.innerHTML = '<label><input type="checkbox" class="to-do" style="vertical-align: middle"> ' + to_do_prompt + '</label> (<a href="javascript: void(0)" class="remove-to-do">Remove Item</a>)';
        document.querySelector('#to-do-list #contents').appendChild(to_do_div);
        localStorage.setItem('to-do-list', document.querySelector('#to-do-list #contents').innerHTML);
        localStorage.removeItem('remove-to-do-' + to_do_prompt);
    }
};

if (localStorage.getItem('to-do-list') !== null) {
    document.querySelector('#to-do-list #contents').innerHTML = localStorage.getItem('to-do-list');
}

let remove_to_do = document.querySelectorAll('a.remove-to-do');

for (let i = 0; i < remove_to_do.length; i++) {
    remove_to_do[i].onclick = function() {
        this.parentNode.style.display = 'none';
        localStorage.setItem('remove-to-do-' + this.previousElementSibling.innerText.trim(), true);
    };

    if (localStorage.getItem('remove-to-do-' + remove_to_do[i].previousElementSibling.innerText.trim()) !== null && localStorage.getItem('remove-to-do-' + remove_to_do[i].previousElementSibling.innerText.trim()) === 'true') {
        remove_to_do[i].parentNode.style.display = 'none';
    } else {
        remove_to_do[0].parentNode.style.display = 'block';
    }
}

let to_do = document.querySelectorAll('label');

for (let i = 0; i < to_do.length; i++) {
    to_do[i].onclick = function() {
        if (this.children[0].checked === true) {
            localStorage.setItem('to-do-' + to_do[i].innerText.trim(), to_do[i].innerText.trim());
        } else {
            localStorage.removeItem('to-do-' + to_do[i].innerText.trim());
        }
    };

    if (localStorage.getItem('to-do-' + to_do[i].innerText.trim()) !== null && localStorage.getItem('to-do-' + to_do[i].innerText.trim()) === to_do[i].innerText.trim()) {
        to_do[i].children[0].checked = true;
    }
}
