/*jslint devel: true*/

/* iterating over the DOM */

var button = document.getElementsByClassName('button');

for (var i = 1; i <= button.length; i++) {
    alert(button[0].innerText);
    alert(button[1].innerText);
    alert(button[2].innerText);
    break
}

/* events */

var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function () {
    list.innerHTML += '<li>item' + ' ' + document.getElementsByTagName('li').length + '</li>'
});
