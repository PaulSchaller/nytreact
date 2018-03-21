
module.exports = function(app) {
	const articlesController = require("../../controllers/articlesController");
	// Matches with "/api/books"
	app.route("/")
	  .get(articlesController.findAll)
	  .post(articlesController.create);
	// Matches with "/api/books/:id"
	app
	  .route("/:id")
	  .delete(articlesController.remove);
};