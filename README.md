# Interactive Python Learning Platform

A comprehensive, web-based educational platform designed to teach Python programming from beginner fundamentals to advanced concepts like Data Science, Hardware Computing, and Artificial Intelligence. The application features a dark-themed, highly sophisticated user interface built with React and Tailwind CSS.

## 🌟 Features

- **Structured Curriculum:** Access multiple books and chapters covering a wide range of Python topics.
- **In-Browser Python Execution:** An interactive coding sandbox powered by **Pyodide**. Run fully functional Python code directly in your browser without needing any backend server or local installation.
- **Syntax Guides:** Elaborate, multi-line code examples with practical context.
- **Interactive Quizzes:** Test your knowledge at the end of each book.
- **Sophisticated UI:** A sleek, dark-themed canvas designed for focus and readability, utilizing modern typography and responsive layouts.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your local computer:
- [Node.js](https://nodejs.org/) (Version 18 or higher is recommended)
- `npm` (Node Package Manager, which comes bundled with Node.js)

### Installation

1. **Clone the repository** (if applicable) or download the source code:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install the dependencies:**
   Run the following command in the root directory of the project to install all necessary packages:
   ```bash
   npm install
   ```

### Running the Application

To start the local development server, run:
```bash
npm run dev
```

The terminal will output a local URL (typically `http://localhost:3000`). Open this URL in your web browser to view and interact with the application.

## 🛠️ Built With

- **[React](https://react.dev/):** UI library for building component-driven interfaces.
- **[Vite](https://vitejs.dev/):** Next-generation frontend tooling for fast builds and hot-module replacement.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid styling.
- **[Pyodide](https://pyodide.org/):** A Python distribution for the browser and Node.js based on WebAssembly.
- **[React Markdown](https://github.com/remarkjs/react-markdown):** For rendering structured markdown content in the learning modules.

## 📦 Building for Production

If you want to build the application for production deployment, run:
```bash
npm run build
```
This will bundle the React application and output the static files into the `dist/` directory, which can then be served by any static file server (e.g., Nginx, Vercel, Netlify). You can preview the production build locally using:
```bash
npm run preview
```
