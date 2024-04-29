class View {
	constructor() {
		this.templates = {};
		this.init();
	}

	init() {
		document.querySelectorAll("[data-type='template']").forEach(template => {
			this.templates[template.id] = Handlebars.compile(template.innerHTML);
		});

		document.querySelectorAll("[data-type='partial']").forEach(partial => {
			Handlebars.registerPartial(partial.id, partial.innerHTML);
		});
	}

	displayImages(ids) {
		let imageContainer = document.querySelector("#images-container");
		let imagesHTML = this.templates["images"]({ ids });

		imageContainer.innerHTML = "";
		imageContainer.insertAdjacentHTML("beforeend", imagesHTML);
	}
}

export default View;