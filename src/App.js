import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./component/Jumbotron";
import Textbox from "./component/Textbox";
import Table from "./component/Table";
import EmployeeContext from "./utils/EmployeeContext";

import API from "./utils/api";

function App() {
  const [employeeState, setEmployeeState] = useState({
    employeeList: [],
    originalList: [],
    search: "",
  });

  useEffect(() => {
    API.getEmployee().then((res) => {
      console.log(res.data.results);
      setEmployeeState({
        ...employeeState,
        employeeList: res.data.results,
        originalList: res.data.results,
      });
    });
  }, []);

  const handleSubmit = (columnName) => {
    let newEmployeeList = employeeState.employeeList.sort((a, b) => {
      return a.name[columnName].localeCompare(b.name[columnName]);
    });

     setEmployeeState({
       ...employeeState, 
       employeeList:newEmployeeList
     })

  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEmployeeState({
      ...employeeState,

      [name]: value,
    });

    const newEmployeeList = employeeState.originalList.filter((person) => {
      return (
        person.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
        person.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    });

    setEmployeeState({
      ...employeeState,

      employeeList: newEmployeeList,
      search: value,
    });
    console.log(employeeState.employeeList);
  };
  return (
    <EmployeeContext.Provider value={employeeState}>
      <Jumbotron />
      <Textbox handleInputChange={handleInputChange} />
      <br />
      <Table handleSubmit = {
        handleSubmit
      }/>
    </EmployeeContext.Provider>
  );
}

export default App;
