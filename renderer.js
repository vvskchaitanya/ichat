const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let username = localStorage.getItem('username');
if (!username) {
    username = prompt('Enter your name:');
    localStorage.setItem('username', username);
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim() === '') return;
    db.collection('messages').add({
        user: username,
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    document.getElementById('message').value = '';
}

db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML = '';
    snapshot.forEach(doc => {
        const msg = doc.data();
        chatWindow.innerHTML += `<p><strong>${msg.user}:</strong> ${msg.text}</p>`;
    });
});
