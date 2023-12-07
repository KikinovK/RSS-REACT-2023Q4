## Redux. RTK.

[Code Link](https://github.com/KikinovK/RSS-REACT-2023Q4/tree/redux)
[Deployment Link](https://kikinovk-redux.netlify.app/)

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

## Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KikinovK/RSS-REACT-2023Q4.git
   ```
2. Go to branch
   ```sh
    git checkout redux
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
