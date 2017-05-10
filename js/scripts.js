/*jslint devel: true*/

/* iterating over the DOM */

var button = document.getElementsByClassName('button');

for (var i = 0; i < button.length; i++) {
    alert(button[i].innerText);
}

/* events */

var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function () {
    list.innerHTML += '<li>item' + ' ' + document.getElementsByTagName('li').length + '</li>'
});
