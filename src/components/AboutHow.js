import React from 'react';

const AboutHow = () => {
    return (
        <section id="about-how" className="s-about-how">
        <div className="row">
          <div className="col-full video-bg" data-aos="fade-up">
            <div className="shadow-overlay" />
            <a className="btn-video" href="https://player.vimeo.com/video/14592941?color=00a650&title=0&byline=0&portrait=0" data-lity>
              <span className="video-icon" />
            </a>
            <div className="stats">
              <div className="item-stats">
                <span className="item-stats__num">
                  3.1M
                </span>
                <span className="item-stats__title">
                  Downloads
                </span>
              </div> {/* end item-stats */}
              <div className="item-stats">
                <span className="item-stats__num">
                  24K
                </span>
                <span className="item-stats__title">
                  Positive Reviews
                </span>
              </div> {/* end item-stats */}
            </div>
          </div> {/* end video-bg */}
        </div>
        <div className="row process-wrap">
          <h2 className="display-2 text-center" data-aos="fade-up">How The App Works?</h2>
          <div className="process" data-aos="fade-up">
            <div className="process__steps block-1-2 block-tab-full group">
              <div className="col-block step">
                <h3 className="item-title">Sign-Up</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p> 
              </div>
              <div className="col-block step">
                <h3 className="item-title">Create</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p> 
              </div>
              <div className="col-block step">
                <h3 className="item-title">Compose</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p> 
              </div>
              <div className="col-block step">
                <h3 className="item-title">Send</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </p> 
              </div>  
            </div> {/* end process__steps */}
          </div> {/* end process */}
        </div> {/* end about-how */}
      </section>
       
    )
}

export default AboutHow;
