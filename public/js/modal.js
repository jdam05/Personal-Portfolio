document.addEventListener("DOMContentLoaded", function () {
	let modalTriggers = document.querySelectorAll(".enlargeModal");
	let modal = document.getElementById("myModal");
	let modalImg = document.getElementById("enlargedImg");
	let closeButton = document.querySelector(".close");

	modalTriggers.forEach(function (trigger) {
		trigger.addEventListener("click", function (event) {
			openModal(event, trigger.src); // Pass the source of the clicked image
		});
	});

	function openModal(event, src) {
		modalImg.src = event.target.src;
		modal.style.display = "block";
	}

	function closeModal() {
		modal.style.display = "none";
	}

	closeButton.addEventListener("click", function () {
		closeModal();
	});

	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			closeModal();
		}
	});
});
