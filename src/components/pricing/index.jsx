import profile2 from "../../assets/imgs/profile-2.png";


function Pricing() {
    return (
      <div>
        <div id="pricing" className="block-17 px-4 space-between-blocks">
          <div className="container">
            <div className="block-17__header col-lg-8 col-xl-7 mx-auto text-center px-0">
              <h1 className="block__title mb-3">PRICING</h1>
              <p className="block__paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard
              </p>
            </div>
            <div className="block-17__card row flex-column-reverse flex-lg-row justify-content-center">
              <div className="testimonial-card-3 text-center col-lg-6 px-0 d-flex align-items-center justify-content-center">
                <div className="px-4 px-lg-5">
                  <img className="person__avatar" src={profile2} />
                  <p className="testimonial-card-3__paragraph my-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="flex-grow-1 d-flex flex-column mb-3">
                    <span className="person__name">Ali Boukeroui</span>
                    <span className="person__info my-1">indiehackers.com</span>
                    <span className="person__rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                </div>
                <span className="testimonial-card-3__quote-symbol">
                  <i className="fas fa-quote-left"></i>
                </span>
              </div>
              <div className="cta-card col-lg-5 px-0">
                <div className="plan-card text-center">
                  <h6 className="plan-card__name mb-0">Free Shipping</h6>
                  <p className="discount mt-3 mb-0 d-flex align-items-center justify-content-center">
                    <span className="discount__old-price mx-2">$300</span>
                    <span className="discount__percentage mx-2">50% off</span>
                  </p>
                  <p className="plan-card__price my-2">$149</p>
                  <span className="plan-card__duration">
                    90 Days Money Back Guarenteed
                  </span>
                  <ul className="plan-features list-unstyled mt-5 mb-0">
                    <li className="plan-features__li">
                      <span className="plan-features__li-icon mx-1">
                        <svg
                          className="bi bi-check2-circle"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          />
                        </svg>
                      </span>
                      <span className="mx-3">The Watch</span>
                    </li>
                    <li className="plan-features__li">
                      <span className="plan-features__li-icon mx-1">
                        <svg
                          className="bi bi-check2-circle"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          />
                        </svg>
                      </span>
                      <span className="mx-3">+Bonus: Accessories</span>
                    </li>
                    <li className="plan-features__li">
                      <span className="plan-features__li-icon mx-1">
                        <svg
                          className="bi bi-check2-circle"
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
                          />
                        </svg>
                      </span>
                      <span className="mx-3">Lifetime Mobile App</span>
                    </li>
                    <li className="mt-5">
                      <a href="#" className="d-block btn btn-primary px-5 mx-auto">
                        Buy Now
                      </a>
                      <small className="d-block mt-2 text-center">
                        208 Left. Discount ends after 2 weeks
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Pricing