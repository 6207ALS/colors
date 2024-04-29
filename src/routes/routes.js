const express = require("express");
const router = express.Router();
const ImageParser = require("../../lib/image-parser.js");

let imageParser = new ImageParser();

router.get("/images/:hue/:saturation/:lightness", async (req, res, next) => {
	let color = {
		h: +req.params.hue,
		s: +req.params.saturation,
		l: +req.params.lightness
	}

	await imageParser.filterIds(color);

	res.send(imageParser.ids);
});


module.exports = router;