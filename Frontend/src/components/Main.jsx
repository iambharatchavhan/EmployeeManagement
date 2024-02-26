import React, { useEffect, useState } from "react";
import "./main.css";
import SingleEmployeeData from "./SingleEmployeeData";
import useAllEmployees from "../customHoocks/useAllemployees";
import Error from "./Error";
import NotFound from "./NotFound";
const Main = () => {
  const { data, isLoading, isError } = useAllEmployees();
  const [searchData, setSearchData] = useState("");

  const filteredData = data.filter((employee) =>
     employee?.firstName.toLowerCase().includes(searchData.toLowerCase())
  );


  return (
    <section id="main">
      <div className="search-container">
        <input type="search" placeholder="Search here..." 
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}

        
        />
        <p>Employee Management</p>
      </div>
      { !filteredData ? (<SingleEmployeeData data={data} />) : !filteredData.length ? (<NotFound/>) : (<SingleEmployeeData data={filteredData}/>) }
      {isLoading && <h1> Loading.... </h1>}
      {isError && <Error/>}
    </section>
  );
};

export default Main;
