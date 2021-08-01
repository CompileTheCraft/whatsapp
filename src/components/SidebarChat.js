import React from 'react';
import './SidebarChat.css';
// icons
import { Avatar } from '@material-ui/core';

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Contact name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
