//react toolkit
import { useState, useEffect } from "react";
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
import { ThemeProvider, createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#2f15d1",

      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: "#A378FF",
    },
  },
  // navlinks: {
  //   marginLeft: themeOptions.spacing(10),
  //   display: "flex",
  // },
});

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <ThemeProvider theme={themeOptions}>
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route
                path="/"
                element={<HomePage user={user} setUser={setUser} />}
              />
              <Route path="/chats" element={<ChatPage user={user} />} />
              <Route path="/check-token" element={<CheckTokenPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </ThemeProvider>
    </main>
  );
}

export default App;
