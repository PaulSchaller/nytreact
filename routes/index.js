const path = require("path");
const apiRoutes = require("./api");

module.exports = function(app) {
	// API Routes
	app.use("/api", apiRoutes);
	// If no API routes are hit, send the React app
	app.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
};