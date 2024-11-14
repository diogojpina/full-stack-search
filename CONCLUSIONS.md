# Main considerations

I took around 3 hours to complete the challenge. 65% for backend and 35% for frontend.

## Backend

Adjust and create the following endpoints:

- /hotel - list hotels
- /hotel/:id - hotel details by id
- /country - list countries
- /country/:id - contry details by id
- /city - list cities
- /city/:id - city details by id

I create an app class to organize how the app instance is created. Adding a router to map all the endpoints.

I also created entities, controllers, and services.

Finally, I created a context to create only one instance for each service, and to store a db instance.

## Frontend

Installed packages:

- react-router-dom - for router
- lodash - for debounce

I reorganized the app and added an router to map the URL to pages.

For each entity, I created a page to show details and services to capsulate the API calls. I added a few css classes to format the details pages.

I also moved the search component from app to search page.
Then, I created a ListItem to show the entities items for search and call the services to search.
Finally, I added a 400ms debounce to search in order not to call the API while the user is still typing.

Note: I moved the filters from frontend to backend.

# Possible improvements

- Create a feat/branch istead of push commits to main
- When click on esc key, clear the search bar
- A framework such as Nest for the backend
- Improve handle error when a hotel, country or city is not found on the details page
- Improve the css
- Add loaders while loading data from API
