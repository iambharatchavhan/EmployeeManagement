import axios from "axios";
import React, { useEffect } from "react";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import {
  LuBadgeInfo,
  LuClipboardX,
  LuClipboardSignature,
} from "react-icons/lu";

import { useNavigate } from "react-router-dom";

const SingleEmployeeData = ({ data }) => {
   
  const navigate = useNavigate()



    const handelDelete = async (id) =>{
      // console.log(id)
      try{
        const response = await axios.delete(`http://localhost:3000/api/v1/delete-employee/${id}`) 
      
      }catch(error){
        console.log(error.message)
      }
    }


   const handleInformation = (id)=>{
       navigate(`/information/${id}`)
   }


   const handleUpdate = (id) => {
     navigate(`/update/${id}`)
   }


  return (
    <>
      {

        data.map((employee) => (
        <div id="single-EmployeeData" key={employee._id}>
          <div className="profile">
            {employee.gender == "male" ? (
              <FcBusinessman />
            ) : (
              <FcBusinesswoman />
            )}
          </div>
          <div className="details">
            <p>
              Name: {employee.firstName} {employee.lastName}
            </p>
            <p>Gender:{employee.gender}</p>
            <p>Salary:{employee.salary}LPA</p>
          </div>
          <div className="button-container">
           
            <button onClick={()=>handleInformation(employee._id)}>
              <LuBadgeInfo />
            </button>
            <button onClick={()=>handleUpdate(employee._id)}>
              <LuClipboardSignature />
            </button>
            <button onClick={()=>handelDelete(employee._id)}>
              <LuClipboardX />
            </button>
          </div>
        </div>
      ))


      }
    </>
  );
};

export default SingleEmployeeData;
