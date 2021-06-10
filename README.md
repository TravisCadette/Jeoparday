# Jeoparday

Exercise 1: List Top 10 Trivia Categories
Create a new section that lists the top 10 categories from the Jeopardy API on page load.
You'll have to explore the API to figure out the correct url you can use to load the top 10 trivia categories. Note that if the API returns a list of all the categories, then the first 10 categories in that list are considered to be the "top" categories.
The "List of Top Categories" heading is just a static heading.
Display the categories in an ordered list, using proper semantic HTML.

What kind of data is being returned from the API? Why are the benefits of using this data format?

An API returns a JSON. The benefits of this format is that the data is easier to read and extrapolate. 

How do you get data for all clues? (i.e., what's the URL you'd need to use?)

GEtting data for all clues
/api/clues

How do you get data for clues that are worth 100 dollars?

http://jservice.io//api/clues?value=100

How do you get data for 50 random clues in a single request?

http://jservice.io//api/random?count=50

Can you get data for 20 random clues that are worth 100 dollars? Why not?

You cannot perform this function because the urls are in different locations.

How do you get data for 50 categories in a single request?

http://jservice.io//api/categories?count=50

How do you get data for the category that has an id of 11496?

http://jservice.io//api/category?id=11496

What type of request is being made when you open a url in the browser?

Request Method GET