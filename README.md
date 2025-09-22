# 📝 React Native To-Do List App

A simple, modern **To-Do List mobile app** built using **React Native (Expo)**.  
Keep track of your tasks, mark them as completed, and never lose your data — everything is saved locally on your device.

---

## Features Implemented

- **Add Tasks:** Quickly add new tasks using the input at the top.  
- **View Tasks:** Pending and completed tasks are clearly separated.  
- **Mark as Completed:** Toggle tasks between pending and completed with a tap.  
- **Edit Tasks:** Update your task details easily using the edit modal.  
- **Delete Tasks:** Remove tasks you no longer need.  
- **Persistent Storage:** All tasks are saved locally using AsyncStorage — your data stays even after closing the app.  
- **Responsive UI:** Clean and modern design for mobile screens.

---

## Setup & Running the App

Follow these simple steps to get the app running on your phone or emulator:

1. **Install Node.js & npm** (v14 or above recommended) from [nodejs.org](https://nodejs.org).  
2. **Install Expo CLI** globally (optional, but convenient):  
   ```bash
   npm install -g expo-cli
Clone the repository or download the project zip to your local machine.

Open the project folder in your terminal and install dependencies:

     npm install

     Start the app using Expo:

     npx expo start

     Run the app:

     On your phone, scan the QR code with the Expo Go app (iOS/Android).

     On an emulator, click “Run on Android/iOS simulator” from the Expo CLI.

Screenshots


<img width="367" height="731" alt="chrome_rSkEzGrrCQ" src="https://github.com/user-attachments/assets/636661ca-e942-4d55-ae29-70152bfc491a" />

<img width="367" height="734" alt="chrome_9xmlPomLPo" src="https://github.com/user-attachments/assets/bb71c1ce-7ea3-4820-ae46-a2f5e0fe5741" />

Notes

Tasks are stored under the key @tasks in AsyncStorage.

Both pending and completed tasks are saved, so you won’t lose anything even if you close the app.

Designed with simplicity and usability in mind for everyday task management.
