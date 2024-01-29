

import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='formInputs'>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name'  id='inputStyle'/>
                </label>
                <br />
                <label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='E-Mail' id='inputStyle' />
                </label>
                <br />
                <label>
                    <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder='Leave a comment' className='inputStyleBox' />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;



