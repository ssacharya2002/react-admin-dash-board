import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>lamaadmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
        </div>
        <div className="user">
            <img src="https://images.pexels.com/photos/363905/pexels-photo-363905.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Jane</span>
        </div>
        
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </div>
  ) 
}

export default Navbar
