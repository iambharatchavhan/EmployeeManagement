import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AddEmployees from "./components/AddEmployees";
import EmployeeInfo from "./components/EmployeeInfo";
import UpdateEmp from "./components/UpdateEmp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-entry" element={<AddEmployees />} />
          <Route path="/information/:id" element={<EmployeeInfo />} />
          <Route path="/update/:id" element={<UpdateEmp/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
