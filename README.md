# *The Rolling Scopes School React* course assignment

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

## React. Tests/Context API

[Deployment Link:](https://kikinovk-context.netlify.app/)

<details>
  <summary>What should have been done:</summary>
1. Create a separate branch for this task from the previous task's branch.
2. Implement custom state management using the Context API.
   - Utilize the created context to store both the value entered in the Search component and the list of items received from the API;
   - Ensure that all components that need to access this data use the context.
3. Add and configure test runner: Jest or Vitest. Test runner should show the test coverage. You should aim to reach at least 80% of the test coverage.
4. Add testing library: React Testing Library. You should add tests for the several scenarios keeping in mind that mocked data should be used instead of real API calls.
5. Tests for the Card List component:
   - Verify that the component renders the specified number of cards;
   - Check that an appropriate message is displayed if no cards are present.
6. Tests for the Card component:
   - Ensure that the card component renders the relevant card data;
   - Validate that clicking on a card opens a detailed card component;
   - Check that clicking triggers an additional API call to fetch detailed information.
7. Tests for the Detailed Card component:
   - Check that a loading indicator is displayed while fetching data;
   - Make sure the detailed card component correctly displays the detailed card data;
   - Ensure that clicking the close button hides the component.
8. Tests for the Pagination component:
   - Make sure the component updates URL query parameter when page changes.
9. Tests for the Search component:
   - Verify that clicking the Search button saves the entered value to the local storage;
   - Check that the component retrieves the value from the local storage upon mounting.
10. Tests for the 404 Page component:

- Ensure that the 404 page is displayed when navigating to an invalid route.

11. Lastly, update Husky to run tests on the pre-push hook, ensuring that tests are automatically executed before any code is pushed.
</details>



## Redux. RTK.
[Deployment Link:](https://kikinovk-redux.netlify.app/)

<details>
  <summary>What should have been done:</summary>
1. Create a separate branch for this task from the previous branch task.
2. Redux Integration
   - Integrate Redux into your application. You'll need to set up the Redux store and reducers using Redux Toolkit.
3. Connect Components. Connect the relevant components to the Redux store. Components should be able to access and modify the following data:
   - Save search value on CTA (Call to Action) button click.
   - Save items per page.
   - RTK Query Implementation: Use Redux Toolkit Query (RTK Query) to make API calls and cache the results. This will modify your previous API call implementation.
4. Loading Flags
   - Implement separate loading flags in the Redux store for the main page and details page. These flags should indicate whether data is being loaded.
5. Test Updates
   - Update your tests to accommodate the changes introduced by Redux and RTK Query.
   - Test the functionality related to Redux state and API calls.
</details>





## React. Forms
[Deployment Link:](https://https://kikinovk-form.netlify.app/)

<details>
  <summary>What should have been done:</summary>
1. Create a separate branch for this task, not based on previous ones.
2. Language Requirement
   - Use **TypeScript** for the project.
3. Project Setup
   - Initialize the project using [Vite](https://vitejs.dev/guide/) with the [_react-ts_ template](https://vite.new/react-ts).
4. Code Quality Tools
   1. ESLint
      - Set up ESLint to throw errors if TypeScript's _any_ type is used.
      - Follow the [configuration guide](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/module01/configs.md).
   2. Prettier
      - Integrate Prettier for code formatting.
   3. Husky
      - Add Husky and configure it to run linting on pre-commit.
   4. package.json commands
      - Add the following npm scripts:
        - `lint`: For running the lint command.
        - `fix`: For running Prettier's fix command.
5. Add **React Hook Form**, **Yup**, **Redux Toolkit** and **React Router** to the application.
6. Routing. There will be 3 routes:
   - Main, should have links to other 2 routes
   - Route for the form created using uncontrolled components approach
   - Route for the similar form, but created with the help of the **React Hook Form**
7. Redux. Use redux to store the data provided by both approaches on the Main route. You can use tiles to display data taken from each form.
8. Forms
   Both forms will collect the same data:
   - name (validate for first uppercased letter)
   - age (should be number, no negative values)
   - email (validate for email)
   - 2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character)
   - gender (you can use radio buttons or select control)
   - accept T&C (checkbox)
   - input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
   - autocomplete control to select country (all countries should be stored in the Redux store)
     Form should contain labels, which should be connected with inputs (look at **htmlFor**)
9. Validation
   Implement validation according to the inputs description from p. 8. Use **Yup** for validation. Show errors either above each component, or below (but stick with one approach everywhere). Block submitting the form before all the errors are fixed (disable submit button). Good UX assumes that there are no "jumps" when showing errors.
   - Uncontrolled components should implement validation on submit
   - Approach with **React Hook Form** should implement live validation
10. After submitting the form
    On successful form submission redirect user to the main route with all the previously entered data. Make an indication for a newly entered data on the main route (e.g. show border in a different color for a few seconds, or a different background color)

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
