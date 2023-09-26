import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../components/Dropdown/Dropdown";
import Modal from 'whealthhealth-modal-react-component';
import Header from '../components/Header/Header'

import States from "../assets/data/States.json";
import Departements from "../assets/data/Departements.json";

import "../style/pages/CreateEmployee.scss"

const CreateEmployee = () => {
    //Modal
    const [displayModal, setDisplayModal] = useState(false);

    //Employee
    const [birthDate, setBirthDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [formValidated, setFormValidated] = useState(false);
    const [error, setError] = useState([]);
    const [employee, setEmployee] = useState({
        "firstName": "",
        "lastName": "",
        "birth": "",
        "startDate" : "",
        "state": States[0].abbreviation,
        "zipCode": "",
        "street": "",
        "city" : "",
        "department": Departements[0].abbreviation
    })
    
    //Datepicker
    const handleDateChange = (name, value) => {
        setEmployee({
            ...employee, [name]: new Date(value).toLocaleDateString("en")
        });
    }

    //Display modal
    const handleOnclick = () => {
        setDisplayModal(true);
    }

    //Dropdown
    const handleDropdownChange = (name, value) => {
        setEmployee({
            ...employee, [name]: value
        });
    }

    //Form
    const handleFormChange = (event) => {
        setEmployee({
            ...employee, [event.target.name]: event.target.value
        })
    }

    //Save 
    const saveForm = () => {
        //Checking if the fields are filled
        setError([]);
        console.log(error);
        Object.keys(employee).forEach((input, index) => {
            if(Object.values(employee)[index] === ""){
                setFormValidated(false);
                setError(error => [...error, input]);
            }
        })
        if(error.length === 0){
            setFormValidated(true);
        }
    }

    useEffect(() => {
        if(formValidated && error.length === 0){
            setDisplayModal(true);
            const employees = JSON.parse(localStorage.getItem("employees")) || [];
            employees.push(employee);
            console.log(employee)
            localStorage.setItem("employees", JSON.stringify(employees));
            //Resetting the form
            setEmployee({
                "firstName": "",
                "lastName": "",
                "birth": "",
                "startDate" : "",
                "state": States[0].abbreviation,
                "zipCode": "",
                "street": "",
                "city" : "",
                "department": Departements[0].abbreviation
            })
            document.getElementById("create-employee").reset();
            setBirthDate("");
            setStartDate("");
        }
        }, [error])

    return (
        <>
            <Header/>
            <div className="wrapper">
                <div className="container">
                    <h2 className="title">Create Employee</h2>
                    {/* Form */}
                    <form action="#" id="create-employee">
                        <div className="form-details">
                            <span className="form-category">Personal informations</span>
                        </div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" onChange={handleFormChange} placeholder="Your first name"/>

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" onChange={handleFormChange} placeholder="Your last name"/>

                        <div className="form-flex">
                            <div className="form-flex-wrapper">                            
                                <label htmlFor="date-of-birth" className="form-flex-label">Date of Birth</label>
                                <ReactDatePicker selected={birthDate} onChange={(date) => handleDateChange("birth", date, setBirthDate(date))} placeholderText="Your birth date"/>
                            </div>
                            <div className="form-flex-wrapper">
                                <label htmlFor="start-date" className="form-flex-label">Start Date</label>
                                <ReactDatePicker selected={startDate} onChange={(date) => handleDateChange("startDate", date, setStartDate(date))} placeholderText="Your start date"/>
                            </div>
                        </div>

                        <div className="form-details">
                            <span className="form-category">Address</span>
                        </div>
                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" onChange={handleFormChange} placeholder="Your street name"/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={handleFormChange} placeholder="Your city name"/>

                        <div className="form-flex">
                            <div className="form-flex-wrapper">
                                <label htmlFor="state" className="form-flex-label">State</label>
                                <Dropdown name="state" onChange={(value) =>handleDropdownChange("state", value)} options={States}/>
                            </div>
                            <div className="form-flex-wrapper">
                                <label htmlFor="zip-code" className="form-flex-label">Zip Code</label>
                                <input id="zip-code" type="number" name="zipCode" onChange={handleFormChange} placeholder="Your ZIP code"/>
                            </div>
                        </div>


                        <div className="form-details">
                            <span className="form-category">Department</span>
                        </div>
                        <label htmlFor="department">Department</label>
                        <Dropdown name="department" onChange={(value) => handleDropdownChange("department", value)} options={Departements}/>
                    </form>
                    <button onClick={saveForm}>Save</button>
                    {/* Modal */}
                    <Modal content="Employee Created!" displayModal={displayModal} setDisplayModal={setDisplayModal}/>
                </div>
            </div>
        </>
    )
}

export default CreateEmployee;