
/**
 * Responsive navigation handler
 * The functions below are responsible for the actions
 * related to the actions performed by the navigation bar
 * at certain sizes
 *
 */

var menuButton = document.getElementById('menu-button');

function openMenu() {
  var navigation = document.getElementById('navigation');
  navigation.className = 'navigation open';
}

menuButton.onclick = function() {
  openMenu();
}

function closeMenu() {
  var navigation = document.getElementById('navigation');
  navigation.className = 'navigation closed';
}

var closeMenuButton = document.getElementById('close-menu-button');
closeMenuButton.onclick = function() {
  closeMenu();
}

var siteNav = document.getElementsByClassName('list--site-navigation');
var siteNavElements = siteNav[0].children;
var navigation = document.getElementById('navigation');

if (navigation.style.width < 600) {
  for (var i = 0; i < siteNavElements.length; i++) {
    siteNavElements[i].onclick = function() {
      // delays the collapse of the navigation bar slightly
      setTimeout( function () {
        closeMenu();
      }, 300);
    }
  }
}
