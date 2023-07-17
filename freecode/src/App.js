import "./App.css";
import Nav from "./Component/Nav";
import Signup from "./Component/Signup";
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import SecondPage from "./Component/SecondPage";
import PrivateComponent from "./Component/PrivateComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Menu />} />
            <Route path="/secondPage" element={<SecondPage />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
