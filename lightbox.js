const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".fa-times");
const shadow = document.querySelector(".shadow");

window.onload = () => {
	for (let i = 0; i < gallery.length; i++) {
		let newIndex = i;
		gallery[i].onclick = () => {
			console.log(newIndex);
			function preview() {
				let selectedImgUrl = gallery[newIndex].querySelector("img").src;
				previewImg.src = selectedImgUrl;
			}

			const prevBtn = previewBox.querySelector(".prev");
			const nextBtn = previewBox.querySelector(".next");

			if (newIndex == 0) {
				prevBtn.style.display = "none";
			}
			if (newIndex >= gallery.length - 1) {
				nextBtn.style.display = "none";
			}

			prevBtn.onclick = () => {
				newIndex--;
				console.log(newIndex, "prev");
				if (newIndex == 0) {
					preview();
					prevBtn.style.display = "none";
					nextBtn.style.display = "block";
				} else {
					preview();
					prevBtn.style.display = "block";
					nextBtn.style.display = "block";
				}
			};

			nextBtn.onclick = () => {
				newIndex++;
				console.log(newIndex, "next");
				if (newIndex >= gallery.length - 1) {
					preview();
					nextBtn.style.display = "none";
					prevBtn.style.display = "block";
				} else {
					preview();
					nextBtn.style.display = "block";
					prevBtn.style.display = "block";
				}
			};

			preview();
			shadow.style.display = "block";
			previewBox.classList.add("show");
			document.querySelector("body").style.overflow = "hidden";

			closeIcon.onclick = () => {
				newIndex = i;
				prevBtn.style.display = "block";
				nextBtn.style.display = "block";
				previewBox.classList.remove("show");
				shadow.style.display = "none";
				document.querySelector("body").style.overflow = "auto";
			};
		};
	}
};
