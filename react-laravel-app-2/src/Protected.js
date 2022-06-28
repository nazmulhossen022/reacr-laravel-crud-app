import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    let Cmp = props.Cmp
    const history = useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem("student-user-info")){
        history('/login')
      }
    },[])
  return (
    <div>
      <Cmp />
    </div>
  )
}

export default Protected
