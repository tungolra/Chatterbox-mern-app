import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      App!
      <NavBar />
      {user ? (
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}

export default App;
