const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
        <img className="logo-puma" src="/images/R.png"/>
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
  
        <button className="login-btn">
            <img className="login-btn-img" src="/images/login.svg"/>
            <span className="text-login">login</span>
            </button>
      </nav>
    );
  };
  
  export default Navigation;