import React from 'react';

const Footer = () => {
    return (
        <footer className="s-footer footer">
  <div className="row section-header align-center">
    <div className="col-full">
      <h1 className="display-1">
        Let's Stay In Touch.
      </h1>
      <p className="lead">
        Subscribe for updates, special offers, and other amazing stuff.
      </p>
    </div>
  </div> {/* end section-header */}
  <div className="row footer__top">
    <div className="col-full footer__subscribe end">
      <div className="subscribe-form">
        <form id="mc-form" className="group" noValidate="true">
          <input type="email" defaultValue name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required />
          <input type="submit" name="subscribe" defaultValue="Sign Up" />
          <label htmlFor="mc-email" className="subscribe-message" />
        </form>
      </div>
    </div>
  </div> {/* end footer__top */}
  <div className="row footer__bottom">
    <div className="footer__about col-five tab-full left">
      <h4>About Kairos.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex consectetur adipisicing elit do eiusmod tempor.
      </p>
      <ul className="footer__social">
        <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
        <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
        <li><a href="#0"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
      </ul>
    </div>
    <div className="col-five md-seven tab-full right end">
      <div className="row">
        <div className="footer__site-links col-five mob-full">
          <h4>Site links.</h4>
          <ul className="footer__site-links">
            <li><a href="#home" className="smoothscroll">Intro</a></li>
            <li><a href="#about" className="smoothscroll">About</a></li>
            <li><a href="#features" className="smoothscroll">Features</a></li>
            <li><a href="#pricing" className="smoothscroll">Pricing</a></li>
            <li><a href="#download" className="smoothscroll">Download</a></li>
            <li><a href="#0">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer__contact col-seven mob-full">
          <h4>Contact Us.</h4>
          <p>
            Phone: (+63) 555 1212 <br />
            Fax: (+63) 555 0100
          </p>
          <p>
            Need help or have a question? Contact us at: <br />
            <a href="mailto:#0" className="footer__mail-link">support@kairos.com</a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-full ss-copyright">
      <span>© Copyright Kairos 2020</span> 
      <span>Created by <a href="#">Rodolphe Augusto</a></span>
    </div>
  </div> {/* end footer__bottom */}
  <div className="go-top">
    <a className="smoothscroll" title="Back to Top" href="#top" />
  </div>
</footer>

    )
}

export default Footer;
