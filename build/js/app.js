$(document).ready(function () {

	// Toggle tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// cart
	cartToggles();

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