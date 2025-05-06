# Language Pronunciation App - Backend

## Overview
The Language Pronunciation App is a web application that allows users to input a word, select its language and mother tongue, and view the real-time pronunciation using the International Phonetic Alphabet (IPA). The application highlights differences in pronunciation between the two languages and provides similar words based on phonetic analysis.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd language-pronunciation-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

## API Endpoints

### Get Pronunciation
- **Endpoint:** `/api/pronunciation`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "word": "example",
    "language": "en",
    "motherTongue": "es"
  }
  ```
- **Response:**
  ```json
  {
    "pronunciation": "/ɪɡˈzæmpəl/",
    "differences": "Differences highlighted here."
  }
  ```

### Get Similar Words
- **Endpoint:** `/api/pronunciation/similar`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "word": "example",
    "language": "en"
  }
  ```
- **Response:**
  ```json
  {
    "similarWords": ["sample", "exemplar"]
  }
  ```

## Development
The backend is built using Express and TypeScript. The main entry point is `src/app.ts`, which initializes the application and sets up the necessary middleware and routes.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.