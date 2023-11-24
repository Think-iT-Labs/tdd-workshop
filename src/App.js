import {useState} from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  function handleTextChange(event) {
    setMessage(event.target.value)
  }

  return (
    <>
      <input type="text" data-testid="messageText" onChange={handleTextChange} />
      <button data-testid="sendButton"/>
      {message}
    </>
  );
}
