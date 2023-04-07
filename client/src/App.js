import Navbar from './components/Navbar';
import Home from './components/Home.js';
import CreateUser from './components/CreateUser.js';
import UpdateUser from './components/UpdateUser.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateUser />} />
          <Route exact path="/update/user/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
