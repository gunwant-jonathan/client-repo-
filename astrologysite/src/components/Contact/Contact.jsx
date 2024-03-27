import React from 'react';
import { useState, useRef } from 'react'; // import useRef hook
import './contact.css';
import ClipLoader from 'react-spinners/ClipLoader'; // import cliploader component

export default function Contact() {
  const [form,setform]=useState({});
  const [loading, setLoading] = useState(false); // create a loading state
  const formRef = useRef(); // create a ref for the form element
  function handel(e){
    setform(
      {
        ...form,
        [e.target.name]:e.target.value,
      }
    )
  }
  async function hand(e){
    e.preventDefault();
    setLoading(true); // set loading to true when form is submitted
    const response=await fetch('https://teal-antelope-tam.cyclic.app/',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.text();
    console.log(data); 
    // clear the form state
    setform({});
    formRef.current.reset(); // reset the form element
    setLoading(false); // set loading to false when response is received
  }
  return (
    <>
      <div className='heading'>
        <h2>Whatsapp us on our no +919798297327 or fill below form if you have any queries</h2>
      </div>
      <div className='nalla' style={{position: 'relative'}}> 
      <div className='Contact'>
      <div onSubmit={hand}>
        <form ref={formRef}> 
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='Name'  onChange={handel}/><br /><br />
          <label htmlFor='mobile'>Mobile Number:</label>
          <input type='tel' id='mobile' name='Phone' onChange={handel}/><br /><br />
          <label htmlFor='query'>Query:</label><br />
          <textarea id='query' name='query' onChange={handel}></textarea><br /><br />
          <input type='submit' value='Submit' disabled={loading} /> 
        </form>
      </div>
      </div>
      </div>
      {loading && ( // render the cliploader component when loading
        <div className="spinner-container" style={{position: 'absolute', top: '73%', left: '52%', transform: 'translate(-50%, -50%)', zIndex: 1}}>
        <ClipLoader
          color="#1D4F2A" // change the color of the spinner
          size={100} // change the size of the spinner
          loading={loading} // pass the loading state as a prop
        />
        </div>
      )}
    </>
  );
}