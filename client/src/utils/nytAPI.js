import axios from "axios";

const nytAPI = {
  // Query NYT API
  searchNYT: function(topic, startYear, endYear) {
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },
  // Retrieves saved articles from the db
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/articles", articleObj);
  },
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  updateArticle: function(id) {
    return axios.put(`/api/articles/${id}`);
  }
};

export default nytAPI;