import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./update.css";
import bg from "../assets/bg2.png";
import { useNavigate } from "react-router-dom"; 

const UpdateEmp = () => {
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const handleForm = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/update/${id}`,
        employeeInfo
      );

      if (response.data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    salary: "",
  });

  const handleInputs = (e) => {
    setEmployeeInfo({ ...employeeInfo, [e.target.name]: e.target.value });
  };

  return (
    <section id="post-employees2">
      <form className="form">
        <h3 className="heading">Update Employee Details</h3>

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
          onClick={(e) => handleForm(e, id)}
        >
          SUBMIT
        </button>
      </form>
      <div className="side-view">
        <img src={bg} alt="" />
      </div>
    </section>
  );
};

export default UpdateEmp;
