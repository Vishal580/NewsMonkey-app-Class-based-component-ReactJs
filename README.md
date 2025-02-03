# NewsMonkey

NewsMonkey is a React-based news application that fetches and displays news articles from various categories using an API. The app includes routing, a loading bar, and a user-friendly interface, all built with class-based components.

## Features

- Fetches news articles from different categories such as General, Business, Technology, Entertainment, Health, Science, and Sports.
- Displays a loading progress bar while fetching data.
- Responsive design for an optimal viewing experience on different devices.
- Simple and clean navigation using 

## Technologies Used

- React
- React Router
- NewsAPI
- Bootstrap

## Installation

To get the project up and running locally, follow these steps:

1. Clone the repository:
   - Open Git Bash
    - `git clone https://github.com/your-username/newsmonkey.git`
    - cd newsmonkey

2. Install dependencies:
   - `npm install`

3. Create a .env file in the root directory and add your News API key
   - **REACT_APP_NEWS_API=your_api_key_here**

4. Start the development server:
   - `npm start`
   
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    The page will reload when you make changes.\
    You may also see any lint errors in the console.

## Usage

Navigate through different news categories using the navbar. The app will fetch and display the latest news articles from the selected category.

## Fetching News Data

The app uses the following NewsAPI endpoint to fetch news articles:

GET `https://newsapi.org/v2/top-headlines?country=us&apiKey=REACT_APP_NEWS_API`

## Environment Variables

REACT_APP_NEWS_API: Your NewsAPI key.

## Code Structure

- App.js: Main component that sets up routing and the loading bar.
- Components/Navbar.js: Component for the navigation bar.
- Components/News.js: Component that fetches and displays news articles using class-based components.
- Components/NewsItem.js: Component for displaying individual news articles.
- Components/Spinner.js: Component for displaying a loading spinner.
- Components/loading.gif: GIF file used for the loading spinner.
- App.css: Styling for the App component.
- index.css: Global styling for the application.
- index.js: Entry point for the application.
- .env.local: Environment variable file for storing API keys (not included in version control).

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a pull request

