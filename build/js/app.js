$(document).ready(function () {

	// Toggle tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// cart
	cartToggles();

	// enable ekko lightbox
	lightbox();

	whisperFocus();

});

// ———————————————————————————
// new cart design toggles
// ———————————————————————————
function cartToggles() {
	$("#cart-toggle-delivery-address-cb").click(function () {
		$("#cart-toggle-delivery-address").slideToggle();
	});
	$("#cart-toggle-person-rb").click(function () {
		$("#cart-toggle-person").slideDown();
		$("#cart-toggle-company").slideUp();
	});
	$("#cart-toggle-company-rb").click(function () {
		$("#cart-toggle-company").slideDown();
		$("#cart-toggle-person").slideUp();
	});
}

function lightbox() {
	$(document).on('click', '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
}

function whisperFocus() {
	$("#search-input").focus(function () {
		// console.log("here");
		$(".tt-menu").addClass("show");
		var anchor = document.querySelector('#search-input');
		// smoothScroll.animateScroll(anchor);
	});
	$("#search-input").blur(function () {
		if ($("#search-input").val().length == 0) {
			$(".tt-menu").removeClass("show");
		};
		// $("i.icon-search").removeClass("anim");
	});
	$("#search-input").keyup(function (e) {
		if (e.keyCode === 27) {
			$(".tt-menu").removeClass("show");
			$("#search-input").blur();
		}
	});
	// $("#search-input").keypress(function () {
	// 	$("i.icon-search").addClass("anim");
	// });
}