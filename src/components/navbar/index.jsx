import '../../styles/index.css'
import { useState } from 'react'
import logo from '../../images/logo.png'
export const Header =()=>{
    return(
       <header>
            <Banner/>
            <Navbar/>
       </header>
    )
}


const Banner =()=>{
    return (
      <div className="text-light text-uppercase  font-weight-bold banner">
        <h2 className='main-heading display-1'>Oxygen Gym</h2>
        <h5 className='sub-heading display-6'>No Pain No gain</h5>
      </div>
    );
}

export const Navbar=()=>{
  const [change,setChange]=useState(false);
  const ChangeButton=()=>{
    setChange(!change)
  }
    return (
      <nav className="navbar fixed-top navbar-expand-md nav-menu ">
        <button
          className={`navbar-toggler nav-button ${change?'change':''} `}
          data-bs-toggle="collapse"
          data-bs-target="#navigationBar"
          onClick={ChangeButton}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
        <div
          className="d-flex justify-content-md-center justify-content-end px-3 px-md-0"
          style={{ position: 'fixed', left: '0px', top: '25px' }}
        >
          <img src={logo} className="img-fluid w-25 h-25" />
        </div>
        <div className="collapse navbar-collapse" id="navigationBar">
          <ul className="navbar-nav list-unstyled">
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                خانه
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                افتخارات
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                خدمات
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                گالری
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                مربی ها
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                پلن ها
              </a>
            </li>
            <li className="nav-item text-white">
              <a href="#" className="nav-link">
                ارتباط با ما
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}