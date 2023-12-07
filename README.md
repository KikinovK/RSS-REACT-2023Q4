# *The Rolling Scopes School React* course assignment

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
