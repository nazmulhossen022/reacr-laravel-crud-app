import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'

const UpdateStudentData = () => {

  let params = useParams();
  let getId = params.id.match(/\d+/);
  const [data,setData] = useState([]);


    async function getStudentData(){
        let result = await fetch("http://127.0.0.1:8000/api/getDataStudent/"+getId);
        result = await result.json();
        setData(result);
        
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)
        setImage(data.image_student)
    }
   // console.warn(data)
    useEffect(()=>{
      getStudentData();
    },[])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate();

  async function UpdateStudentData(id){
    //let item = {name, email, phone, image}
    //console.warn("data", item)

    const formData = new FormData();
    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)
    formData.append('image_student',image)

    let result = await fetch("http://127.0.0.1:8000/api/UpdateDataStudent/"+getId+"?_method=PUT",{
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
            <h1 className='text-center'>Update Student Data</h1>
            <br></br>
            <div className='col-sm-6 offset-3'>
            <input type="text" onChange={(e)=> setName(e.target.value)} defaultValue={data.name} placeholder='Your Name' className='form-control' />
            <br></br>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} defaultValue={data.email} placeholder='Your Email' className='form-control' />
            <br></br>
            <input type="text" onChange={(e)=> setPhone(e.target.value)} defaultValue={data.phone} placeholder='Your Phone Number' className='form-control' />
            <br></br>
            <div className="row">
                <div className="col">
                    <input type="file" onChange={(e)=> setImage(e.target.files[0])} defaultValue={data.image_student} className="form-control" placeholder="Your Image" aria-label="Your Image" />
                </div>
                <div className="col">
                <img style={{width:120}} src={"http://127.0.0.1:8000/"+data.image_student} />
                </div>
            </div>
            <br></br>
            <button onClick={()=>UpdateStudentData(data.id)} className='btn btn-success text-light'>Update</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateStudentData
