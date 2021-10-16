import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import './Sidebar.css';
import {IconButton, Avatar} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import {useState, useEffect} from 'react';
import db from './firebase';
import {useStateValue} from './StateProvider';
function Sidebar() {
    const [rooms,setRooms] = useState([]);
    const[{ user }, dispatch] = useStateValue();
    useEffect(() => {
       const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map((doc)=>
            ({
                id: doc.id,
                data : doc.data(),
            })
            ))
        );

        return () => {
           unsubscribe();
        }
       
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_headerLeft">
                    <IconButton>
                        <Avatar src={user?.photoURL}/>   
                    </IconButton>
                    <h3>{user?.displayName}</h3>
                </div>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
             <div className="sidebar_search">
                    <div className="sidebar_searchContainer">
                        <SearchOutlined/>
                        <input placeholder="Search or start new chat" type="text"/>
                    </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
               {rooms.map((room) => (
                   <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
               ))}
            </div>


        </div>
    );
}

export default Sidebar
