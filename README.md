# iChat - Real-Time Chat Application

## 📌 Overview
**iChat** is a real-time chat application built using **Electron.js**, **Firebase**, and **Web Technologies**. It allows multiple users to chat simultaneously, with messages stored in Firebase Firestore and updated in real-time.

## 🚀 Features
- **Cross-Platform:** Works on Web, Desktop (Windows, macOS, Linux), and Android.
- **Real-Time Messaging:** Messages update instantly for all users.
- **Username Storage:** First-time users enter a name, saved in local storage.
- **Cloud Storage:** Messages persist using Firebase Firestore.
- **Electron-Powered:** Desktop app built using Electron.js.

## 📂 Project Structure
```
ichat/
│-- index.html        # Main UI (HTML)
│-- renderer.js       # Frontend JavaScript
│-- main.js           # Electron Main Process
│-- package.json      # Project configuration
│-- preload.js        # Security Layer (Optional)
│-- assets/           # Styles & Icons
│   └── styles.css    # CSS for UI
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (Download from [Node.js Official Site](https://nodejs.org/))
- **Firebase Account** (For Firestore database)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/ichat.git
cd ichat
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Firebase
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Firestore Database
- Copy your Firebase configuration and replace it in `renderer.js`

### 4️⃣ Run the App
```sh
npm start
```

## 📦 Packaging for Desktop
To build an executable file:
```sh
npm install -g electron-packager
electron-packager . iChat --platform=win32 --arch=x64 --overwrite
```
For Mac:
```sh
electron-packager . iChat --platform=darwin --arch=x64 --overwrite
```

## 📱 Packaging for Android
To package the app for Android using **Capacitor.js**:

### 1️⃣ Install Capacitor CLI
```sh
npm install @capacitor/core @capacitor/cli
```

### 2️⃣ Initialize Capacitor
```sh
npx cap init iChat com.yourcompany.ichat
```

### 3️⃣ Add Android Platform
```sh
npx cap add android
```

### 4️⃣ Copy Web Code to Android
```sh
npx cap copy
```

### 5️⃣ Open Android Project in Android Studio
```sh
npx cap open android
```

Then, build and run the project using Android Studio.

## 🔥 Future Improvements
- User Authentication (Google Sign-In)
- Private Chats & Group Chats
- File Sharing Feature

## 🤝 Contributing
Feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!

## 📜 License
This project is licensed under the MIT License
