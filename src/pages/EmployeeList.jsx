import { NavLink } from 'react-router-dom';

import '../style/pages/EmployeeList.scss'

const EmployeeList = () => {
    return (
        <div id="employee-div" className='container'>
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList;