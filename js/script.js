const img = document.querySelector("#img");
const input = document.querySelector("#phone");

let KGpatterPhone = /^\+996$/;
let KGpatterPhoneFull = /^\+996\s\d{3}\d{2}-\d{2}-\d{2}$/;
let RUpatterPhone = /^\+7$/;
let UZpatterPhone = /^\+998$/;
let UApatterPhone = /^\+380$/;

input.oninput = function () {
	if (KGpatterPhone.test(input.value)) {
		img.src = 'img/img-1.jpg';
	} else if (KGpatterPhoneFull.test(input.value)) {
		console.log('');
	} else if (RUpatterPhone.test(input.value)) {
		img.src = 'img/img-2.jpg';
	} else if (UZpatterPhone.test(input.value)) {
		img.src = "img/img-3.png";
    } else if (UApatterPhone.test(input.value)) {
		img.src = "img/img-4.png";
    };
};