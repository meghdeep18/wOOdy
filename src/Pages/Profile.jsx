import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
function Profile() 
{
    
  const redirect=useNavigate();
  
  useEffect(()=>{
    if(!(localStorage.getItem('id')))
    {
      redirect('/');
    }
    fetch();
  },[]);

  const [data,setData]=useState({});
  const fetch=async()=>{
    const res=await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
    setData(res.data);



  }
    return (
<div>
  <div className="container-fluid page-header py-5 mb-5">
    <div className="container py-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <p className="text-white mb-3 animated slideInDown">
            This is our master team that will Work on your project
        </p>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="section-title text-center">
        <h1 className="display-7 mb-5">Profile </h1>
      </div>
      <div className="row g-12 ">
        <div className="col-lg-5 col-md-6  wow fadeInUp"  data-wow-delay="0.1s">
          
          <div className="team-item ">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-1.jpg" alt />
              <div className="team-social">
                <a className="btn btn-square" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-square" href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center border border-5 border-light border-top-0 p-4">
              <h5 className="mb-0">{data.name}</h5>
              <small>{data.email}</small><br />
              <br />
              <button  className='button' onClick={()=>redirect('/edit_profile/'+data.id)}>Edit </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default Profile