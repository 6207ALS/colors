class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		this.init();
	}

	init() {
		this.bindEvents();
	}
	
	bindEvents() {
		let form = document.querySelector("form");
		form.addEventListener("submit", this.handleFormSubmit.bind(this));
	}

	async handleFormSubmit(e) {
		e.preventDefault();

		let h = document.querySelector("#hue-value").value;
		let s = document.querySelector("#saturation-value").value;
		let l = document.querySelector("#lightness-value").value;

		let color = { h, s, l };

		this.model.ids = await this.model.retrieveIds(color);
		this.view.displayImages(this.model.ids.slice(0, 100));
	}
}

export default Controller;