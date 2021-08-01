import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('49df0990d70f4a97d2f8', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar Component */}
        <Sidebar />
        {/* Chat Component */}
        <Chat
          messages={messages}
        />
      </div>
    </div>
  );
}

export default App;
