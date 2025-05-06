# Language Pronunciation App

This project is a web application that allows users to input a word, select its language and mother tongue, and display the real-time pronunciation using the International Phonetic Alphabet (IPA). The application highlights differences in pronunciation between the two selected languages.

## Project Structure

The project consists of two main parts: the backend and the frontend.

### Backend

The backend is built using Express and TypeScript. It provides APIs to fetch pronunciations and similar words based on phonetic analysis.

- **src/app.ts**: Entry point of the backend application, initializes the Express app, sets up middleware, and connects routes.
- **src/controllers/pronunciationController.ts**: Contains the `PronunciationController` class with methods to fetch pronunciation and similar words.
- **src/routes/pronunciationRoutes.ts**: Defines the routes for pronunciation-related endpoints.
- **src/services/pronunciationService.ts**: Contains the `PronunciationService` class for fetching pronunciation data from an open-source API.
- **src/types/index.ts**: Defines the structure of requests and responses for the pronunciation endpoints.
- **package.json**: Lists dependencies and scripts for starting the server.
- **tsconfig.json**: TypeScript configuration file for the backend.
- **README.md**: Documentation for the backend setup and API usage.

### Frontend

The frontend is built using React and TypeScript. It provides a user interface for interacting with the backend.

- **src/components/LanguageSelector.tsx**: Component for selecting languages from dropdown menus.
- **src/components/WordInput.tsx**: Component for inputting a word and triggering updates to the pronunciation display.
- **src/components/PhonemeDisplay.tsx**: Component for displaying the pronunciation in IPA, highlighting differences.
- **src/pages/HomePage.tsx**: Main page of the application, integrating all components.
- **src/App.tsx**: Main application component that sets up routing.
- **src/index.tsx**: Entry point for the frontend application.
- **src/types/index.ts**: Defines types for props and state used in components.
- **public/index.html**: Main HTML file for the frontend application.
- **package.json**: Lists dependencies and scripts for building and starting the application.
- **tsconfig.json**: TypeScript configuration file for the frontend.
- **README.md**: Documentation for the frontend setup and usage.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

4. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Start the frontend application:
   ```
   npm start
   ```

## Usage

Once both the backend and frontend are running, you can access the application in your web browser. Input a word, select the languages, and view the pronunciation in IPA along with similar words.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.