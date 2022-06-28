import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'

const Login = () => {

  useEffect(()=>{
    if(localStorage.getItem('student-user-info'))
    history("/")
  },[]);

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const history = useNavigate();

  async function LoginUser(e){
    e.preventDefault();
    let item = {email, password}
    let result = await fetch("http://127.0.0.1:8000/api/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(item)
    })
    result = await result.json();
    localStorage.setItem("student-user-info", JSON.stringify(result));
    history('/')
    //console.warn(result)
  }

  return (
    <div>
        <Header />
        <div className="container">
            <br></br>
            <h1 className='text-center'>login</h1>
            <br></br>
            <div className='col-sm-6 offset-3'>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='User Name or Email' className='form-control' />
            <br></br>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Your Password' className='form-control' />
            <br></br>
            <button onClick={ LoginUser } className='btn btn-success text-light'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login
