import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState,useEffect } from 'react';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function Add() {

  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState('')

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
     let uniqueId=ids.slice(0,8)

    employee.push(
      {
        id:uniqueId,
        name:uname,
        age:age,
        desig:desig,
        salary:salary
      }
    )
    history('/')
  }

  return (
    <div>
       <h1 className='text-center text-warning p-5 mt-3'>Add Employee Details</h1>
        <div className='text-center p-2'>
          <p className="p-3"></p>
        </div>
        <Container>
          <Row>
            <Col md={4}>

              <img className='w-75 mt-4' src='https://cdn-icons-png.flaticon.com/512/3001/3001778.png'></img>

            </Col>
            <Col md={8}>
            
            <Form className='w-50'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">

        <Form.Label className='mt-2'>Employee Name</Form.Label>
        <Form.Control  type="text" placeholder='Name' required 
        onChange={(e)=>setUname(e.target.value)}/>
      
        <Form.Label className='mt-2'>Age</Form.Label>
        <Form.Control  type="text" placeholder='Age' required 
        onChange={(e)=>setAge(e.target.value)}/>

        <Form.Label className='mt-2'>Designation</Form.Label>
        <Form.Control type="text" placeholder='Designation' required 
        onChange={(e)=>setDesig(e.target.value)}/>

        <Form.Label className='mt-2'>Salary</Form.Label>
        <Form.Control  type="text" placeholder='Salary' required 
        onChange={(e)=>setSalary(e.target.value)}/>
           
      </Form.Group>

      <Button onClick={(e)=>handleAdd(e)} className='mt-2' variant="primary" type="submit"> ADD</Button>

    </Form>

            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default Add