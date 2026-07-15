# Password Generator

A secure, responsive, and aesthetically pleasing **Password Generator** built using **React** and **Vite**. This application allows users to create customizable, secure passwords with real-time feedback.

## 🚀 Features
* **Customizable Security:** Adjust password length (0-30 characters) using an intuitive range slider.
* **Configurable Complexity:** Easily toggle the inclusion of numbers and special symbols.
* **Real-time Generation:** Leverages `useCallback` and `useEffect` hooks for optimized, real-time password updates based on user settings.
* **Immersive UI:** Features a dynamic, animated background integrated via Vanta.js for a modern aesthetic.

## 🛠️ Tech Stack
* **Frontend:** React
* **Build Tool:** Vite
* **State Management:** React Hooks (`useState`, `useCallback`, `useEffect`)
* **Styling:** Tailwind CSS

## 🕹️ How to Use
1. **Adjust Length:** Move the slider to set your desired password length.
2. **Set Complexity:** Use the checkboxes to include numbers and special symbols.
3. **Generate:** The password updates automatically as you change your preferences.
4. **Copy:** Click the "copy" button to save the generated password to your clipboard.

## 📂 Project Structure
* `src/App.jsx`: Core application logic, password generation algorithm, and state management.
* `src/VantaBackground.jsx`: Integration component for the animated background.
* `src/App.css`: Custom component styles and layout.
* `index.html`: Main HTML entry point.

## ⚙️ How to Run
1. Clone this repository to your local machine.
2. Install the necessary dependencies:
   ```bash
   npm install
Start the development server:

Bash
npm run dev
Open the displayed local server URL in your web browser.

Note: This project is built using React + Vite. Ensure you have node_modules installed via npm install before running the project, as they are excluded from the repository.

Stay secure!
