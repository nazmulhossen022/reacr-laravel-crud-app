import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const SerchData = () => {


    const [serchData, setSerchData] = useState([])
    async function SerchDataStudent(key){
        if(key.length > 1){
            //
            let result = await fetch("http://127.0.0.1:8000/api/SeachData/"+key);
            result = await result.json();
            setSerchData(result);
            console.warn(serchData);

        }
    }

  return (
    <div>
        <Header />
        <div className='container'>
            <br></br>
          <h1 className='text-center'>Serch Data</h1>
          <br></br>
          <div className="col-sm-6 offset-sm-3">
          <input onChange={(e)=>SerchDataStudent(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
         <br></br>
          </div>

          {
            serchData.length > 0?
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>

                    {
                        serchData.map((item,index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td><img style={{width:140}} src={"http://127.0.0.1:8000/"+item.image_student} /></td>
                            </tr>
                        ))
                    }
            </tbody>
        </Table>

        :
          null
          }
         
            <br></br>
        </div>
    </div>
  )
}

export default SerchData
