# crypto-keeper

See the project at https://crypto-keeper.io/.

Crypto Keeper is a pet project aimed at making it simpler to track portfolio performance for the [Crypto.com App](https://crypto.com/).  At the time of this writing (July 27th, 2021), the Crypto.com App fails to provide a good overview of your portfolio performance.  In addition, there are no APIs available to pull this data easily.

To get around this, I use the only opening I could find in the app; the ability to export transaction history in a .csv format.  Once a user does that, they are able to upload their history and get a good overview of their portfolio performance.  If you'd like to see this demod, but don't have a Crypto.com portfolio, I included a way to see the app with some mocked data.  This mocked data is exactly like as if you were to upload your own data.

## Features
- Highly optimized API for performance (And also to save me money by staying on free plans)
- Installable as a PWA
- UI and Serverless functions hosted on HubSpot
- Backend hosted on Heroku
- Full HTTPS
- Support for Multiple Currencies

## Technoloies

### Front End
- Full Typescript
- ES6/7 Features
- Modern React with Hooks
- Pullstate for state management
- React Router to allow for SPA
- Ability to install project as PWA on Computer and Mobile
- Websockets for communication with the backend
- Emotion for CSS-in-JS
- Chart.js for charts and graphs
- Webpack for Bundling
- Prettier
- Terser for minification/uglification
- Material UI for design
- React Virtualized for performance with large lists

### Backend
- Node - Full Typescript
- Serverless functions to offload heavy lifting
- Optimized data purging to keep databases light
- Workers to allow for multithreading
- Websockets for communication
- ExpressJS for API Interface
- Custom caching fit for the specific use case needed by the app
- Redis for data storage
- ElasticSearch for data searching
