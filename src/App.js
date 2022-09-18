import "./App.css";
import { Route, Routes } from "react-router-dom";
import  HomePages  from "./pages/home/HomePages";
import  UserDetailPages  from "./pages/user-detail/UserDetailPages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/:id" element={<UserDetailPages />} />
      </Routes>
    </div>
  );
}

export default App;