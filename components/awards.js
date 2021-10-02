import Link from "next/link";
import React from "react";

const Awards = () => (
  <div className="wraperitem mt-5">
    <h1 style={{ textAlign: "center", color:"black"}}>OUR AWARDS</h1>
    <section className="text-center awards">
      <div className="row justify-content-center">
        <div className="col-9 col-md-6 col-lg-2">
          <h1>2018 EBC Subcontractor of the Year</h1>
          <Link href="/awards/2018subcontractor">
            <img src="/images/awards/logos/ebc2018award.png" width="100%" />
          </Link>
        </div>
        <div className="col-9 col-md-6 col-lg-2">
          <h1>2019 EBC Cladding Subcontractor of the year</h1>
          <Link href="/awards/2019cladding">
            <img
              src="/images/awards/logos/2019subcontractor.png"
              width="100%"
            />
          </Link>
        </div>
        <div className="col-9 col-md-6 col-lg-2">
          <h1>2019 EBC Subcontractor of the Year</h1>
          <Link href="/awards/2019subcontractor">
            <img
              src="/images/awards/logos/2019subcontractor.png"
              width="100%"
            />
          </Link>
        </div>
        <div className="col-9 col-md-6 col-lg-2">
          <h1>2019 Telstra NT Business of the Year</h1>
          <Link href="/awards/2019telstra">
            <img src="/images/awards/logos/telstra.png" width="100%" />
          </Link>
        </div>
        <div className="col-9 col-md-6 col-lg-2">
          <h1>2020 EBC Subcontractor of the Year</h1>
          <Link href="/awards/2020finalist">
            <img
              src="/images/awards/logos/2020subcontractor.png"
              width="100%"
            />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Awards;
