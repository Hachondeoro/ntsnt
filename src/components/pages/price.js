import React from 'react';
import { Link } from '@reach/router';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/price.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Pricing</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Pricing />

  <section className='container-fluid'>
        <div className='row m-10-hor'>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Basic</div>
            <div className="bigprice"><span className='text-gradient'>$29</span> <small>Month</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Full Acces</li>
              <li><i className="fa fa-check"></i> Unlimited Bandwidth</li>
              <li><i className="fa fa-check"></i> Admin Panel</li>
              <li><i className="fa fa-check"></i> Email Account</li>
              <li><i className="fa fa-check"></i> 8 Weeks Free Service</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Standard</div>
            <div className="bigprice"><span className='text-gradient'>$39</span> <small>Month</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Full Acces</li>
              <li><i className="fa fa-check"></i> Unlimited Bandwidth</li>
              <li><i className="fa fa-check"></i> Admin Panel</li>
              <li><i className="fa fa-check"></i> Email Account</li>
              <li><i className="fa fa-check"></i> 8 Weeks Free Service</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Advanced</div>
            <div className="bigprice"><span className='text-gradient'>$49</span> <small>Month</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Full Acces</li>
              <li><i className="fa fa-check"></i> Unlimited Bandwidth</li>
              <li><i className="fa fa-check"></i> Admin Panel</li>
              <li><i className="fa fa-check"></i> Email Account</li>
              <li><i className="fa fa-check"></i> 8 Weeks Free Service</li>
            </ul>
          </div>
        </div>

        </div>
    </section>

  <Testimony/>
  <Footer />
</div>

);
