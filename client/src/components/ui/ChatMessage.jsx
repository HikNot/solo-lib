import React from 'react';

export default function ChatMessage({ user, messages }) {
    // console.log(messages[0].User.name);
    // console.log(messages);
    
    
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: user.id === messages.userId ? 'flex-end' : 'flex-start',
      }}
    >
      {messages.body}&nbsp;&nbsp;<i>-{messages.User?.name}</i>
    </div>
  );
}
