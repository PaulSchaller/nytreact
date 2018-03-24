# **New York Times - React**

## *About This Program*

This program allows a user to choose a topic to research with the New York Times.  The user chooses a topic and a range of dates within the New York Times archives to research from.  Once these selections are made, a list of articles related to the topic is given.  From this list, the user can select articles to read by clicking a button which will link the user to the article on the New York Times API.  If the user wants to save this article for future reference, he can click a button that will save the article. 

Once an article is saved, it will be included in a database of other saved articles.  From this list, the user can link to the article or decide to delete the article from the collection.  

## *A Clever Program*
```
I love to research topics on the internet.  
The New York Times API is very useful and this program allows the user to take advantage of it.  
When I started college, I was thrilled with being able to use the computer for word processing, 
      so I could easily edit papers.  
Students in high schools nowadays will use videos from the internet as class instruction and homework.  
This New York Times API project is just as functional, new, and clever as those. 
  You can research topics and then easily save articles that you can use later.  

```
## *How It Works*
The following screenshots with captions will show you how the website runs.

![2018-03-24 3](https://user-images.githubusercontent.com/30198872/37861833-56322eae-2f18-11e8-89d2-eab2e404dfaa.png)
When the user initially pulls up the webage, it will look like this.  There is a form the user fills out with input for the topic and the search years.  There are two additional **components**.  The first is a *Results* component that will list the articles from the New York Times API search.  The second is a *Saved Articles* component that will list the saved articles for the website.




![2018-03-24 4](https://user-images.githubusercontent.com/30198872/37861834-598aa892-2f18-11e8-82e2-720679c2cca1.png)
The user will then input the topic, start year, and end year.  



![2018-03-24 5](https://user-images.githubusercontent.com/30198872/37862097-d49478b0-2f1d-11e8-881b-9620217fc52a.png)
When the user submits the search form, a list of New York Times articles associated with the topic will be listed within the search time period.



![2018-03-24 6](https://user-images.githubusercontent.com/30198872/37861691-6bdf2c8c-2f15-11e8-8742-438ad77eb27d.png)
If the user clicks on the *View Article* button, the webpage will link the user to the article.  



![2018-03-24 7](https://user-images.githubusercontent.com/30198872/37861829-420dfc00-2f18-11e8-9d54-7a5463766b40.png)
If the user clicks on the *Save* button, the article information (title, date, and link) will be saved in a *MongoDB* database.  The last two screenshots are saved articles within the *MongoDB* database.


![2018-03-24 8](https://user-images.githubusercontent.com/30198872/37861827-3ad9af42-2f18-11e8-9f01-4d5325d99a5b.png)



## *Production*
I started my project with a *Create React App* as a boilerplate.  I used current versions of *React* and *React-Router-Dom* for this assignment.  To save articles, I used a *MongoDB* database.  Also utilized were Node and Express.

## *Deployment (Heroku)* 
My program is deployed on Heroku at  https://still-springs-95092.herokuapp.com/

### Author:  Paul Schaller

