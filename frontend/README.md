# Language Pronunciation App - Frontend

This project is a web application that allows users to input a word, select its language and mother tongue, and view the real-time pronunciation using the International Phonetic Alphabet (IPA). The application highlights differences in pronunciation between the two selected languages.

## Frontend

The frontend of the application is built using React and TypeScript. It consists of several components that work together to provide a seamless user experience.

### Components

- **LanguageSelector**: A component that allows users to select the source and target languages from dropdown menus.
- **WordInput**: A component that provides an input field for users to enter a word and triggers updates to the pronunciation display.
- **PhonemeDisplay**: A component that shows the pronunciation in the International Phonetic Alphabet, highlighting differences in pronunciation.

### Pages

- **HomePage**: The main page of the application that integrates the LanguageSelector, WordInput, and PhonemeDisplay components.

### Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

### Usage

- Enter a word in the input field.
- Select the source and target languages.
- View the pronunciation in IPA and observe the differences highlighted.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.