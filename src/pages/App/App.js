//react toolkit
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//utilities
import { getUser } from "../../utilities/users-service";
//pages
import AuthPage from "../AuthPage/AuthPage";
import CheckTokenPage from "../CheckTokenPage/CheckTokenPage";
import Home from "./Home/Home";
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
          {/* set up own routes */}
            <Route path="/home" element={<Home />} />
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
