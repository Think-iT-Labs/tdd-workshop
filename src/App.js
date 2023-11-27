import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [inputText, setInputText] = useState("");

  function handleTextChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit() {
    setMessage(inputText);
    setInputText("");
  }
  return (
    <>
      <input
        type="text"
        data-testid="messageText"
        onChange={handleTextChange}
        value={inputText}
      />
      <button onClick={handleSubmit} data-testid="sendButton">
        Submit
      </button>
      <div>{message}</div>
    </>
  );
}
