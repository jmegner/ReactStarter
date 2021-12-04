# TypeScript React-Bootstrap Starter/Skeleton Project

Notable technologies/libs/whatever used... 
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Jest](https://jestjs.io/)
* [Testing Library](https://testing-library.com/docs/react-testing-library/intro)
* [GitHub Actions](https://docs.github.com/en/actions)
* [Visual Studio Code](https://code.visualstudio.com/)

Things created/modified...
* package.json set for TypeScript and React-Bootstrap
* gitignore
* tsconfig.json
  * added 'sourceMap' entry to allow debugging TypeScript
  * added 'outDir' entry so generated js files not in same folder as source ts files
* test and deploy GitHub actions
* VS Code launch.json; set up for debugging, testing, linting
* test lib chosen (using test-library instead of React's test-utils)

Live at [jmegner.github.io/ReactStarter](https://jmegner.github.io/ReactStarter/).

## Deploy To GitHub Pages Steps
* Go to repo Code tab.  Using branch dropdown, create a 'gh-pages' branch.
* Go to repo Settings tab. Select "Pages" from left list.  Choose 'gh-pages' branch and 'root' folder.
* Go to repo Actions tab.  Verify that workflows were automatically imported.

## Approximate Steps To Recreate From Scratch
* There's this [create-react-app page](https://create-react-app.dev/docs/adding-typescript/) that says to `npm install  do `npx create-react-app APP_NAME_HERE --template typescript`, but unfortunately that creates a project [with files](https://create-react-app.dev/docs/getting-started#output) like App.css and index.css (and reportWebVitals.ts? what is that?).
* I think I did the `npx create-react-app` thing but then I replaced the src/ and public/ files with the files from [this React-Bootstrap sample](https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-ts).  This copying from a React-Bootstrap sample seemed like the fastest and safest way to change to the React-Bootstrap way of doing things.  Though, I did upgrade to a later major version of React-Bootstrap and Bootstrap than the sample had.
* TODO: figure out where I saw how to add debugging profiles (to .vscode/launch.json) for all the browsers.
* Remember: to debug, first you do `npm start` (which will build, launch a tab, and continuously watch for rebuilding), then you can launch the debugger (which will launch another tab).
* TODO: figure out where I saw how to debug tests in VS Code (by adding to .vscode/launch.json).
* For testing, at first I started with React's react-dom and testing-util libraries (as suggested by [React's page on testing](https://reactjs.org/docs/testing-recipes.html)), but [Testing Library for React](https://testing-library.com/docs/react-testing-library/intro) seemed better, especially for interacting with the DOM.
* I'm still using [Jest](https://jestjs.io/) as the test runner (it's set up when you do `create-react-app`), and despite what some internet articles said, I didn't have to do any work to get Jest to automatically run tests in *.test.tsx or *test.ts files.
* Lots of small changes to tsconfig.json and .vscode/launch.json to better support building, debugging, testing, and linting.
