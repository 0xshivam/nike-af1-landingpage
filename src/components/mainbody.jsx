const Mainbody = () => {
    return (
        <main className="main container">
      <div className="main-content">
        <h1>Embrace Iconic Style: Nike Air Force 1 </h1>
        <p>
          Welcome to the official brand page of Nike Air Force 1, where timeless style meets unparalleled performance. Get ready to take flight with Nike Airforce 1.
        </p>

        <div className="main-btn1">
          <button>Shop Now </button>
          <button className="main-btn2">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/public/images/amazon.png" alt="amazon-logo" />
            <img src="/public/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src="/public/images/shoeimage.png" alt="main-image" />
      </div>
    </main>
    );         
};

export default Mainbody;