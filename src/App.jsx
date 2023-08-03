import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmployeeList from './pages/EmployeeList.jsx'
import CreateEmployee from './pages/CreateEmployee.jsx'

import './style/main.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CreateEmployee />}></Route>
        <Route exact path="/EmployeeList" element={<EmployeeList />}></Route>
        <Route exact path="/list" element={<CreateEmployee />}></Route>
      </Routes>
    </Router>
  )
}

export default App
