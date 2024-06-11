import React, { useState } from "react";
import './hooks.css'

function HandlingH(){
    const [formData, setFormData] = useState({name:'',email:''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form Subimitted:' , formData);
    };


    return(
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            />
        <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            />
            <button type="submit">Submit</button>
            </form>
    );
}

export default HandlingH