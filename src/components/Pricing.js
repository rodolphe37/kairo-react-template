import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="s-pricing target-section">
  <div className="row section-header align-center" data-aos="fade-up">
    <div className="col-full">
      <h1 className="display-1">
        Our Simple <br /> Straight-Forward Pricing.
      </h1>
      <p className="lead">
        Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. 
        Ut quis enim rerum quia assumenda repudiandae non cumque qui. Amet repellat 
        omnis ea.
      </p>
    </div>
  </div> {/* end section-header */}
  <div className="row plans block-1-2 block-m-1-2 block-tab-full stack">
    <div className="col-block item-plan" data-aos="fade-up">
      <div className="item-plan__block"> 
        <div className="item-plan__top-part">
          <h3 className="item-plan__title">Free</h3>
          <p className="item-plan__price">$0</p>
          <p className="item-plan__per">Forever</p>
        </div>
        <div className="item-plan__bottom-part">
          <ul className="item-plan__features">
            <li><span>5GB</span> Storage</li>
            <li><span>10GB</span> Bandwidth</li>
            <li><span>30</span> Email Accounts</li>
            <li>Backup &amp; Restore</li>
          </ul>
          <a className="btn btn--primary large full-width" href="#0">Get Started</a>
        </div>  
      </div>
    </div> {/* end item-plan */}
    <div className="col-block item-plan item-plan--popular" data-aos="fade-up">
      <div className="item-plan__block"> 
        <div className="item-plan__top-part">
          <h3 className="item-plan__title">Pro Plan</h3>
          <p className="item-plan__price">$10</p>
          <p className="item-plan__per">Per Month</p>
        </div>
        <div className="item-plan__bottom-part">
          <ul className="item-plan__features">
            <li><span>500GB</span> Storage</li>
            <li><span>Unlimited</span> Bandwidth</li>
            <li><span>50</span> Email Accounts</li>
            <li>Backup &amp; Restore</li>
          </ul>
          <a className="btn btn--primary large full-width" href="#0">Get Started</a>
        </div>
      </div>
    </div> {/* end item-plan */}
  </div> {/* end plans */}
</section>

    )
}

export default Pricing;
