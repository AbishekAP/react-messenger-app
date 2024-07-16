```markdown
# React Messenger App

This is a React-based messaging application that allows users to communicate in real-time within multiple chat groups. The app utilizes Firebase for authentication and real-time database functionality.

## Features

- **Google Sign-In:** Users can sign in using their Google accounts.
- **Create and Join Groups:** Users can create new chat groups or join existing ones.
- **Real-Time Messaging:** Messages are sent and received in real time within each group.
- **User Profiles:** Display user profile pictures and names with each message.

## Prerequisites

- Node.js (v14 or later)
- Firebase Project

## Getting Started

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (or use an existing one).
3. Navigate to the "Authentication" section, go to the "Sign-in method" tab, and enable "Google" as a sign-in provider.
4. Navigate to the "Firestore Database" section, create a database, and set the appropriate security rules for your use case.
5. Copy your Firebase project configuration details.

### Project Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AbishekAP/react-messenger-app.git
   cd react-messenger-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory with your Firebase configuration details:**

   ```plaintext
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   VITE_MEASUREMENT_ID
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

### Running the App

After setting up the project and Firebase, you can run the app locally by navigating to [http://localhost:5173](http://localhost:5173) in your web browser.

## Dependencies

The project uses the following main dependencies:

- `firebase`: For authentication and real-time database.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `vite`: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- `@vitejs/plugin-react`: Vite plugin for React.

## Folder Structure

- `src`: Contains the source code for the application.
  - `firebase.js`: Firebase configuration and initialization.
  - `App.jsx`: The main component that renders the app.
  - `Groups.jsx`: Component for managing chat groups.
  - `Messages.jsx`: Component for sending and displaying messages.

## License

This project is licensed under the MIT License.
```