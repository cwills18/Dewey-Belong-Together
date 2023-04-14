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
- I kept trying to set states inside asynchronous functions and spent a great deal of time wondering why everything would work perfectly up until the setState() methods. Hopefully I won't make this mistake again.

To view the project, visit:

https://cwills18.github.io/dewey-belong-together/
