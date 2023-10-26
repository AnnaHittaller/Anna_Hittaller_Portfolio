const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".fa-times");
const shadow = document.querySelector(".shadow");

window.onload = () => {
	for (let i = 0; i < gallery.length; i++) {
		let newIndex = i;
		const prevBtn = previewBox.querySelector(".prev");
		const nextBtn = previewBox.querySelector(".next");

		function checkIfLastSlide() {
			nextBtn.style.display = "block";
			prevBtn.style.display = "block";
			if (newIndex == 0) {
				prevBtn.style.display = "none";
			}
			if (newIndex >= gallery.length - 1) {
				nextBtn.style.display = "none";
			}
		}

		gallery[i].onclick = () => {
			function preview() {
				let selectedImgUrl = gallery[newIndex].querySelector("img").src;
				previewImg.src = selectedImgUrl;
				checkIfLastSlide();
			}

			prevBtn.onclick = () => {
				newIndex--;
				preview();
			};

			nextBtn.onclick = () => {
				newIndex++;
				preview();
			};

			preview();
			shadow.style.display = "block";
			previewBox.classList.add("show");
			document.querySelector("body").style.overflow = "hidden";

			function closeGallery() {
				newIndex = i;
				previewBox.classList.remove("show");
				shadow.style.display = "none";
				document.querySelector("body").style.overflow = "auto";
			}

			closeIcon.onclick = () => {
				closeGallery();
			};

			// to make it possible to close the lightbox when clicking anywhere outside of it
			document.addEventListener("click", (e) => {
				let isInGallery = Array.from(gallery).some((element) =>
					element.contains(e.target)
				);
				if (!previewBox.contains(e.target) && !isInGallery) {
					closeGallery();
				}
			});
		};
	}
};
