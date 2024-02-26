import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./empinfo.css";
import male from "../assets/maleAvatar.png";
import female from "../assets/womanid.png";
import axios from "axios";

const EmployeeInfo = () => {
  const [employee, setEmployee] = useState([]);

  const createdAt = new Date(employee.createdAt);
  const updatedAt = new Date(employee.updatedAt);

  const createdDateString = createdAt.toLocaleDateString();
  const createdTimeString = createdAt.toLocaleTimeString();

  const updatedDateString = updatedAt.toLocaleDateString();
  const updatedTimeString = updatedAt.toLocaleTimeString();

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const handleEmployee = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/getSingleEmployee/${id}`
        );
        if (!response.data || !response.data.data) {
          console.log("Error While Fetching employee");
        }

        setEmployee(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    handleEmployee(id);
  }, []);

  //  console.log(employee.createdAt, "updated", employee.updatedAt)

  //  console.log("Created Date:",createdDateString , "and time" , createdTimeString )
  //  console.log("Created Date:",updatedDateString , "and time" , updatedTimeString )

  return (
    <section id="employee-card">
      <div className="employee-information">
        <div className={employee.gender == "male" ? "left" : "left-female"}>
          <div className="avatar-container">
            <img src={employee.gender == "male" ? male : female} alt="" />
          </div>
          <div>
             <p className="time">Registered Time:  {createdTimeString}</p>
             <p className="time">Last Updated Time:{updatedTimeString}</p>
            <p className="emp-id">ID:{id}</p>
          </div>
        </div>
        <div className={employee.gender == "male" ? "right" : "right-female"}>
          <p>Name : {employee.firstName} {employee.lastName}</p>
          <p>Age: {employee.age} </p>
          <p>Gender: {employee.gender}</p>
          <p>Salary: {employee.salary}LPA</p>
          <p>Registered Date: {createdDateString}</p>
          <p>Last Updated Date: {updatedDateString} </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeInfo;
