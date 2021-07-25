import React from 'react';
import Link from 'next/link'
import ImageGallery from "@components/ImageGallery";
import Footer from '@components/footer';


export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/porto.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Portofolio</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' href="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Portofolio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='heading'>
              Perfection<span className='br'></span> concept<span className='br'></span> Design
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              et lobortis Nulla in odio quis augue ultrices blandit. 
              Phasellus ipsum nibh, porta non sapien non efficitur pulvinar neque. 
              Sed ut perspiciatis unde omnis iste natus errorsit 
              voluptatem accusantium natus error sit.Mauris interdum libero 
              vitae tellus vestibulum, nec sollicitudin dui mollis.
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

  <Footer />
</div>

);
