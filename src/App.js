import "./App.css";

import Home from "./app/components/Home";
import Login from "./app/components/Login";
import Profile from "./app/components/Profile";
import Search from "./app/components/Search";
import Signup from "./app/components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Header />

        <Router>
          <Routes>
            <Route path="/Login" exact={true} element={<Login />}></Route>
            <Route path="/Profile" exact={true} element={<Profile />}></Route>
            <Route path="/Signup" exact={true} element={<Signup />}></Route>
            <Route path="/Search" exact={true} element={<Search />}></Route>
            <Route path="/" exact={true} element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />

      
    </div>
  );
}

export default App;
