$(document).ready(function () {
	$("#contactForm").submit(function (event) {
		event.preventDefault(); // Prevent default form submission behavior

		// Display a toast message
		showToast("Thank you, your message was sent successfully!", "success");
		clearFormFields();
	});

	// Display a toast message
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
});


