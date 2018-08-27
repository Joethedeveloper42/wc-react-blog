import React from 'react';

const BlogHero = ({logo, heading, buttonText}) => {
  return (
    <section className="blog-header bg-secondary container mb-2">
      <div className="blog-logo">
        <img className="checkout-logo py-5" src={logo} alt="checkout.com logo"/>
      </div>
      <div className="blog-add-post d-flex justify-content-between py-4">
        <h3>{heading}</h3>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#submitModal">{buttonText}</button>
      </div>
    </section>
  );
}

export default BlogHero;