$(document).ready(function () {
	$("#contactForm").submit(function (event) {
		event.preventDefault(); // Prevent default form submission behavior
		$(this).get(0).submit(); // Submit the form using the default action
	});

	// Display a toast message **************** div needs to be added to html
	function showToast(message, type) {
		var toast = $('<div class="toast ' + type + '">' + message + "</div>");
		$("#toastContainer").append(toast);
		setTimeout(function () {
			toast.fadeOut(function () {
				$(this).remove();
			});
		}, 3000);
	}

	// Clear form fields
	function clearFormFields() {
		$("#contactForm")[0].reset();
	}

	// Intercept the default form submission behavior
	var form = $("#contactForm")[0];
	form.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent default form submission
		form.removeEventListener("submit", arguments.callee); // Remove this listener
		showToast("Form submitted successfully", "success");
		clearFormFields();
	});
});

// toast styling needs to be added
// form.js script needs to be added to home page html *****************
