import React, { useEffect, useState } from 'react'
import Course from './Course'
import axios from 'axios'
import base_url from './../api/BootApi';
import { toast } from 'react-toastify';

const AllCourses = () => {

    useEffect(()=> {
        document.title="All Courses";
    }, [])

    // function to call server:
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                //console.log(response);
                console.log(response.data);
                // toast.success("Courses has been loaded successfully!", {
                //     position:"bottom-center"
                // });
                setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went worng!", {
                    position:"bottom-center"
                });
            }
        )
    }

    //loading Course Function
    useEffect(()=>{
        getAllCoursesFromServer();
    }, [])

    const [courses, setCourses] = useState([
        // {title: "Java Course", description: "This is Java Course."},
        // {title: "Django Course", description: "This is Django Course."},
        // {title: "React JS Course", description: "This is React JS Course."},
        // {title: "Spring Boot Course", description: "This is Spring Boot Course."}
    ]);

    const removeCourseById=(id)=> {
        setCourses(courses.filter((c)=> c.id != id));
    }

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows.</p> 

            {
                courses.length > 0 
                ? courses.map((item) => <Course key={item.id} course = {item} removeCourse={removeCourseById}/>)
                : "No Courses"
            }
        </div>
    )
}

export default AllCourses;