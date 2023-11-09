## React. Components

[Deployment Link:](https://kikinovk-components.netlify.app/)

<details>
  <summary>What should have been done:</summary>

1. Create a separate branch for this task.
2. Language Requirement
   - Use **TypeScript** for the project.
3. Project Setup
   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [*react-ts* template](https://vite.new/react-ts).
4. Code Quality Tools
    1. ESLint
       - Set up ESLint to throw errors if TypeScript's *any* type is used.
       - Follow the [configuration guide](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md).
    2. Prettier
       - Integrate Prettier for code formatting.
    3. Husky
       - Add Husky and configure it to run linting on pre-commit.
    4. package.json commands
       - Add the following npm scripts:
           - `lint`: For running the lint command.
           - `format:fix`: For running Prettier's --write command.
5. Pick a RESTfull api which supports search and pagination (pagination might be reffered as *offset* and *limit* params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.
6. Implement the following requirements:
   - Create a page comprised of 2 horizontal section (a smaller top one, and a bigger bottom one);
   - On the top section put *Search* input and the "Search" button. *Search* component should look for a previously saved search term in the local storage, if there isn't any - leave the input empty;
   - Bottom section should show be used for displaying search results (name and a small description);
   - By default application makes a call to the selected api to get the list of the items with the search term fron the input (only first page). If the input is empty make a call to get all the items;
   - When user modifies the *Search* input and clicks on "Search" button, application makes a call to an api with the newly provided search term (search term should not have any trailing spaces, process the input) to get the results (only first page);
   - The provided search term should be saved to the local storage, if the value exists overwrite it;
7. Wrap application to an error boundary to catch errors. Report an error to a console and show fallback UI (use respective methods for this). Create a button which will throw an error on click to test the functionality.

**Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.**

All logical parts should be set into separate components.MarkdownMarkdown
</details>

## React. Routing

[Deployment Link:](https://kikinovk-routing.netlify.app/)

<details>
  <summary>What should have been done:</summary>

Create a separate branch for this task from the previous task's branch.
All components must be changed to functional components, except Error Boundary components, as error boundaries in React still need to be class components.
All logic should be split into components:
If you need an access either to the component's lifecycle or the state use hooks.
All data should be stored in the component's state.
Add routing to your application using React Router.
Add pagination:
Implement pagination for your existing item list
Display the current page in the browser URL using query parameters (e.g. ?page=2, e.g /search/2).
The pagination component should appear after receiving the list of all items.
If the user changes the number of items shown per page, make a new API call and display the results from the first page.
Main page displays search results. On item click page should be split into 2 section:
left section will continue to display search results;
right section should display details using Router Outlet (show loading indicator while making an additional call for details, add control for closing the section, also section should be closed when user clicks on the left section)
Reflect in the url that "Details" section has been opened for the selected item (e.g. /?frontpage=2&details=1).
</details>



## Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KikinovK/RSS-REACT-2023Q4.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Running the Application

To run the application, use the following command:
```
   npm start
```


### Code Formatting and Linting

This project uses ESLint and Prettier for code formatting and linting. Husky is also configured to run pre-commit hooks to ensure code quality. Before committing changes, the pre-commit hooks will automatically format the code using Prettier and check for linting errors using ESLint.

To format the code using Prettier manually, use the following command:
```
   npm run pretty
```
To run ESLint for TypeScript and TSX files, use the following command:
```
   npm run lint
```

### Testing

To run tests, use the following command:
```
   npm run test
```

### Building the Project

To create an optimized production build of the project, use the following command:
```
   npm run build
```

## Preview

Before running the preview, make sure you have a production build ready by running the `npm run build`.

To preview the build and see how the application works in production mode, use the following command:
```
   npm run preview
```

## Available Commands

- `npm run format:fix`: To automatically fix Prettier formatting for TypeScript, TSX, and JSON files.
- `npm run lint:fix`: To automatically fix ESLint errors for TypeScript and TSX files.
