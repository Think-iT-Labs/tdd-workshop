"use client"
import { useState } from "react";

export const Sample = ({ onLogin = () => {} }) => {
  const [disabled, setDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        data-testid="username-input"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        data-testid="password-input"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="text-white" name="Login" disabled={!username && !password} onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
