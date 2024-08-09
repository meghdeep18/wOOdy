import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useRef } from 'react';



function Signup_page() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    status: "Unblock"
  });

  const formRef = useRef();

  const onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {
    var result = true;
    if (formvalue.name === "" || formvalue.name === null) {
      result = false;
      toast.error('Name Field is required !');
      return false;
    }
    if (formvalue.email === "" || formvalue.email === null) {
      result = false;
      toast.error('Email Field is required !');
      return false;
    }
    if (formvalue.password === "" || formvalue.password === null) {
      result = false;
      toast.error('Password Field is required !');
      return false;
    }
    return result;
  }


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_w0yv91m', 'template_0fxbjme', form.current,  {
  //       publicKey: '7N-2B1tb4vkoFsprg',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const res = await axios.post(`http://localhost:3000/user`, formvalue);
        if (res.status === 201) {
          toast.success('Register Success');
          setFormvalue({ ...formvalue, name: "", email: "", password: "" });
          ; // Send confirmation email after successful registration
        }
      } catch (error) {
        toast.error('Registration Failed!');
        console.error(error);
      }
    }
  }

    return (
      
        <div>
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Sign up</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Sign up</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Signup Start */}
  <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{margin: '6rem 0'}}>
    <div className="container contact px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <div className="p-lg-5 ps-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">Sign up</h1>
            </div>
            {/* <p className="mb-4">The  form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text"value={formvalue.name} onChange={onchange} className="form-control" name='name' id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" value={formvalue.email} onChange={onchange}className="form-control" name='email' id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="password"value={formvalue.password} onChange={onchange} className="form-control"name='password' id="password" placeholder="password" />
                    <label htmlFor="password">password</label>
                  </div>
                </div>
                {/* <div className="col-12">
                  <div className="form-floating">
                    <input type="password" value={formvalue.cpassword} onChange={onchange}className="form-control" name='password'id="password" placeholder="confpassword" />
                    <label htmlFor="password">confirm password</label>
                  </div>
                </div> */}
                <div className="col-12">
                  <button onClick={onsubmit}  className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                </div>
                <p><Link to="/Login_page">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 pe-lg-0" style={{minHeight: 400}}>
          <div className="position-relative h-100">
            <iframe className="position-absolute w-100 h-100" style={{objectFit: 'cover'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    ) 
}

export default Signup_page