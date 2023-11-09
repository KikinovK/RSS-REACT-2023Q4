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
