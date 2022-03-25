import React from 'react'
import { useForm } from '../hooks/useForm'
import Loader from './Loader.js'
import Message from './Message.js'
const initialForm ={
name: "",
email: "",
subject: "",
comments: "",

}
const validationsForm = (form) => {
     let errors = {};
     let regexName = /^([A-Za-zÑñ]+[áéíóú]?[A-Za-z]*){3,18}\s+([A-Za-zÑñ]+[áéíóú]?[A-Za-z]*){3,36}$/;
     let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
     let regexComments = /^.{1,255}$/;

     if(!form.name.trim()){
         errors.name = "The 'Full Name' field is required"
     }  else if(!regexName.test(form.name.trim())){
         errors.name = "The 'Full Name' field only accepts letters"
     } 

     if(!form.email.trim()){
        errors.email = "The 'Email' field is required"
    }  else if(!regexEmail.test(form.email.trim())){
        errors.email = "The 'Email' field is incorrect"
    }

    if(!form.subject.trim()){
        errors.subject = "The field 'Subject' is required"
    }  

    if(!form.comments.trim()){
        errors.comments = "The 'Comments' field is required"
    }  else if(!regexComments.test(form.comments.trim())){
        errors.comments = "The 'Comment' field must not exceed 255 characters"
    } 

     return errors;
}
let styles ={
    fontWeight: "bold",
    color: "rgba(190, 17, 17, 0.932)",
    background: " rgba(14, 45, 82, 0.493)",
    borderRadius: "30px",
    textAlign: "center",
    padding: "5px",
    



}
const ContactForm = () => {
    const {
        form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
    } = useForm(initialForm, validationsForm);

    return (
        <div>
              <h2 className='title'>Welcome</h2>
              <p className='subtitle'>This is my Form, send your data and view them in my email</p>
              <form onSubmit={handleSubmit}>
              
              <input 
              type='text' 
              name='name' 
              placeholder='Full Name'
              onChange={handleChange} 
              value={form.name} 
              required 
              onBlur={handleBlur}/>
{errors.name && <p style={styles}>{errors.name}</p>}
              <input type='email' 
              name='email' 
              placeholder='Email'
              onChange={handleChange} 
              value={form.email} 
              required 
              onBlur={handleBlur}/>
{errors.email && <p style={styles}>{errors.email}</p>}

            <input type='text' 
              name='subject' 
              placeholder='Subject'
              onChange={handleChange} 
              value={form.subject} 
              required 
              onBlur={handleBlur}/>
              {errors.subject && <p style={styles}>{errors.subject}</p>}

              


              
              <textarea 
              name='comments'
              cols='50'
              rows='5'
              placeholder='Comment'
              onChange={handleChange} 
              value={form.comments} 
              required 
              onBlur={handleBlur}></textarea>
             {errors.comments && <p style={styles}>{errors.comments}</p>}

              <input type='submit' value='Enviar'/>  
                  
                  </form> 
                  {loading && <Loader/> } 
    {response && <Message msg="The data has been sent" bgColor="#198754" /> }
        </div>
    )
}

export default ContactForm
