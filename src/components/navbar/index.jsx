import '../../styles/index.css'
export const Navbar =()=>{
    return(
       <header>
            <Banner/>
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