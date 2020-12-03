import React from 'react'
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from "reactstrap"
import axios from "axios"
import base_url from '../api/BootApi'
import { toast } from 'react-toastify'

const Course = ({ course, removeCourse }) => {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then((response)=>{
            toast.success("Course deleted!");
            removeCourse(id);
        }, (error)=>{
            toast.error("Internal Server Problem");
        })
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                
                <Container className="text-center">
                    <Button color="danger" 
                    onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;