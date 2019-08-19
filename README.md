
Prerequisites
1. Nodejs runtime installed: https://nodejs.org/en/
2. Install WebdriverManager
`npm i -G webdriver-manager`

How To:
1. Clone the project
2. cd to project root
3. Install dependencies
`npm i`  
4. Start WebdriverManager manager (in a separate terminal)
 `webdriver-manager update && webdriver-manager start`
5. Run the tests
`npm run test`
6. Generate the report
`npm run report`
7. View report
open in the browser `./target/site/serenity/index.html` (path relative to project root folder)

