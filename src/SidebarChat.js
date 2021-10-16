import React from 'react'
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import Sidebar from './Sidebar';
import firebase from './firebase';
import db from './firebase';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { SettingsEthernetRounded } from '@material-ui/icons';
function SidebarChat({id, name, addNewChat}) {
    const[sed,setSed] = useState(" ");
    const [messages,setMessages] = useState(" ");

    useEffect(() => {

      setSed(Math.floor(Math.random() * 5000));
      if(id){
          db.collection('rooms')
          .doc(id)
          .collection('messages')
          .orderBy('timeStamp','desc')
          .onSnapshot((snapshot) => (
            setMessages(snapshot.docs.map((doc) => 
            doc.data()))
          ))

      }
    }, [])
    const createChat = () => {
        const roomName = prompt("Please enter name for Chat");
        if (roomName) {
            // krna hai kuch yaha
            db.collection("rooms").add({
                name: roomName,
            })
        }
    }
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${sed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ): (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
