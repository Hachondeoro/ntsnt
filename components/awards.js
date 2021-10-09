import Link from "next/link";
import React from "react";
import awards from "public/content/awards.json";

const Awards = () => (
  <div className="wraperitem mt-5">
    <h1 style={{ textAlign: "center", color: "black" }}>OUR AWARDS</h1>
    <section className="text-center awards">
      <div className="row justify-content-center">
        {awards.images.map((item) => (
          <div key={item.title} className="col-9 col-md-6 col-lg-2">
            <h1>{item.title}</h1>
            {/* <Link href="/awards/2018subcontractor"> */}
              <img src={item.image} width="100%" />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Awards;
