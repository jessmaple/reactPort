import React,{createContext} from "react"

const EmployeeContext = createContext({
    employeeList: [],
    orginalList: [],
    search: ""
})

export default EmployeeContext