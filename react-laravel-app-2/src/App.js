import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import ShowData from './ShowData';
import AddStudentData from './AddStudentData';
import UpdateStudentData from './UpdateStudentData';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import SerchData from './SerchData';


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Protected Cmp={ShowData} />} />
        <Route path="/add" element={<Protected Cmp={AddStudentData} />} />
        <Route path="/update" element={<Protected Cmp={UpdateStudentData} />} />
        <Route path="/update/:id" element={<Protected Cmp={UpdateStudentData} />} />
        <Route path="/serch" element={<Protected Cmp={SerchData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
