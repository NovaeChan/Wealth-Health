import Header from '../components/Header/Header'
import '../style/pages/EmployeeList.scss'
import DataTable from 'react-data-table-component';

const EmployeeList = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    console.log(employees);

    //React Data table columns
    const columns = [
        {
          name: 'First Name',
          selector: (row) => row.firstName,
        },
        {
          name: 'Last Name',
          selector: (row) => row.lastName,
        },
        {
          name: 'Start Date',
          selector: (row) => row.startDate,
        },
        {
          name: 'Department',
          selector: (row) => row.department,
        },
        {
          name: 'Date of Birth',
          selector: (row) => row.birth,
        },
        {
          name: 'Street',
          selector: (row) => row.street,
        },
        {
          name: 'City',
          selector: (row) => row.city,
        },
        {
          name: 'State',
          selector: (row) => row.state,
        },
        {
          name: 'Zip Code',
          selector: (row) => row.zipCode,
        },
      ];

    return (
        <>
            <Header />
            <div id="employee-div" className='container'>
                <h2>Current Employees</h2>
                {
                    employees.length == 0 && 
                    <span className="noData">There is no employee at the moment</span>
                }
                {
                    employees.length !== 0 &&
                    <DataTable
                        columns={columns}
                        data={employees}
                    />                
                }
            </div>

        </>
    )
}

export default EmployeeList;