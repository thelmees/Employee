import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {
  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)

useEffect(()=>{
  setId(JSON.parse(localStorage.getItem("id")))
  setUname(localStorage.getItem("uname"))
  setAge(JSON.parse(localStorage.getItem("age")))
  setDesig(localStorage.getItem("desig"))
  setSalary(JSON.parse(localStorage.getItem("salary")))
},[])

var index=employee.map((item)=>item.id).indexOf(id)
let history=useNavigate()


const handleUpdate=(e)=>{
  e.preventDefault()

let emp = employee[index]
emp.name=uname
emp.age=age
emp.desig=desig
emp.salary=salary

history('/')

}

console.log(id);


  return (
    <>
        <h1 className='text-center text-warning p-5 mt-3'>Update Employee Details</h1>
        <div className='text-center p-2'>
          <p className="p-3"></p>
        </div>
        <Container>
          <Row>
            <Col md={4}>

              <img className='w-75 mt-4' src='https://cdn-icons-png.flaticon.com/512/3001/3001764.png'></img>

            </Col>
            <Col md={8}>
            
            <Form className='w-50'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">

        <Form.Label className='mt-2'>Employee Name</Form.Label>
        <Form.Control value={uname} type="text" onChange={(e)=>setUname(e.target.value)} />
      
        <Form.Label className='mt-2'>Age</Form.Label>
        <Form.Control value={age} type="text" onChange={(e)=>setAge(e.target.value)}  />

        <Form.Label className='mt-2'>Designation</Form.Label>
        <Form.Control value={desig} type="text" onChange={(e)=>setDesig(e.target.value)} />

        <Form.Label className='mt-2'>Salary</Form.Label>
        <Form.Control value={salary} type="text" onChange={(e)=>setSalary(e.target.value)}  />
           
      </Form.Group>

      <Button onClick={(e)=>handleUpdate(e)} className='mt-2' variant="primary" type="submit"> Update</Button>

    </Form>

            </Col>
          </Row>
        </Container>
    </>
    
  )
}

export default Edit