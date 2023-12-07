## React. Tests/Context API

[Deployment Link](https://kikinovk-context.netlify.app/)

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


## Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KikinovK/RSS-REACT-2023Q4.git
   ```
2. Go to branch
   ```sh
    git checkout tests/context
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
