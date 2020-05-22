import React , {useContext}from "react";
import EmployeeContext from "../../utils/EmployeeContext"
export default function Textbox({handleInputChange}){
    const employeeState = useContext(EmployeeContext)
   return(
       <div>
           <input type="text" name="search" value= {employeeState.search} onChange = {handleInputChange}  className="textBox"/>
          
       </div>
   )
}