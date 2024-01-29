import React, { useState } from 'react';
import Form from './Form'; 

function SubmitForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('Example_fetch_post_url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (!response.ok) {
                throw new Error('We Cannot Submit');
            }
            
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className='submitForm'>
            <h2>Submit Form</h2>
            <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
}

export default SubmitForm;
