import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ShowData = () => {
    const [data,setData] = useState([]);
    async function getStudentData(){
        let result = await fetch("http://127.0.0.1:8000/api/ShowDataStudent");
        result = await result.json();
        setData(result);  
    }
    useEffect(()=>{
        getStudentData();
    },[])

    async function DeleteData(id){
        let result = await fetch("http://127.0.0.1:8000/api/DeleteDataStudent/"+id,{
            method:'DELETE'
        });
        result = await result.json();
        getStudentData();
        //console.warn(result)
    }

  return (
    <div>
        <Header />
        <div className='container'>
            <br></br>
          <h1 className='text-center'>Show Data</h1>
          <br></br>
          <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Opthion</th>
                    </tr>
                </thead>
                <tbody>

                        {
                            data.map((item,index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><img style={{width:140}} src={"http://127.0.0.1:8000/"+item.image_student} /></td>
                                    <td>
                                        <Link to={"update/"+item.id} className='btn btn-warning'>Edit</Link> &nbsp;
                                        <button onClick={()=> DeleteData(item.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default ShowData
