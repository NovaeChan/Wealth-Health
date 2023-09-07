import { Link } from 'react-router-dom';
import '../../style/components/__Header.scss'

export default function Header(){
    return(
        <header>
            <div className="header-title">
                <Link to="/"><h1>HRnet</h1></Link>
            </div>
            <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/EmployeeList">Employees</Link>
            </div>
        </header>
    )
}