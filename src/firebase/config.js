import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBHDJv7EyN8h9SPae_lgC05Qt-Z3FiIvLQ",
    authDomain: "food-513b3.firebaseapp.com",
    projectId: "food-513b3",
    storageBucket: "food-513b3.appspot.com",
    messagingSenderId: "423914453051",
    appId: "1:423914453051:web:1633b8f70006bc8fd2c41e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
