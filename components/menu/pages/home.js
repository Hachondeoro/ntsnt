import React from 'react';
import Slider from '@components/sliderhome';
import Carouselteam from '@components/carouselteam';
import Bannercontact from '@components/bannercontact';
import Pricing from '@components/pricing';
import Testimony from '@components/carouseltestimony';
import Footer from '@components/footer';


export default () => (
  <div>
      <section className="jumbotron jumbomain">
          <Slider />
          <div className="icon-scroll-wraper">
            <div className="icon-scroll">
              <div className="icon-scroll-screen"></div>
            </div>
          </div>
      </section>

      <section className='container-fluid p-0'>
        <div className='row'>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="/img/bg-serv-1.jpg"
                    alt="bg-features"
                  />
              </div>
              <div className='content'>
                <div className='heading'>
                  Concept Design
                </div>
                <div className='con-text'>
                  Qui ut ceteros comprehensam. Cu eos sale 
sanctus eligendi, id ius elitr saperet,ocurreret 
pertinacia pri an. No mei nibh consectetuer
                </div>
                <div className='link'>
                  <span className="shine"></span>
                  Read More
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="/img/bg-serv-2.jpg"
                    alt="bg-features"
                  />
              </div>
              <div className='content'>
                <div className='heading'>
                  Interior
                </div>
                <div className='con-text'>
                  Qui ut ceteros comprehensam. Cu eos sale 
sanctus eligendi, id ius elitr saperet,ocurreret 
pertinacia pri an. No mei nibh consectetuer
                </div>
                <div className='link'>
                  <span className="shine"></span>
                  Read More
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="/img/bg-serv-3.jpg"
                    alt="bg-features"
                  />
              </div>
              <div className='content'>
                <div className='heading'>
                  Architecture
                </div>
                <div className='con-text'>
                  Qui ut ceteros comprehensam. Cu eos sale 
sanctus eligendi, id ius elitr saperet,ocurreret 
pertinacia pri an. No mei nibh consectetuer
                </div>
                <div className='link'>
                  <span className="shine"></span>
                  Read More
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='container-fluid black pb-0'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              why <span className='br'></span>choose<span className='br'></span> us?
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae diam eleifend, 
              in maximus metus sollicitudin. Quisque vitae sodales lectus. 
              Nam porttitor justo sed mi finibus, vel tristique risus faucibus.
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Quisque vitae sodales lectus, 
              vel tristique risus faucibus.
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid pt-0 black'>
        <div className='row m-10-hor'>
         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              01.
            </div>
            <div className='heading'>
              MODERN DESIGN
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              02.
            </div>
            <div className='heading'>
              FULLY SUPPORT
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              03.
            </div>
            <div className='heading'>
              MAINTENANCE SUPPORT
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              04.
            </div>
            <div className='heading'>
              EXPERT DEVELOPER
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              05.
            </div>
            <div className='heading'>
              COMPLIANCE SOLUTION
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              06.
            </div>
            <div className='heading'>
              24 / 7 Support
            </div>
            <div className='content'>
              Curabitur mollis bibendum luctus. 
              Duis suscipit vitae dui sed suscipit. 
              Vestibulum auctor nunc vitae lectus.
            </div>
          </div>
         </div>

        </div>
    </section>

    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Our team</div>
            <div className='heading'>About Our Team</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  Curabitur mollis bibendum luctus. 
                  Duis suscipit vitae dui sed suscipit. Vestibulum auctor 
                  nunc vitae diam eleifend, in maximus metus sollicitudin. 
                  Quisque vitae sodales lectus. Nam p
                  orttitor justo sed mi finibus, 
                  vel tristique risus faucibus. 
                </p>
              </div>
            </div>
          </div>
          <Carouselteam />
        </div>
    </section>

    <Bannercontact/>
    <Pricing />
    <Testimony />
    <Footer />

  </div>
);
