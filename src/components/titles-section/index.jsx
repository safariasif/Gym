import React from "react";
import '../../styles/index.css'

export const Title = ({ title, about }) => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-xs-8 text-center justify-content-center m-auto my-5">
          <h2 className="text-light display-4 awards-title">{title}</h2>
          <p className="my-4 awards-description text-light">{about}</p>
        </div>
      </div>
    </section>
  );
};