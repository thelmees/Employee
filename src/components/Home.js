import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { json, Link,useNavigate } from 'react-router-dom';

function Home() {

    let history=useNavigate()
    const handleDelete=(id)=>{
        // array od ids
        let index = employee.map(item=>item.id).indexOf(id)
        employee.splice(index,1)

        history('/')
    }

    const handleEdit=(id,uname,age,desig,salary)=>{
        localStorage.setItem("id",JSON.stringify(id))
        localStorage.setItem("uname",uname)
        localStorage.setItem("age",JSON.stringify(age))
        localStorage.setItem("desig",desig)
        localStorage.setItem("salary",JSON.stringify(salary))
    }

    return (
        <>
            <h1 className='text-center p-2 mt-4 text-warning'>Employee Management System</h1>
            <div className='text-center'>
                <p className='p-5'>
                 It accomplishes these goals largely by automating labor-intensive,
                 administrative tasks and using analytics to drive business decisions
                </p>
         <Link to='/add'>
                <Button className='mt-3' variant="outline-success">Add New Employee<i class="fa-solid fa-user-plus ms-2"></i></Button>
         </Link>
                <Table striped bordered hover style={{ margin: '10rem', width: "75%" }}>
                    <thead>
                        <tr className='border border-primary'>
                            <th>id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee && employee.length > 0 ?
                                employee.map(item => (
                                    <tr className='border border-primary'>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.desig}</td>
                                        <td>{item.salary}</td>
                                        <td>

                                    <Link to='/edit'>
                                            <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} className='ms-2 me-2' variant="primary"><i class="fa-solid fa-pen"></i></Button>
                                    </Link>
                                            <Button onClick={()=>handleDelete(item.id)} className='ms-2 me-2' variant="dark"><i class="fa-regular fa-trash-can"></i></Button>
                                        </td>
                                    </tr>
                                ))
                                : 'no table data'
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Home