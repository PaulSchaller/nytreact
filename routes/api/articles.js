
module.exports = function(app) {
	const articlesController = require("../../controllers/articlesController");
	// Matches with "/api/books"
	app.route("/api/articles")
	  .get(articlesController.findAll)
	  .post(articlesController.create);
	// Matches with "/api/books/:id"
	app
	  .route("/api/articles/:id")
	  .put(articlesController.update)
	  .delete(articlesController.remove);
};