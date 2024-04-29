const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const host = "localhost";
const port = 3000;
const router = require("./src/routes/routes.js");

const app = express();

app.use(morgan("common"));
app.use(cors());
app.use(router);

app.listen(port, host, () => {
	console.log(`Listening on port ${port} of ${host}...`);
})