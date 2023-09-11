const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR STYLE DESERVES THE BEST</h1>
          <p className="title">
          Upgrade your style with our PUMA jackets, delivering the best for your fashion needs. Elevate your look with us today.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img margin='8px' height="30px" src="https://benkoorthodontics.com/wp-content/uploads/2018/12/2000px-Amazon_logo_plain.svg.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img className="hero-image" src="https://bit.ly/3r5Y6EJ" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;