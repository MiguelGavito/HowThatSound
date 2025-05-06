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
   cd backend
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
The server will be running on `http://localhost:5000`.

## API Endpoints

### Get Pronunciation
- **Endpoint:** `/pronunciation`
- **Method:** `GET`
- **Request Parameters:**
  - `word`: The word to fetch pronunciation for.
  - `language`: The language of the word.
  - `motherTongue`: The user's mother tongue.
- **Response:**
  ```json
  {
    "pronunciation": "/ɪɡˈzæmpəl/",
    "similarWords": ["example", "sample"]
  }
  ```

### Get Similar Words
- **Endpoint:** `/similar-words`
- **Method:** `GET`
- **Request Parameters:**
  - `phoneme`: The phoneme to find similar words for.
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