import React from 'react';

const Home = () => {
    return (
        <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
  <div className="shadow-overlay" />
  <div className="home-content">
    <div className="row home-content__main">
      <div className="home-content__left">
        <h1>
          An Amazing App <br />
          That Does It All.
        </h1>
        <h3>
          Voluptatem ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explica. Nemo enim ipsam voluptatem quia. 
          Ut quis enim.
        </h3>
        <div className="home-content__btn-wrap">
          <a href="#download" className="btn btn--primary home-content__btn smoothscroll">
            Get The App
          </a>
        </div>
      </div> {/* end home-content__left*/}
      <div className="home-content__right">
        <img src="images/hero-app-screens-800.png" srcSet="images/hero-app-screens-800.png 1x, images/hero-app-screens-1600.png 2x" />
      </div> {/* end home-content__right */}
    </div> {/* end home-content__main */}
    <ul className="home-content__social">
      <li><a href="#0">Facebook</a></li>
      <li><a href="#0">twitter</a></li>
      <li><a href="#0">Instagram</a></li>
    </ul>
  </div> {/* end home-content */}
  <a href="#about" className="home-scroll smoothscroll">
    <span className="home-scroll__text">Scroll</span>
    <span className="home-scroll__icon" />
  </a> 
</section>

    )
}

export default Home;
