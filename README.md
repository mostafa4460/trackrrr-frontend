***
# Trackrrr-Frontend ([website](https://trackrrr.herokuapp.com/))
***

**This is the frontend for Trackrrr: an app that uses the Riot Games API to allow users to search for a username and view that user's in-game stats. 
Right now, Trackrrr only supports League of Legends, but it will also be adding more games like Valorant and TFT soon.  
<sub>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)</sub>**

### Trackrrr allows you to search for a user by region (server) and summoner name. If found, this is what can be viewed about the user:

1. Overview  
  a) Profile icon  
  b) Summoner level  
  c) Summoner name  
2. Ranks (Solo / Flex)  
  a) Current rank & border  
  b) League points (LP)  
  c) Wins / Losses  
  d) Win Ratio
3. Matches (for each Solo / Flex match)  
  a) Game creation date  
  b) Victory / Defeat  
  c) Game duration  
  d) Champ name & image  
  e) Summoner spells  
  f) Summoner runes  
  g) KDA (Kills / Deaths / Assists)  
  h) CS count  
  i) Champ level  
  j) Items  
  k) Participants (Champ image and Summoner name for each)

### The user-flow consists of only two pages:

1. Home-page "/":  
Renders a form that allows the user to type in a summoner name, choose a region from a drop-list and then search for a user.

2. Details-page "/summoners/:region/:name":  
If found, renders the in-game stats of the user mentioned above. If not, renders an error message. 

### Installation:

1. Clone this github repo => `git clone https://github.com/mostafa4460/trackrrr-frontend.git`
2. Install dependencies => `npm install`
3. Start your server => `npm start`

## Technologies Used:
**React  
Material-UI  
Axios     
Riot Games API**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
