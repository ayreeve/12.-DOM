/*jslint devel: true*/

//window.location = 'http://www.google.pl';

var button = document.getElementsByClassName('button');

for (var i = 1; i <= button.length; i++) {
    alert(button[0].innerText);
    alert(button[1].innerText);
    alert(button[2].innerText);
    break
}
