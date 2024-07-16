import React, { useState, useEffect } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import {FaSquarePlus} from 'react-icons/fa6'

const Groups = ({ user, setSelectedGroup,selectedGroup }) => {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "groups"), (snapshot) => {
      setGroups(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const createNewGroup = async (e) => {
    e.preventDefault();
    if (newGroupName.trim()) {
      await addDoc(collection(db, "groups"), {
        name: newGroupName,
      });
      setNewGroupName("");
    }
  };

  return (
    <aside>
      <div className="aside-header">
        <h2>Chats</h2>
        <form className="add-group-container" onSubmit={createNewGroup}>
        <FaSquarePlus/>
        <input
          type="text"
          placeholder="create group"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          />
          </form>
          </div>
        <ul>
          {groups.map((group) => (
            <li  key={group.id} onClick={() => setSelectedGroup(group)}>
              <div className="empty-img">
              {group.name[0]}
              </div>
                {group.name}
            </li>
          ))}
        </ul>
    </aside>
  );
};

export default Groups;
