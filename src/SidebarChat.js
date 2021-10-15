import React from 'react'
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
import Sidebar from './Sidebar';
import firebase from './firebase';
import db from './firebase';
import {Link} from 'react-router-dom';
function SidebarChat({id, name, addNewChat}) {
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
                <Avatar src='https://www.statnews.com/wp-content/uploads/2021/01/image0-645x645.jpeg'/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>This the last message.</p>
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
