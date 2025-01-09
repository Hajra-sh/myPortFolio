import React from 'react'
import './Contact.css'


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "09fc42e0-593c-46d7-afe0-9b4169261f01");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>

      <div className="main">
        <h1>Get In Touch</h1>
      </div>

      <div className="section">
        <div className="left">
          <h1>Let's Talk</h1>
          <p>Surely, available to take a new project, so feel free to send me a message about anything that you want me to work for.
            You can contact anytime.
          </p>
          <div className="details">

            <div className="detail">
              <p>📩 shahbazhajra2@gmail.com</p>
            </div>
            <div className="detail">
              <p>📞 0323-1483-193</p>
            </div>
            <div className="detail">
              <p>📍 LHR</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name="name" id="" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name="name" id="" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows={8} placeholder='Enter your msg'></textarea>
          <button className='submit'>Submit Now </button>
        </form>
      </div>

    </div>
  )
}

export default Contact
