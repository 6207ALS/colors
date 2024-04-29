class Model {
	constructor() {
		this.color = {};
		this.ids = [];
	}

	async retrieveIds(color) {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", `http://localhost:3000/images/${color.h}/${color.s}/${color.l}`);

			request.addEventListener("load", () => {
				resolve(JSON.parse(request.response));
			});

			request.send()
		});
	}


	async retrieveImages() {
		return new Promise((resolve, reject) => {
			let promises = [];

			this.ids.forEach(id => {
				promises.push()
			}); 
		});
	}
}

export default Model;