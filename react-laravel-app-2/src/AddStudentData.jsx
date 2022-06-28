import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'

const AddStudentData = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate();

  async function AddStudentData(e){
    e.preventDefault();
    //let item = {name, email, phone, image}
    //console.warn("data", item)

    const formData = new FormData();
    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('image_student',image)

    let result = await fetch("http://127.0.0.1:8000/api/AddDataStudent",{
      method:'POST',
      body:formData
    })
    result = await result.json();
    localStorage.setItem("student-data", JSON.stringify(result));
    history("/");
  }
  return (
    <div>
        <Header />
        <div className='container'>
        <br></br>
            <h1 className='text-center'>Add Student Data</h1>
            <br></br>
            <div className='col-sm-6 offset-3'>
            <input type="text" onChange={(e)=> setName(e.target.value)} placeholder='Your Name' className='form-control' />
            <br></br>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder='Your Email' className='form-control' />
            <br></br>
            <input type="text" onChange={(e)=> setPhone(e.target.value)} placeholder='Your Phone Number' className='form-control' />
            <br></br>
            <input type="file" onChange={(e)=> setImage(e.target.files[0])} placeholder='Your Image' className='form-control' />
            <br></br>
            <button onClick={AddStudentData} className='btn btn-success text-light'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default AddStudentData
