import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function Login_page() {
  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  })

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    //console.log(formvalue);
  }

  const validation = () => {
    var result = true;

    if (formvalue.email === "" || formvalue.email == null) {
      result = false;
      toast.error('Email Field is required !');
      return false;
    }
    if (formvalue.password === "" || formvalue.password == null) {
      result = false;
     toast.error('Password Field is required !');
      return false;
    }
    return result;
  }


           const onsubmit = async (e)=>{
          e.preventDefault();
          if (validation()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      if (res.data.length > 0) {
        if (res.data[0].password === formvalue.password) {

          if (res.data[0].status === "Unblock") {
            // session variable create
            localStorage.setItem('name', res.data[0].name);
            localStorage.setItem('id', res.data[0].id);

           toast.success('Login Successfull !');
            setFormvalue({ ...formvalue, email: "", password: "" });
            redirect('/profile');
          }
          else {
            toast.success('Login Failed due to user Blocked !');
            setFormvalue({ ...formvalue, email: "", password: "" });
            redirect('/login');
          }
        }
        else {
          alert('Password Not valid !');
          setFormvalue({ ...formvalue, email: "", password: "" });
        }
      }
      else {
        alert('Username Not valid !');
        setFormvalue({ ...formvalue, email: "", password: "" });
      }
    }
  }
    return(
      <div>
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Login</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className=""><a className="text-white" href="#">Home/</a></li>
          <li className=""><a className="text-white" href="#">Pages/</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Login</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{margin: '6rem 0'}}>
    <div className="container contact px-lg-0">
      <div className="row g-0 mx-lg-0">
        <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
          <div className="p-lg-5 ps-lg-0">
            <div className="section-title text-start">
              <h1 className="display-5 mb-4">Login</h1>
            </div>
            <form>
              <div className="row g-3">
           
                <div className="col-md-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" value={formvalue.email} onChange={onchange} name='email'id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="password" className="form-control"value={formvalue.password} onChange={onchange} name='password' id="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <button onClick={onsubmit}  className="btn btn-primary w-100 py-3" type="submit">Login</button>
                </div>
                <p><Link to="/signup_page">Signup</Link></p> 
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
export default Login_page