import React from 'react';

const Download = () => {
    return (
        <section id="download" className="s-download target-section">
  <div className="row section-header align-center" data-aos="fade-up">
    <div className="col-full">
      <h1 className="display-1">
        Join Our Community of 3,000,000+ Users.
      </h1>
      <p className="lead">
        Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. 
        Ut quis enim rerum quia assumenda repudiandae non cumque qui. Amet repellat 
        omnis ea.
      </p>
    </div>
  </div> {/* end section-header */}
  <div className="row">
    <div className="col-full text-center">
      <ul className="download-badges" data-aos="fade-up">
        <li><a href="#0" title className="badge-appstore">App Store</a></li>
        <li><a href="#0" title className="badge-googleplay">Play Store</a></li>
      </ul>
    </div> 
  </div>
  <div className="row download-bottom-image" data-aos="fade-up">
    <img src="images/app-screen-1400.png" srcSet="images/app-screen-600.png 600w, 
                  images/app-screen-1400.png 1400w, 
                  images/app-screen-2800.png 2800w" sizes="(max-width: 2800px) 100vw, 2800px" alt="App Screenshots" /> 
  </div>
</section>

    )
}

export default Download;
