// src/services/ChatService.ts
import { ref, push, onValue } from 'firebase/database';
import { db } from '../firebase'; // Firebase config

// Function to send a message to Firebase
export const sendMessage = async (message: string, sender: string) => {
  const messagesRef = ref(db, 'messages');
  const newMessage = {
    text: message,
    sender,
    timestamp: Date.now(),
  };
  
  // Push the new message to Firebase
  await push(messagesRef, newMessage);
};

// Function to fetch chat history from Firebase (last 50 messages)
export const fetchChatHistory = (callback: (messages: any[]) => void) => {
  const messagesRef = ref(db, 'messages');
  
  // Listen for real-time updates to the chat messages
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const messages = data ? Object.entries(data).map(([id, val]: any) => ({ ...val, id })) : [];
    callback(messages);
  });
};
