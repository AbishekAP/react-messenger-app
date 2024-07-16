import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

const Messages = ({ groupId, user, groupName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "groups", groupId, "messages"),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
    });
    return () => unsubscribe();
  }, [groupId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      await addDoc(collection(db, "groups", groupId, "messages"), {
        text: newMessage,
        createdAt: new Date(),
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      setNewMessage("");
    }
  };

  return (
    <section className="messages-container">
      <div className="messages-header">
        <div className="empty-img">{groupName[0]}</div>
        <h2>{groupName}</h2>
      </div>
        <div className="messages">
          {messages.map((message) => (
            <div
              className="message"
              key={message.id}
            >
              {message.photoURL ? (
                <img
                  src={message.photoURL}
                  alt={message.displayName}
                  style={{
                   
                  }}
                />
              ) : (
                <div
                className="empty-img"
                >
                  {message.displayName[0]}
                </div>
              )}
              <div className="message-content">
                <h4>{message.displayName}</h4>
                <p>{message.text}</p> 
              </div>
            </div>
          ))}
        </div>
        <div className="message-input-container">
        <form  onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Enter your message.."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            />
          <FaPaperPlane />
        </form>
            </div>
    </section>
  );
};

export default Messages;
