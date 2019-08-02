$(document).ready(function () {

	// HP Bags
	bagsInteractive();

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