import React from 'react';
import ImageGallery from "@components/ImageGallery";
import Footer from '@components/footer';


export default () => (
  <div>
      <section className='jumbotron breadcumb h-vh' style={{backgroundImage: `url(${'./img/imghome2.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-10 mx-auto text-center '>
                <div className='heading'>
                  Experience Design With Precision
                </div>
                <div className='content mx-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                  nisl non rutrum commodo, sem magna.
                </div>
                <div class="btn" onClick={()=> window.open("/home2", "_self")}>
                  <span className="shine"></span>
                  <span>Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid pb-0 black_more'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              Concept <span className='br'></span>Design 
            </div>
            <div className='subheading'>
              With Precision
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

    <section className='container-fluid black_more'>
      <div className='row m-10-hor'>
        <div className='col-12'>
          <div className='AppContainer'>
            <ImageGallery />
          </div>
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
      
    <Footer />

  </div>
);
