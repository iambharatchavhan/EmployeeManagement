import React, { useState, useEffect } from "react";
import axios from "axios";

const useAllEmployees = () => {
  const employeeUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);


  useEffect(() => {
    const getAllEmployees = async () => {
      try {

        const response = await axios.get(employeeUrl);
       
        setIsLoading(false);
        setData(response.data.data);
        // console.log(response.data.data)

      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    getAllEmployees();
  }, [data]);

  return { data, isLoading, isError };
};

export default useAllEmployees;
