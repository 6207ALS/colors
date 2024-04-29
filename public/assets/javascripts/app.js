import Controller from './mvc/controller.js';
import Model from './mvc/model.js';
import View from './mvc/view.js';

function removeImg(e) {
	e.target.remove();
}

document.addEventListener("DOMContentLoaded", () => {
	new Controller(new Model(), new View());
});