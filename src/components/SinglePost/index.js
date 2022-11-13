import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import unsplash from "../../assets/images/unsplash.jpg"
import Header from '../Header';



export default function SinglePost() {
    const { id } = useParams();  
    const [data, setDetails] = useState({
      name: "",
      email: "",
      date: "",
    });
  
    useEffect(() => {
      const getDatas = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response)
        setDetails(response.data);
      };
      getDatas();
    }, []);
  
     return (
        <React.Fragment>
            <Header title={"Single Post"}  active="post"/>
       <div className='px-2 mt-3'>
        <h3 className='text-justify'>{data.title}</h3>
        
       <div  className='mt-3 border border-1 rounded px-3'>
        <p className='text-justify'>
        {data.body}
        </p>
        </div>
        </div>
        <div className="profile-icon position-relative  d-flex flex-row  align-items-center">
          {/* <div className="position-absolutep py-1">
            <img className="profile-img " src={unsplash} alt="me" style={{ width: "100px",
                 height:" 100px",margin:"132px" }} ></img>
          </div> */}
        </div>
        </React.Fragment>
  )
}
