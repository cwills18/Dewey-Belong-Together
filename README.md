# Dewey-Belong-Together

This was my first project in React. The goal was to create a book search engine that fetched and returned data from the Google Books API. In this project, I successfully: 
- Used the react-router-dom library to employ features such as Browser Routes and NavLinks to create and navigate between three page components: a home page, results page and a detailed information page for any individual book. 
- Fetched and handled data from the Google Books API.
- Destructured object data to use inside various React components.
- Created various context and state hooks to handle search terms provided by a user and store fetched data to different variables as required.
- Wrote useEffect hooks to monitor changes in data and rendered elements.
- Styled my React components using SCSS.

Some of the challenges I faced in this project:
- Lots and lots of errors caused by minor misdemeanours such as missing imports, typos or using incorrect brackets or words. I gained an appreciation of the specificity of React error feedback, which saved me lots of head scratching. Thankfully, the need to troubleshoot minor issues became less problematic by the end of the project when I was feeling more familiar with React. 
- Handling API data with various missing values. Because of this, I had lots of practice using ternary statements in React to conditionally render or store information depending on their availability in the source data.
- Deploying to Github was a major hurdle. Initially, I had used BrowserRouter to configure my routes and when github loaded my app, it was loading the expanded view page on a book, which of course threw a gazillion errors because no data had been fetched yet. After many, many hours of trying random vague solutions found on the internet, I eventually found one solution which worked. Which was to replace the BrowserRouter (which is apparently not supported by GitHub) with a HashRouter and update the homepage in the package.json accordingly. This finally fixed the issue and then I was able to focus on minor styling problems that arose in deployment.

To view the project, visit:

https://cwills18.github.io/dewey-belong-together/
