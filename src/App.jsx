import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle } from "./firebase";
import Groups from "./Components/Groups";
import Messages from "./Components/Messages";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user ? (
        <>
          <Header user={user} />
          <Groups
            user={user}
            setSelectedGroup={setSelectedGroup}
            selectedGroup={selectedGroup}
          />
          <main>
            {selectedGroup ? (
              <Messages
                groupId={selectedGroup.id}
                groupName={selectedGroup.name}
                user={user}
              />
            ) : (
              <section className="empty-messages">
                <h1>welcome</h1>
                <p>Chat on securely!</p>
              </section>
            )}
          </main>
          <Footer />
        </>
      ) : (
        <div className="signin-container">
          <h1>Welcome</h1>
          <p>Chat on securely!</p>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      )}
    </>
  );
};

export default App;
