$(document).ready(function () {

	// Toggle tooltips
	$('[data-toggle="tooltip"]').tooltip();

	// HP Bags
	bagsInteractive();

	// cart
	cartToggles();

});

// ———————————————————————————
// "Interactive" accordion
// ———————————————————————————
function bagsInteractive() {
	// accordion for bag on front page
	$('.collapse').collapse({
		toggle: false,
		parent: '#accordion'
	});

	// always open tab in accordion after clicking on icon
	$(".poi").mouseover(function () {
		var myClass = $(this).attr("class");
		myClass = myClass.replace('poi ', '');
		$("#accordion #poi-text-" + myClass).collapse("show");
		// console.log(myClass);
	});
	$('#accordion').on('hide.bs.collapse', function () {
		var id = $('#accordion .show').attr("id");
		$("a.poi").removeClass("active");
	})
	$('#accordion').on('shown.bs.collapse', function () {
		var myId = $('#accordion .show').attr("id");
		var myClass = myId.replace('poi-text-', '');
		$("a." + myClass).addClass("active");
	})
}

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