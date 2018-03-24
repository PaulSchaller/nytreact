//javascript to handle the main page and component rendering
import React, { Component } from "react";
import Saved from "../../components/Saved";
import Search from "../../components/Search";
import Results from "../../components/Home";
import nytAPI from "../../utils/nytAPI";
import "./Main.css";

class Main extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    Articles: [],
    Saved: []
  };

  // When the component mounts, get a list of all saved articles and update this.state.saved
  componentDidMount() {
    this.loadSavedBooks()
  }

  // Method for getting saved articles (all articles) from the db
  loadSavedBooks = () => {
    nytAPI.getSavedArticles()
      .then((res) => {
        this.setState({ saved: res.data });
        console.log("loadBooks");
        console.log(this.state.saved);
      });
  }

  // A helper method for rendering one search results div for each article from the scrape
  renderArticles = () => {
    if (!this.state.articles) {
      return;
    }
    return this.state.articles.map(article => (
      <Results
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        date={article.pub_date}
        url={article.web_url}
        handleSaveButton={this.handleSaveButton}
      />
   ));
  }

  // A helper method for rendering one div for each saved article
  renderSaved = () => {
    if (!this.state.Saved) {
      console.log("Saved");
      return;
    }

    return this.state.Saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
      />
    ));
  }

  // handling user input before form is submitted and grabbed
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }
  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }
  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  //submit the form with the user topic choice and do a new york times search
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Getting NYT Articles");
    console.log("this.state.topic: ", this.state.topic);
    console.log("this.state.startYear: ", this.state.startYear);
    console.log("this.state.endYear: ", this.state.endYear);
    nytAPI.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
      .then((res) => {
        this.setState({ articles: res.data.response.docs });
        console.log("this.state.articles: ", this.state.articles);
      });
  }

   // add article to mongo db when save button is clicked
  handleSaveButton = (id) => {
    const findArticleByID = this.state.articles.find((el) => el._id === id);
    console.log("findArticleByID: ", findArticleByID);
    console.log("Here we are");
    const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
    console.log(newSave);
    nytAPI.saveArticle(newSave)
    .then(nytAPI.getSavedArticles());
    console.log(newSave);
    console.log("Have Fun");
    nytAPI.getSavedArticles();
    console.log("Have Fun");
  }

  // When delete button is clicked, remove article from db
  handleDeleteButton = (id) => {
    nytAPI.deleteArticle(id)
      .then(nytAPI.getSavedArticles());
  }

  //render the webpage
  render() {
    return (

      <div className="main-container">
        <div className="container">
          {/* Jumbotron */}
          <div className="jumbotron">
            <h1 className="text-center"><strong>New York Times Article Scrubber</strong></h1>
            <h2 className="text-center">Search for and annotate articles of interest.</h2>
          </div>
          {/* Search Form and Results Component */}
          <Search
            handleTopicChange={this.handleTopicChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderArticles={this.renderArticles}
          />
          {/* Saved Articles Component */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="" aria-hidden="true"></i> Saved Articles</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      {this.renderSaved()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <hr />
            <div className="container" id="footerA">
                Copyright &copy; 2017 Paul Schaller
            </div> 
          </footer>
        </div>
      </div>

    );
  }

}

export default Main;