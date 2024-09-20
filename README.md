
# Hacia.io Component Library

Hacia.io is a component library built with **React** and **Material-UI (MUI)**. This project follows modern best practices, including **TypeScript**, **ESLint**, **Prettier**, and **Jest** for testing and coverage.

---

## Getting Started

### Prerequisites

- **Node.js**: Requires **Node.js v18.x or higher** (latest version as of September 2024)
- **npm** (comes with Node.js) or **yarn**

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hacia/hacia.io.git
   cd hacia.io
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

This will start the development server on `http://localhost:3000`.

---

## Development

### Linting and Formatting

- **Check for linting errors:**

  ```bash
  npm run lint
  ```

- **Check for formatting issues:**

  ```bash
  npm run style:check
  ```

- **Fix linting and formatting issues:**

  ```bash
  npm run fix:lint
  npm run fix:pretty
  ```

### Testing

- **Run tests:**

  ```bash
  npm run test
  ```

- **Run tests with coverage:**

  ```bash
  npm run test:coverage
  ```

Coverage reports are generated in the `/coverage` directory.

---

## Contribution Guidelines

We welcome contributions! If you would like to contribute to the project, please follow these steps:

1. **Fork the repository** to your own GitHub account.
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/hacia/hacia.io.git
   cd hacia.io
   ```

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b my-new-feature
   ```

4. Make your changes and **commit with a semantic message** (see commit guidelines below).

5. Push your branch to your fork:

   ```bash
   git push origin my-new-feature
   ```

6. Create a **pull request** from your branch into the `main` branch of the original repository.

### Commit Guidelines

This project enforces **Semantic Commit Messages** following the **Conventional Commits** specification.

Commit messages should follow this structure:

```text
<type>(<scope>): <subject>
```

Examples:

- `feat(auth): add login functionality`
- `fix(button): resolve click issue`
- `docs(readme): update contribution instructions`

Refer to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) documentation for more details.

---

## License

This project is licensed under the ISC License.
