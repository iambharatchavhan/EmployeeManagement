import React, { useState } from "react";
import axios from "axios";
import "./addEmployee.css";
import { useNavigate } from "react-router-dom";
import formImg from "../assets/form.png";

const AddEmployees = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    salary: "",
  });

  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    // data submission logic
    try {
      const postingData = axios.post(
        "http://localhost:3000/api/v1/create-employee",
        employeeInfo
      );
      setEmployeeInfo({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        salary: "",
      });

      const response = await postingData;
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputs = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
  };

  return (
    <section id="post-employees">
      <form className="form">
        <h3 className="heading">Fill Employee Details</h3>

        <div className="name-inputs">
          <input
            type="text"
            value={employeeInfo.firstName}
            name="firstName"
            placeholder="Enter first name"
            onChange={handleInputs}
          />
          <input
            type="text"
            value={employeeInfo.lastName}
            name="lastName"
            placeholder="Enter last name"
            onChange={handleInputs}
          />
        </div>
        <div className="select-container">
          <select
            className="age-select"
            name="age"
            value={employeeInfo.age}
            onChange={handleInputs}
          >
            <option value="">Select Age</option>
            {[...Array(43)].map((_, index) => (
              <option key={index} value={18 + index}>
                {18 + index}
              </option>
            ))}
          </select>
          <select
            className="age-select"
            name="salary"
            value={employeeInfo.salary}
            onChange={handleInputs}
          >
            <option value="">Select Salary</option>
            {[...Array(20)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="gender-container">
          <div className="radio-selector">
            <label htmlFor="male">Male:</label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={employeeInfo.gender == "male"}
              onChange={handleInputs}
            />
            <label htmlFor="female">Female:</label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={employeeInfo.gender == "female"}
              onChange={handleInputs}
            />
          </div>
        </div>

        <button
          className="btn-submit"
          type="submit"
          onClick={(e) => handleForm(e)}
        >
          SUBMIT
        </button>
      </form>
      <div className="side-view">
        <img src={formImg} alt="" />
      </div>
    </section>
  );
};

export default AddEmployees;
