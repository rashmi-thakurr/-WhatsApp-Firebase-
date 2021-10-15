import React from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert, MessageSharp} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import db from './firebase';
function Chat() {
    const [input,setInput] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState(" ");

    useEffect(() => {
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
               setRoomName(snapshot.data().name)
           ))
       }
    }, [roomId])
    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    }
    return (
        <div className="chat">
           <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ... </p>
                </div>
                <div className="header_Right"/>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                     <IconButton>
                        <AttachFile/>
                    </IconButton>
                     <IconButton>
                       <MoreVert/>
                    </IconButton>
                </div>
                 <div className="chat_body">
                        <p className={`chat_message ${ true && 'chat_reciever'}`}>
                        <span className="chat_name">Name</span>
                        message
                        <span className="chat_timeStamp">time</span>
                        </p>
                   
                </div>
                <div className="chat_footer">
                    <InsertEmoticonIcon/>
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                           placeholder="Type a message"
                           type="text"
                        />
                        <button onClick={sendMessage} type="submit">Send a message</button>
                    </form>
                    <MicIcon/>
                </div>
           </div>
       
    )
}

export default Chat
