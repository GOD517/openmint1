//================ Mobile main menu open-close

(function() {

var menuOpenBtn = document.querySelector(".nav-btn-open");
var menuCloseBtn = document.querySelector(".nav-btn-close");
var modalMenu = document.querySelector(".main-nav ul");
var mainNav = document.querySelector(".main-nav");
var overlay = document.querySelector('.modal-overlay');

function openMenu(event) {
	event.preventDefault();

	if (modalMenu.classList.contains("main-nav-open")) {
		closeMenu();
	} else {
		modalMenu.classList.add("main-nav-open");
		menuOpenBtn.classList.add("nav-btn-open-hide");
		menuCloseBtn.classList.add("nav-btn-close-show");
		overlay.classList.add('modal-overlay-show');
		// mainNav.classList.add("main-nav-hide");
	}
}

function closeMenu(event) {
	event.preventDefault();

	modalMenu.classList.remove("main-nav-open");
	menuCloseBtn.classList.remove("nav-btn-close-show");
	menuOpenBtn.classList.remove("nav-btn-open-hide");
	overlay.classList.remove('modal-overlay-show');
	// mainNav.classList.remove("main-nav-hide");
}

menuOpenBtn.addEventListener("click", openMenu);

menuCloseBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);


})();