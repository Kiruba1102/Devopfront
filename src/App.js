import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './payrollproject/Components/Header';
import Employee from './payrollproject/Components/Employee';
import Salary from './payrollproject/Components/Salary';
import Salaryfindall from './payrollproject/Components/Salaryfindall';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path="/" element={<Header />}></Route>
          <Route exact path="/emp" element={<Employee />}></Route>
          <Route exact path="/sal" element={< Salary/>}></Route>
          <Route exact path="/salfind" element={<Salaryfindall />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
