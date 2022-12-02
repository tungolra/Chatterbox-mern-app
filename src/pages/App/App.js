//react toolkit
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//utilities
import { getUser } from "../../utilities/UserRequests/users-service";
//pages
import AuthPage from "../AuthPage/AuthPage";
import CheckTokenPage from "../CheckTokenPage/CheckTokenPage";
import HomePage from "../HomePage/HomePage";
import ChatPage from "../ChatPage/ChatPage";
//components
import NavBar from "../../components/NavBar/NavBar";
//styles
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/check-token" element={<CheckTokenPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
