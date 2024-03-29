# Frontend Repository

This is the front-end repository, built with React and powered by the Vite framework. It adheres to the best development practices and uses modern technologies to ensure high performance and an efficient development experience.

## Prerequisites

- Node.js (LTS version 18 or higher).

## Initial Setup

1. Clone the repository to your local machine.
2. Duplicate the `.env.sample` file and rename it to `.env`.
3. Fill in the environment variables as necessary, following the nomenclature `VITE_VARIABLE_NAME`.
4. Install the dependencies with `yarn install` or `npm install`.
5. Start the development server with `yarn dev`.

## Directory Structure

- `src`: Contains all the source code of the project, including React components, services, and styles.
  - `assets`: Static files such as images and SVGs.
  - `components`: Reusable React components.
  - `contexts`: React contexts for global state management.
  - `services`: Services for communication with external APIs.
  - `screens`: Components that represent entire screens.
- `public`: Publicly accessible static files.
- `storybook`: Configuration and components for Storybook.
- `.vscode`: Specific settings for the VS Code editor.
- `dist`: Output directory for production builds.

## Environment Variables

Set up the environment variables in the `.env` file based on the `.env.sample` template. Always use the prefix `VITE_` to ensure they are exposed to your code through Vite.

| Variable     | Description | Required |
| ------------ | ----------- | -------- |
| VITE_API_URL | The API URL | Yes      |

## Storybook

Run `yarn storybook` to view and interact with the project's components in Storybook. Access `http://localhost:6006/` in your browser to view the UI.

## Important Commands

- `yarn dev`: Starts the development server with hot reloading.
- `yarn build`: Creates an optimized production build in the `dist` directory.
- `yarn storybook`: Opens Storybook for component development.

## Commit Standards

Follow the commit conventions with `Commit-Lint` configured. Commit messages should be clear and devoid of special characters or uppercase. Use the following tags:

- `feat`: for new features.
- `fix`: for bug fixes.
- `path`: for urgent fixes (hotfixes).

## Vite

Vite is a modern front-end build tool that provides a faster development experience with features like an extremely fast development server and an optimized build system with Rollup. Below are some of Vite's specific configurations used in this project:

- `vite.config.ts`: The Vite configuration file. Here, we define plugins, module resolutions, preprocessing settings, and more.
- `tsconfig.json`: TypeScript configurations to ensure correct compilation and to take full advantage of the editor's capabilities.

## Husky

Husky is used in this project to ensure all commits meet our standards. Configured hooks include:

- `pre-commit`: Runs linters and formatting checks before each commit.
- `commit-msg`: Validates the commit message with `Commit-Lint`.
