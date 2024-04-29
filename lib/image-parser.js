const fs = require("fs");

class ImageParser {
	constructor() {
		this.color = {};
		this.ids = [];
	}

	async filterIds(color) {
		this.color = color;
		this.ids = [];

		let files = await this.retrieveFiles();
		await this.readFiles(files);
	}

	retrieveFiles() {
		return new Promise((resolve, reject) => {
			fs.readdir("artic-api-data/json/images", (err, files) => {
				resolve(files);
			});
		});
	}

	readFiles(files) {
		let promises = [];
		files.forEach(file => promises.push(this.readFile(file)));
		return Promise.allSettled(promises);
	}

	readFile(file) {
		return new Promise((resolve, reject) => {
			fs.readFile(`artic-api-data/json/images/${file}`, "utf8" , (err, content) => {
				if (this.hasSimilarColor(content, 50)) {
					this.ids.push(JSON.parse(content).id);
					resolve(content);
				} else {
					reject(content);
				}
			});
		});
	}

	hasSimilarColor(content, range) {
		if (!content) return false;
		
		content = JSON.parse(content);
	
		if (!content.color) {
			return false;
		} else {
			let contentColor = content.color;
			return (Math.abs(+contentColor.h - this.color.h) <= range &&
							Math.abs(+contentColor.l - this.color.l) <= range &&
							Math.abs(+contentColor.s - this.color.s) <= range);
		}
	}
}

module.exports = ImageParser;