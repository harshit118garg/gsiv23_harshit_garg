
# gsiv23_harshit_garg

## Created a react redux-tookit movies app.

**Features**

- App features latest trending movies.
- The app supports infinite scrolling of movies.
- This web application also supports user to search for their favourite movie and the user can also know the details like the cast of the movie, the director of the movie, its total run time and the user ratings.
- The app is also responsive across various device

**Tools and NPM packages Used**

- React-Typescript
- Axios > for API calling
- Redux-Toolkit and React-Redux > for effortless state management
- React-Icons > for Icons
- React-Router-Dom > for page navigation
- SASS > for stylesheet
- git > version control
- TMDB Movie API > for data fetching

**How to run in your local**

- Live url of the app -> [LIVE](https://new-movies-verse.netlify.app/)
- github url of the app -> [Github](https://github.com/harshit118garg/gsiv23_harshit_garg)
- clone the github repo.
- the deployed branch is main, so please do not change anything directly in the main branch. 
- for any changes please cut a branch from the develop and then do the changes.
- after cloning the git repo in your system, please run 
    ```
    npm install
    ```
- for TMDB API KEY please create your own api key from [TMDB](https://developers.themoviedb.org/3/getting-started/introduction)
- create a .env file in your root directory of the project and 
paste your api key there with a key word starting like This
    _REACT_APP_TMDB_MOVIE_API_KEY_
- then you can access your key anywhere you want with process.env.[your key word]
- finally to run the project please run this command in your teminal
    ```
    npm run start
    ```

**My Work**

- Using redux Toolkit to handle the state management and also managing the various api resposnes was very interesting to implement as its extraReducers handle the async functions very gracefully. 
- managing the state without the tookit would have been a trouble some task but typescript sure come in handy as accessing the state values become easy and also removing any chances of errors or potential bugs.
- the difficult part that I faced while implementing the task to handle the feature of infinite scroll but eventually I fixed it and got to learn something new.
- if I had 4 more hours to implement the task then I had focus on implementing the filtering of the movies based on categories.
